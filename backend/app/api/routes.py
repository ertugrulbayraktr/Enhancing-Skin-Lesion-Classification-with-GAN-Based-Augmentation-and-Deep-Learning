"""
API route definitions
"""

from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse

from app.schemas.response import (
    PredictionResponse, HealthResponse, ModelInfoResponse,
    ClassesResponse, ClassInfo, ErrorResponse
)
from app.services.inference import InferenceService
from app.utils.image_utils import load_image_from_bytes, validate_image_file
from app.core.config import (
    CLASS_NAMES, CLASS_INFO, MODEL_METRICS, NUM_CLASSES,
    INPUT_SIZE, MAX_FILE_SIZE
)

router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """
    Check API health and model status
    """
    try:
        from app.core.model_loader import model_loader
        model = model_loader.model
        model_loaded = model is not None
        
        return HealthResponse(
            status="ok",
            model_loaded=model_loaded,
            message="API is running and model is loaded" if model_loaded else "API is running but model failed to load"
        )
    except Exception as e:
        return HealthResponse(
            status="error",
            model_loaded=False,
            message=f"Error: {str(e)}"
        )


@router.get("/model-info", response_model=ModelInfoResponse, tags=["Model"])
async def get_model_info():
    """
    Get information about the model
    """
    return ModelInfoResponse(
        model_name="SEResNet",
        num_classes=NUM_CLASSES,
        input_size=INPUT_SIZE,
        accuracy=MODEL_METRICS["accuracy"],
        f1_score=MODEL_METRICS["f1_score"],
        precision=MODEL_METRICS["precision"],
        recall=MODEL_METRICS["recall"]
    )


@router.get("/classes", response_model=ClassesResponse, tags=["Model"])
async def get_classes():
    """
    Get information about all classes
    """
    classes_list = []
    for idx, name in CLASS_NAMES.items():
        info = CLASS_INFO[name]
        classes_list.append(
            ClassInfo(
                index=idx,
                name=name,
                full_name=info["full_name"],
                description=info["description"],
                risk_level=info["risk_level"]
            )
        )
    
    return ClassesResponse(classes=classes_list)


@router.post("/predict", response_model=PredictionResponse, tags=["Prediction"])
async def predict(file: UploadFile = File(...)):
    """
    Predict skin lesion class from uploaded image
    
    - **file**: Image file (JPEG or PNG, max 10MB)
    
    Returns prediction results with confidence scores and processing information
    """
    try:
        # Read file
        file_bytes = await file.read()
        file_size = len(file_bytes)
        
        # Validate file
        is_valid, error_msg = validate_image_file(file.filename, file_size, MAX_FILE_SIZE)
        if not is_valid:
            raise HTTPException(status_code=400, detail=error_msg)
        
        # Load image
        try:
            image = load_image_from_bytes(file_bytes)
        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=f"Failed to load image. Please ensure it's a valid image file. Error: {str(e)}"
            )
        
        # Make prediction
        try:
            result = InferenceService.predict(image, apply_hair_removal=True)
            
            # Add model info to response
            result["model_info"] = {
                "accuracy": MODEL_METRICS["accuracy"],
                "f1_score": MODEL_METRICS["f1_score"]
            }
            
            return PredictionResponse(**result)
            
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Model prediction failed. Please try again. Error: {str(e)}"
            )
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {str(e)}"
        )


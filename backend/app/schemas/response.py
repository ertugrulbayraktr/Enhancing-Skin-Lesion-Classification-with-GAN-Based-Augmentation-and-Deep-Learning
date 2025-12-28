"""
Pydantic response schemas
"""

from pydantic import BaseModel, Field, ConfigDict
from typing import Dict


class ProcessingInfo(BaseModel):
    """Image processing information"""
    hair_removed: bool = Field(..., description="Whether hair removal was applied")
    processed_image: str = Field(..., description="Base64 encoded processed image")


class PredictionResponse(BaseModel):
    """Response model for prediction endpoint"""
    model_config = ConfigDict(protected_namespaces=())
    
    predicted_class: str = Field(..., description="Predicted class name")
    predicted_class_index: int = Field(..., description="Predicted class index (0-4)")
    confidence: float = Field(..., description="Confidence score (0.0-1.0)")
    probabilities: Dict[str, float] = Field(..., description="Probabilities for all classes")
    processing: ProcessingInfo = Field(..., description="Processing information")
    model_info: Dict[str, float] = Field(..., description="Model performance metrics")


class HealthResponse(BaseModel):
    """Response model for health check endpoint"""
    model_config = ConfigDict(protected_namespaces=())
    
    status: str = Field(..., description="API status")
    model_loaded: bool = Field(..., description="Whether model is loaded")
    message: str = Field(..., description="Status message")


class ModelInfoResponse(BaseModel):
    """Response model for model info endpoint"""
    model_config = ConfigDict(protected_namespaces=())
    
    model_name: str = Field(..., description="Model architecture name")
    num_classes: int = Field(..., description="Number of output classes")
    input_size: tuple = Field(..., description="Expected input image size")
    accuracy: float = Field(..., description="Model accuracy")
    f1_score: float = Field(..., description="Model F1 score")
    precision: float = Field(..., description="Model precision")
    recall: float = Field(..., description="Model recall")


class ClassInfo(BaseModel):
    """Information about a single class"""
    index: int = Field(..., description="Class index")
    name: str = Field(..., description="Class short name")
    full_name: str = Field(..., description="Class full name")
    description: str = Field(..., description="Class description")
    risk_level: str = Field(..., description="Risk level (Low/Medium/High)")


class ClassesResponse(BaseModel):
    """Response model for classes info endpoint"""
    classes: list[ClassInfo] = Field(..., description="List of class information")


class ErrorResponse(BaseModel):
    """Error response model"""
    detail: str = Field(..., description="Error message")


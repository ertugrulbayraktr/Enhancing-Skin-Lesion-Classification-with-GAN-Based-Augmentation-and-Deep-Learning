"""
Inference service for model predictions
"""

import torch
import torch.nn.functional as F
from PIL import Image
from typing import Dict, Tuple

from app.core.model_loader import model_loader
from app.core.config import CLASS_NAMES
from app.utils.image_utils import preprocess_image, image_to_base64
from app.utils.hair_removal import remove_hair


class InferenceService:
    """Service for making predictions on images"""
    
    @staticmethod
    def predict(image: Image.Image, apply_hair_removal: bool = True) -> Dict:
        """
        Make prediction on an image
        
        Args:
            image: PIL Image (RGB)
            apply_hair_removal: Whether to apply hair removal preprocessing
            
        Returns:
            Dictionary containing prediction results
        """
        # Store original image for response
        original_image = image.copy()
        
        # Apply hair removal if enabled
        processed_image = image
        if apply_hair_removal:
            try:
                processed_image = remove_hair(image)
            except Exception as e:
                print(f"Warning: Hair removal failed: {e}. Using original image.")
                processed_image = image
        
        # Preprocess image
        image_tensor = preprocess_image(processed_image)
        
        # Move to device
        device = model_loader.device
        image_tensor = image_tensor.to(device)
        
        # Get model
        model = model_loader.model
        
        # Make prediction
        with torch.no_grad():
            outputs = model(image_tensor)
            probabilities = F.softmax(outputs, dim=1)
            confidence, predicted_class = torch.max(probabilities, 1)
        
        # Convert to Python types
        predicted_idx = predicted_class.item()
        confidence_score = confidence.item()
        probs = probabilities[0].cpu().numpy()
        
        # Create probability dictionary
        prob_dict = {
            CLASS_NAMES[i]: float(probs[i]) for i in range(len(probs))
        }
        
        # Prepare result
        result = {
            "predicted_class": CLASS_NAMES[predicted_idx],
            "predicted_class_index": predicted_idx,
            "confidence": confidence_score,
            "probabilities": prob_dict,
            "processing": {
                "hair_removed": apply_hair_removal,
                "processed_image": image_to_base64(processed_image)
            }
        }
        
        return result


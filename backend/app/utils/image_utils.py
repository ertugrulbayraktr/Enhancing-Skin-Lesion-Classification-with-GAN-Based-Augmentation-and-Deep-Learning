"""
Image preprocessing utilities
"""

import io
import base64
import torch
from PIL import Image
from torchvision import transforms
from typing import Tuple

from app.core.config import INPUT_SIZE, IMAGE_MEAN, IMAGE_STD


def load_image_from_bytes(file_bytes: bytes) -> Image.Image:
    """
    Load image from bytes
    
    Args:
        file_bytes: Image file bytes
        
    Returns:
        PIL Image (RGB)
    """
    image = Image.open(io.BytesIO(file_bytes))
    
    # Convert to RGB if necessary
    if image.mode != 'RGB':
        image = image.convert('RGB')
    
    return image


def preprocess_image(image: Image.Image) -> torch.Tensor:
    """
    Preprocess image for model input
    
    Args:
        image: PIL Image (RGB)
        
    Returns:
        Preprocessed tensor [1, 3, 224, 224]
    """
    transform = transforms.Compose([
        transforms.Resize(INPUT_SIZE),
        transforms.ToTensor(),
        transforms.Normalize(mean=IMAGE_MEAN, std=IMAGE_STD)
    ])
    
    # Apply transforms and add batch dimension
    tensor = transform(image).unsqueeze(0)
    
    return tensor


def image_to_base64(image: Image.Image, format: str = "JPEG") -> str:
    """
    Convert PIL Image to base64 string
    
    Args:
        image: PIL Image
        format: Image format (JPEG, PNG)
        
    Returns:
        Base64 encoded string with data URI prefix
    """
    buffered = io.BytesIO()
    image.save(buffered, format=format, quality=85)
    img_bytes = buffered.getvalue()
    img_base64 = base64.b64encode(img_bytes).decode('utf-8')
    
    return f"data:image/{format.lower()};base64,{img_base64}"


def validate_image_file(filename: str, file_size: int, max_size: int) -> Tuple[bool, str]:
    """
    Validate uploaded image file
    
    Args:
        filename: Name of the file
        file_size: Size of the file in bytes
        max_size: Maximum allowed file size in bytes
        
    Returns:
        Tuple of (is_valid, error_message)
    """
    from pathlib import Path
    from app.core.config import ALLOWED_EXTENSIONS
    
    # Check file extension
    file_ext = Path(filename).suffix.lower()
    if file_ext not in ALLOWED_EXTENSIONS:
        return False, f"Invalid file type. Allowed types: {', '.join(ALLOWED_EXTENSIONS)}"
    
    # Check file size
    if file_size > max_size:
        max_size_mb = max_size / (1024 * 1024)
        return False, f"File too large. Maximum size: {max_size_mb:.1f} MB"
    
    return True, ""


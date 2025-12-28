"""
Hair removal utility using OpenCV
Removes hair artifacts from dermatoscopy images
"""

import cv2
import numpy as np
from PIL import Image


def remove_hair(image: Image.Image) -> Image.Image:
    """
    Remove hair from dermatoscopy image using morphological operations and inpainting
    
    Args:
        image: PIL Image (RGB)
        
    Returns:
        PIL Image with hair removed (RGB)
    """
    # Convert PIL to numpy array
    img_array = np.array(image)
    
    # Convert RGB to BGR (OpenCV format)
    img_bgr = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)
    
    # Convert to grayscale
    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
    
    # Black-hat transform to detect dark structures (hairs)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (9, 9))
    blackhat = cv2.morphologyEx(gray, cv2.MORPH_BLACKHAT, kernel)
    
    # Threshold to create hair mask
    _, mask = cv2.threshold(blackhat, 10, 255, cv2.THRESH_BINARY)
    
    # Optional: Morphological operations to clean up mask
    kernel_small = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel_small)
    
    # Inpainting to fill hair regions
    result_bgr = cv2.inpaint(img_bgr, mask, inpaintRadius=6, flags=cv2.INPAINT_TELEA)
    
    # Convert back to RGB
    result_rgb = cv2.cvtColor(result_bgr, cv2.COLOR_BGR2RGB)
    
    # Convert back to PIL Image
    result_image = Image.fromarray(result_rgb)
    
    return result_image


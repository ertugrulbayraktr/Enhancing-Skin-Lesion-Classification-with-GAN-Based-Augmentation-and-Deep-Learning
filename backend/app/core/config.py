"""
Configuration settings for the application
"""

import os
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Model settings
MODEL_PATH = BASE_DIR / "models" / "SEResnet_model.pth"
NUM_CLASSES = 5
INPUT_SIZE = (224, 224)

# Class names mapping
CLASS_NAMES = {
    0: "NV",
    1: "MEL",
    2: "BKL",
    3: "BCC",
    4: "AKIEC"
}

# Class information
CLASS_INFO = {
    "NV": {
        "full_name": "Melanocytic Nevi",
        "description": "Benign moles. Common skin lesions that are usually harmless.",
        "risk_level": "Low"
    },
    "MEL": {
        "full_name": "Melanoma",
        "description": "Malignant skin cancer. Requires immediate medical attention.",
        "risk_level": "High"
    },
    "BKL": {
        "full_name": "Benign Keratosis",
        "description": "Benign skin lesion. Non-cancerous growth on the skin.",
        "risk_level": "Low"
    },
    "BCC": {
        "full_name": "Basal Cell Carcinoma",
        "description": "Common skin cancer. Slow-growing and treatable.",
        "risk_level": "Medium"
    },
    "AKIEC": {
        "full_name": "Actinic Keratosis",
        "description": "Pre-cancerous lesion. Should be monitored regularly.",
        "risk_level": "Medium"
    }
}

# Model performance metrics
MODEL_METRICS = {
    "accuracy": 0.9723,
    "f1_score": 0.9539,
    "precision": 0.9583,
    "recall": 0.9499
}

# Image preprocessing settings
IMAGE_MEAN = [0.485, 0.456, 0.406]
IMAGE_STD = [0.229, 0.224, 0.225]

# File upload settings
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png"}

# API settings
API_TITLE = "Skin Cancer Detection API"
API_DESCRIPTION = "AI-powered skin lesion classification using SEResNet"
API_VERSION = "1.0.0"


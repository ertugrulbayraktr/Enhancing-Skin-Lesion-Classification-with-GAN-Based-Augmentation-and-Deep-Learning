"""
Model loader with singleton pattern
Ensures model is loaded only once and reused across requests
"""

import torch
from pathlib import Path
from typing import Optional

from app.models.model_definition import SEResNet
from app.core.config import MODEL_PATH, NUM_CLASSES


class ModelLoader:
    """Singleton class for loading and caching the ML model"""
    
    _instance: Optional['ModelLoader'] = None
    _model: Optional[SEResNet] = None
    _device: Optional[torch.device] = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if self._model is None:
            self._load_model()
    
    def _load_model(self):
        """Load the model from disk"""
        try:
            # Determine device
            self._device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            print(f"Using device: {self._device}")
            
            # Initialize model
            self._model = SEResNet(num_classes=NUM_CLASSES, pretrained=False)
            
            # Load weights
            if not Path(MODEL_PATH).exists():
                raise FileNotFoundError(f"Model file not found: {MODEL_PATH}")
            
            state_dict = torch.load(MODEL_PATH, map_location=self._device)
            self._model.load_state_dict(state_dict)
            
            # Move to device and set to evaluation mode
            self._model.to(self._device)
            self._model.eval()
            
            print("[OK] Model loaded successfully!")
            
        except Exception as e:
            print(f"[ERROR] Error loading model: {e}")
            raise
    
    @property
    def model(self) -> SEResNet:
        """Get the loaded model"""
        if self._model is None:
            self._load_model()
        return self._model
    
    @property
    def device(self) -> torch.device:
        """Get the device"""
        if self._device is None:
            self._load_model()
        return self._device


# Global instance
model_loader = ModelLoader()


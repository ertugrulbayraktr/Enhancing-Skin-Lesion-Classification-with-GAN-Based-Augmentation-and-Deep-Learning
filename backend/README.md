# Skin Cancer Detection API - Backend

FastAPI backend for skin lesion classification using SEResNet deep learning model.

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- pip

### Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
uvicorn app.main:app --reload --port 8000
```

The API will be available at:
- **API**: http://localhost:8000
- **Interactive docs**: http://localhost:8000/docs
- **Alternative docs**: http://localhost:8000/redoc

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Check if API and model are loaded properly.

### Model Information
```
GET /api/model-info
```
Get model architecture and performance metrics.

### Classes Information
```
GET /api/classes
```
Get information about all 5 skin lesion classes.

### Predict
```
POST /api/predict
```
Upload an image and get prediction results.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `file` (image file, JPEG/PNG, max 10MB)

**Response:**
```json
{
  "predicted_class": "MEL",
  "predicted_class_index": 1,
  "confidence": 0.9523,
  "probabilities": {
    "NV": 0.0234,
    "MEL": 0.9523,
    "BKL": 0.0123,
    "BCC": 0.0089,
    "AKIEC": 0.0031
  },
  "processing": {
    "hair_removed": true,
    "processed_image": "data:image/jpeg;base64,..."
  },
  "model_info": {
    "accuracy": 0.9723,
    "f1_score": 0.9539
  }
}
```

## 🏗️ Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── api/
│   │   └── routes.py        # API endpoints
│   ├── core/
│   │   ├── config.py        # Configuration
│   │   └── model_loader.py  # Singleton model loader
│   ├── models/
│   │   └── model_definition.py  # SEResNet architecture
│   ├── services/
│   │   └── inference.py     # Prediction logic
│   ├── schemas/
│   │   └── response.py      # Pydantic models
│   └── utils/
│       ├── hair_removal.py  # Hair removal algorithm
│       └── image_utils.py   # Image preprocessing
├── models/
│   └── SEResnet_model.pth   # Trained model weights
├── requirements.txt
├── .env
└── README.md
```

## 🧠 Model Details

- **Architecture**: SEResNet (Squeeze-and-Excitation ResNet)
- **Base Model**: ResNet-50
- **Input Size**: 224x224 RGB
- **Classes**: 5 (NV, MEL, BKL, BCC, AKIEC)
- **Accuracy**: 97.23%
- **F1 Score**: 95.39%

## 🔬 Features

- **Hair Removal**: Automatic hair artifact removal using OpenCV
- **Model Caching**: Singleton pattern for efficient model loading
- **Input Validation**: File type and size validation
- **Error Handling**: Comprehensive error messages
- **CORS Enabled**: Frontend integration ready
- **Auto Documentation**: Swagger UI and ReDoc

## 🛠️ Development

### Run with auto-reload
```bash
uvicorn app.main:app --reload
```

### Test with curl
```bash
curl -X POST "http://localhost:8000/api/predict" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@test_image.jpg"
```

## 📝 License

MIT


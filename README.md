# 🔬 Skin Cancer Detection AI

> AI-powered skin lesion classification using Deep Learning

[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-green)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

An intelligent web application that uses a Squeeze-and-Excitation ResNet (SEResNet) model to classify skin lesions into 5 categories with 97.23% accuracy.

![Project Banner](docs/screenshots/banner.png) _(screenshot placeholder)_

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Model Performance](#-model-performance)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Disclaimer](#-disclaimer)

---

## ✨ Features

- 🖼️ **Drag & Drop Upload** - Easy image upload interface
- 🤖 **Real-time AI Predictions** - Get results in seconds
- 📊 **Visual Analytics** - Interactive charts and confidence scores
- 🔬 **Hair Removal** - Automatic preprocessing for better accuracy
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **97.23% Accuracy** - State-of-the-art SEResNet model
- 📖 **Educational Content** - Learn about different skin lesion types

---

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PyTorch 2.0+** - Deep learning framework
- **OpenCV** - Image preprocessing (hair removal)
- **Uvicorn** - ASGI server

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **Axios** - HTTP client

### ML Model
- **Architecture**: SEResNet (Squeeze-and-Excitation ResNet)
- **Base Model**: ResNet-50
- **Input Size**: 224x224 RGB
- **Parameters**: 25.2M trainable parameters

---

## 🎯 Model Performance

| Metric | Score |
|--------|-------|
| **Accuracy** | 97.23% |
| **F1 Score (Macro)** | 95.39% |
| **Precision (Macro)** | 95.83% |
| **Recall (Macro)** | 94.99% |

**Classified Lesions:**
- **NV** - Melanocytic Nevi (Benign)
- **MEL** - Melanoma (Malignant)
- **BKL** - Benign Keratosis
- **BCC** - Basal Cell Carcinoma
- **AKIEC** - Actinic Keratosis

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Python 3.11+**
   - Download from [python.org](https://www.python.org/downloads/)
   - Verify: `python --version`

2. **Node.js 18+** and **npm**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version` and `npm --version`

3. **Git** (optional, for cloning)
   - Download from [git-scm.com](https://git-scm.com/)

### System Requirements

- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB free space
- **GPU**: Optional (CPU inference supported)

---

## 🚀 Installation

### Step 1: Clone or Download the Repository

```bash
# Option A: Clone with Git
git clone https://github.com/ertugrulbayraktr/skin-cancer-detection-ai.git
cd skin-cancer-detection-ai

# Option B: Download ZIP
# Extract the ZIP file and navigate to the folder
```

### Step 2: Setup Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Verify model file exists
# Make sure SEResnet_model.pth is in backend/models/ directory
```

### Step 3: Setup Frontend

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install Node dependencies
npm install

# This will install React, Vite, Tailwind CSS, Chart.js, Axios, etc.
```

---

## 🏃 Running the Application

You need to run **both** backend and frontend servers.

### Terminal 1: Start Backend Server

```bash
# Navigate to backend directory
cd backend

# Activate virtual environment if not already active
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

# Start FastAPI server
python -m uvicorn app.main:app --reload --port 8000

# Or simply:
uvicorn app.main:app --reload
```

**Backend will start at:**
- API: http://localhost:8000
- Interactive Docs: http://localhost:8000/docs
- Alternative Docs: http://localhost:8000/redoc

### Terminal 2: Start Frontend Server

```bash
# Navigate to frontend directory (open new terminal)
cd frontend

# Start Vite development server
npm run dev
```

**Frontend will start at:**
- Application: http://localhost:5173

### Step 3: Open Your Browser

Navigate to http://localhost:5173 and start analyzing images!

---

## 📁 Project Structure

```
skin-cancer-detection/
│
├── backend/                      # Python Backend
│   ├── app/
│   │   ├── api/
│   │   │   └── routes.py         # API endpoints
│   │   ├── core/
│   │   │   ├── config.py         # Configuration
│   │   │   └── model_loader.py   # Model singleton
│   │   ├── models/
│   │   │   └── model_definition.py  # SEResNet architecture
│   │   ├── services/
│   │   │   └── inference.py      # Prediction logic
│   │   ├── schemas/
│   │   │   └── response.py       # Pydantic models
│   │   ├── utils/
│   │   │   ├── hair_removal.py   # OpenCV preprocessing
│   │   │   └── image_utils.py    # Image utilities
│   │   └── main.py               # FastAPI app
│   ├── models/
│   │   └── SEResnet_model.pth    # Trained model (97MB)
│   ├── requirements.txt
│   └── README.md
│
├── frontend/                     # React Frontend
│   ├── public/
│   │   └── examples/             # Example images (6 samples)
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── UploadSection.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ResultsSection.jsx
│   │   │   ├── PredictionChart.jsx
│   │   │   ├── ImageProcessingPreview.jsx
│   │   │   ├── ExampleImages.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── HowItWorksSection.jsx
│   │   │   └── ClassesInfoSection.jsx
│   │   ├── services/
│   │   │   └── api.js            # Backend API client
│   │   ├── utils/
│   │   │   └── constants.js      # App constants
│   │   ├── App.jsx               # Main component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── LICENSE                       # MIT License
├── .gitignore                    # Git ignore rules
├── QUICKSTART.md                 # Quick setup guide
└── README.md                     # This file
```

---

## 📡 API Documentation

### Endpoints

#### 1. Health Check
```http
GET /api/health
```
Check if API and model are running properly.

#### 2. Model Information
```http
GET /api/model-info
```
Get model architecture and performance metrics.

#### 3. Classes Information
```http
GET /api/classes
```
Get information about all 5 skin lesion classes.

#### 4. Predict
```http
POST /api/predict
Content-Type: multipart/form-data

Body:
  file: <image_file> (JPEG/PNG, max 10MB)
```

**Example Response:**
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

**Interactive API Docs:** http://localhost:8000/docs

---

## 🎮 Usage

### 1. Upload an Image

**Option A: Drag & Drop**
- Drag a dermoscopy image and drop it in the upload area

**Option B: Browse Files**
- Click "Select Image" button
- Choose a JPEG or PNG image (max 10MB)

**Option C: Use Example Images**
- Click on one of the 6 example images below the upload area

### 2. Analyze

Click the **"Analyze Image"** button to start the AI analysis.

### 3. View Results

The application will:
1. Remove hair artifacts (preprocessing)
2. Show before/after comparison
3. Display the predicted class
4. Show confidence score
5. Visualize all class probabilities in a bar chart

### 4. Learn More

Scroll down to read about:
- **About**: Project details and technology
- **How It Works**: Step-by-step analysis pipeline
- **Classes Info**: Detailed information about each lesion type

---

## 🔧 Troubleshooting

### Backend Issues

#### Problem: "Module not found" error
```bash
# Solution: Reinstall dependencies
cd backend
pip install -r requirements.txt
```

#### Problem: "Model file not found"
```bash
# Solution: Verify model file location
# Make sure SEResnet_model.pth is in backend/models/
ls backend/models/SEResnet_model.pth  # Should exist
```

#### Problem: Port 8000 already in use
```bash
# Solution: Use different port
uvicorn app.main:app --reload --port 8001

# OR kill process on port 8000
# Windows: netstat -ano | findstr :8000
# Linux/Mac: lsof -ti:8000 | xargs kill -9
```

#### Problem: CORS errors
```bash
# Solution: Check backend is running on port 8000
# Frontend expects backend at http://localhost:8000
```

### Frontend Issues

#### Problem: "npm command not found"
```bash
# Solution: Install Node.js from nodejs.org
```

#### Problem: Tailwind CSS not working
```bash
# Solution: Reinstall dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### Problem: Port 5173 already in use
```bash
# Solution: Vite will automatically use next available port
# Check terminal output for actual port number
```

#### Problem: "Network Error" when analyzing
```bash
# Solution: Make sure backend is running
# Check http://localhost:8000/docs is accessible
```

### General Issues

#### Problem: Slow predictions
- **Reason**: Running on CPU (normal)
- **Solution**: GPU will be faster but CPU works fine (~2-3 seconds)

#### Problem: Out of memory
- **Solution**: Close other applications
- **Minimum**: 4GB RAM required

---

## 🧪 Testing the Application

### Quick Test

1. Start both backend and frontend servers
2. Navigate to http://localhost:5173
3. Click on any example image
4. Click "Analyze Image"
5. Wait 2-3 seconds for results
6. Verify you see:
   - Predicted class name
   - Confidence percentage
   - Bar chart with probabilities
   - Before/after hair removal comparison

### API Testing

Use the interactive docs at http://localhost:8000/docs:

1. Click on `/api/predict` endpoint
2. Click "Try it out"
3. Upload an image file
4. Click "Execute"
5. Verify JSON response

---

## 📸 Screenshots

_Add your screenshots here:_

### Home Page
![Home](docs/screenshots/home.png)

### Upload Section
![Upload](docs/screenshots/upload.png)

### Results
![Results](docs/screenshots/results.png)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer

**IMPORTANT: This application is for educational and research purposes only.**

- This is **NOT** a medical device
- This should **NOT** be used for actual medical diagnosis
- Always consult qualified healthcare professionals for any skin concerns
- Early detection and professional medical evaluation are crucial for skin cancer treatment

The developers assume no responsibility for any medical decisions made based on this application.

---

## 👤 Author

**Ertuğrul Bayraktar**
- GitHub: [@ertugrulbayraktr](https://github.com/ertugrulbayraktr)
- Portfolio: [skin-cancer-detection-ai](https://github.com/ertugrulbayraktr/skin-cancer-detection-ai)

---

## 🙏 Acknowledgments

- Model trained on HAM10000 dataset
- SEResNet architecture based on research papers
- Built with open-source technologies
- Inspired by medical AI research community

---

## 📚 References

1. ResNet: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385)
2. Squeeze-and-Excitation Networks: [SENet Paper](https://arxiv.org/abs/1709.01507)
3. HAM10000 Dataset: [Human Against Machine with 10000 training images](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for Education & Research

</div>


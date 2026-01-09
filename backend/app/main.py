"""
FastAPI main application
Skin Cancer Detection API
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.core.config import API_TITLE, API_DESCRIPTION, API_VERSION

# Create FastAPI app
app = FastAPI(
    title=API_TITLE,
    description=API_DESCRIPTION,
    version=API_VERSION,
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Local development
        "http://localhost:3000",
        "https://enhancing-skin-lesion-classification-ertugrulbayraktrs-projects.vercel.app",  # Production frontend
        "https://*.vercel.app",  # All Vercel preview deployments
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(router, prefix="/api")


@app.get("/", tags=["Root"])
async def root():
    """Root endpoint"""
    return {
        "message": "Skin Cancer Detection API",
        "version": API_VERSION,
        "docs": "/docs",
        "health": "/api/health"
    }


# Startup event to load model
@app.on_event("startup")
async def startup_event():
    """Load model on startup"""
    from app.core.model_loader import model_loader
    print(f"Starting {API_TITLE} v{API_VERSION}")
    print("Loading model...")
    _ = model_loader.model  # Trigger model loading
    print("Model loaded successfully!")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


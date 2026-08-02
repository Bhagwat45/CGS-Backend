import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.mongodb import client, users_collection

app = FastAPI(
    title="AI Career Guidance System API",
    description="Backend API for the AI Career Guidance System",
    version="1.0.0",
)

# Configure CORS for frontend access
origins = [origin.strip() for origin in os.getenv(
    "FRONTEND_URL",
    "https://cgs-frontend-eight.vercel.app,http://localhost:3000,http://127.0.0.1:3000",
).split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def connect_to_database():
    await client.admin.command("ping")
    await users_collection.create_index("email", unique=True)

@app.on_event("shutdown")
async def close_database_connection():
    client.close()

@app.get("/")
async def root():
    return {"message": "Welcome to the AI Career Guidance System API"}

@app.get("/api/health")
async def health_check():
    await client.admin.command("ping")
    return {"status": "healthy", "database": "connected"}

# Include routers
from app.api import auth, assessment, career

app.include_router(auth.router, prefix="/api")
app.include_router(assessment.router, prefix="/api")
app.include_router(career.router, prefix="/api")

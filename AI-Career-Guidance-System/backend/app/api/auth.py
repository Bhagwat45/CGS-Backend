from fastapi import APIRouter, HTTPException, Depends
from app.schemas.user_schema import UserLogin, UserCreate
from app.database.mongodb import users_collection
from app.utils.jwt_handler import sign_jwt
from app.utils.password import verify_password, get_password_hash
from datetime import datetime

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register")
async def register(user: UserCreate):
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user_document = {
        "email": user.email,
        "full_name": user.full_name,
        "password": get_password_hash(user.password),
        "is_active": True,
        "created_at": datetime.utcnow(),
    }
    await users_collection.insert_one(user_document)

    return {
        "message": "User registered successfully",
        "user": {"email": user.email, "full_name": user.full_name},
    }

@router.post("/login")
async def login(user: UserLogin):
    db_user = await users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = sign_jwt(str(db_user["_id"]))
    return {"access_token": token, "token_type": "bearer"}

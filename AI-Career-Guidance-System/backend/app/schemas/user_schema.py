from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserSchema(BaseModel):
    id: Optional[str] = None
    email: EmailStr
    full_name: str
    is_active: bool = True
    created_at: datetime = datetime.utcnow()

    class Config:
        json_schema_extra = {
            "example": {
                "email": "johndoe@example.com",
                "full_name": "John Doe",
                "is_active": True
            }
        }

class UserCreate(BaseModel):
    email: EmailStr
    full_name: str
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

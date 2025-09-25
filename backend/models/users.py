# backend/models/users.py
from typing import Optional, Any
from pydantic import BaseModel, Field, EmailStr

# login
class Login(BaseModel):
    email: EmailStr
    password: str

# register
class Register(BaseModel):
    username: str = Field(min_length=3)
    password: str = Field(min_length=6)
    email: EmailStr
    phone_number: str
    first_name: str
    last_name: str

# response model
class ResponseSchema(BaseModel):
    code: str
    status: str
    message: str
    result: Optional[Any] = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

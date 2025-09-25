# backend/routers/users.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from models.users import ResponseSchema, TokenResponse, Login, Register
from config import get_db
from repository.users import UserRepo, JWTRepo

router = APIRouter(tags=["Authentication"])
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/signup", response_model=ResponseSchema)
async def signup(user: Register, db: Session = Depends(get_db)):
    try:
        if UserRepo.get_user_by_email(db, user.email):
            return ResponseSchema(code="400", status="Error", message="Email already registered")
        UserRepo.create_user(
            db,
            username=user.username,
            email=user.email,
            password_plain=user.password,
            phone_number=user.phone_number,
            first_name=user.first_name,
            last_name=user.last_name,
        )
        return ResponseSchema(code="200", status="Success", message="User created successfully")
    except Exception as e:
        return ResponseSchema(code="500", status="Error", message=str(e))

@router.post("/login", response_model=ResponseSchema)
async def login(request: Login, db: Session = Depends(get_db)):
    try:
        u = UserRepo.get_user_by_email(db, request.email)
        if not u or not pwd_context.verify(request.password, u.password):
            return ResponseSchema(code="401", status="Error", message="Invalid credentials")

        token = JWTRepo.generate_token(data={"sub": u.email})
        return ResponseSchema(
            code="200",
            status="Success",
            message="Login success",
            result=TokenResponse(access_token=token)
        )
    except Exception as e:
        return ResponseSchema(code="500", status="Error", message=str(e))

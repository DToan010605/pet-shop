# backend/repository/users.py
from datetime import datetime, timedelta
from typing import Optional
from sqlalchemy.orm import Session
from jose import jwt
from passlib.context import CryptContext

from tables.users import User
from config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserRepo:
    @staticmethod
    def get_user_by_email(db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    @staticmethod
    def create_user(
        db: Session,
        *,
        username: str,
        email: str,
        password_plain: str,
        phone_number: str,
        first_name: str,
        last_name: str
    ) -> User:
        hashed = pwd_context.hash(password_plain)
        u = User(
            username=username,
            email=email,
            password=hashed,
            phone_number=phone_number,
            first_name=first_name,
            last_name=last_name,
        )
        db.add(u)
        db.commit()
        db.refresh(u)
        return u

class JWTRepo:
    @staticmethod
    def generate_token(data: dict, expires_minutes: int = ACCESS_TOKEN_EXPIRE_MINUTES) -> str:
        to_encode = data.copy()
        expire = datetime.utcnow() + timedelta(minutes=expires_minutes)
        to_encode.update({"exp": expire})
        return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

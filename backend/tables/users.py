# backend/tables/users.py
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from config import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    phone_number = Column(String(50), nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    date = Column(DateTime, server_default=func.now())

from fastapi import FastAPI
from config import engine
import tables.users  as users_table
import routers.users as users_router

users_table.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users_router.router)
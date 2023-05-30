import uvicorn
from fastapi import FastAPI
from core.config import settings
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from models.user import User
from models.todo import Todo
from api.api_v1.router import router


app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1}/openapi.json"
)


@app.on_event("startup")
async def init():
# Create Motor client
    client = AsyncIOMotorClient(settings.MONGO_CONNECTION_STRING)
    await init_beanie(
        database=client.todoist,
        document_models= [
            User,
            Todo
        ]
    )


    
app.include_router(router, prefix=settings.API_V1)

# uvicorn main:app --reload
# docker run -d -p 27017:27017 --name mongo5 mongo:4.0.4


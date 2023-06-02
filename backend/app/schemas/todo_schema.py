from datetime import datetime,date
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, Field

class TodoCreate(BaseModel):
    title: str = Field(..., title='Title', max_length=55, min_length=1)
    # date: date
    description: str = Field(..., title='Title', max_length=755, min_length=1)
    status: Optional[bool] = False
    
    
class TodoUpdate(BaseModel):
    title: Optional[str] = Field(..., title='Title', max_length=55, min_length=1)
    # date: date
    description: Optional[str] = Field(..., title='Title', max_length=755, min_length=1)
    status: Optional[bool] = False
    

class TodoOut(BaseModel):
    todo_id: UUID
    status: bool
    title: str
    # date: date
    description: str
    created_at: datetime
    updated_at: datetime
    
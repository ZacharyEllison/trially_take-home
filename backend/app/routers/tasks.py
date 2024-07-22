from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas, database
from ..dependencies import get_current_user

router = APIRouter(
    prefix="/tasks",
    tags=["tasks"]
)

@router.post("/", response_model=schemas.Task)
def create_task(task: schemas.TaskCreate, db: Session = Depends(database.get_db), current_user: schemas.User = Depends(get_current_user)):
    return crud.create_task(db=db, task=task, user_id=current_user.id)

@router.get("/", response_model=List[schemas.Task])
def read_tasks(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db), current_user: schemas.User = Depends(get_current_user)):
    tasks = crud.get_tasks(db=db, user_id=current_user.id)
    return tasks

@router.put("/{task_id}", response_model=schemas.Task)
def update_task(task_id: int, task: schemas.TaskCreate, db: Session = Depends(database.get_db), current_user: schemas.User = Depends(get_current_user)):
    return crud.update_task(db=db, task_id=task_id, task=task)

@router.delete("/{task_id}", response_model=schemas.Task)
def delete_task(task_id: int, db: Session = Depends(database.get_db), current_user: schemas.User = Depends(get_current_user)):
    return crud.delete_task(db=db, task_id=task_id)

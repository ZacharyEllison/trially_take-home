# trially_take-home

Below I synthesize the requirements on the app

## Task Manager
- containerized

### Backend
- fastapi
- RESTFUL / CRUD

### Database
- PostgreSQL
- Users, tasks
- Optimized for integrity and performance

### Front-end
- Next.js & React
- integrate with APIs
- interface for 
    - auth
    - task managing


## Outset plan

First I will define the file structure for such an app

TRIALLY_TAKE-HOME/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   └── tasks.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.js
│   │   │   ├── tasks.js
│   │   │   └── login.js
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   └── TaskForm.js
│   │   ├── services/
│   │   │   ├── api.js
│   ├── Dockerfile
│   └── package.json
├── db/
│   ├── init.sql
├── docker-compose.yml
└── README.md


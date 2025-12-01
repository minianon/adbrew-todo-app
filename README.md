# Adbrew TODO App
This project is a full-stack TODO application built as part of the **Adbrew Backend SDE Intern Assignment**.  
It demonstrates containerized architecture using **Docker**, with API integration between **React**, **Django REST API**, and **MongoDB**.

## Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React + Hooks + Fetch API |
| Backend | Django REST Framework |
| Database | MongoDB |
| DevOps | Docker & Docker Compose |

---

## Project Structure

/src<br/>
/app → React Frontend<br/>
/rest → Django Backend<br/>
docker-compose.yml<br/>
Dockerfile


---

## Run the Project Using Docker

### Prerequisites
- Docker installed
- Docker Compose
- Set environment variable for source path

### Setup steps
```bash
# Clone the repository
git clone https://github.com/TuShArBhArDwA/adbrew-todo-app.git
cd adbrew-todo-app
```

```
# Set environment variable (Windows Command Prompt)
set ADBREW_CODEBASE_PATH=%cd%\src
```

```
# Build and start containers
docker compose up --build -d
```

```
# Check running containers
docker ps
```

---

## Application URLs

| Service         | URL                          |
|-----------------|------------------------------|
| React Frontend  | http://localhost:3000        |
| Django API      | http://localhost:8000/todos  |
| MongoDB         | localhost:27017              |

---

## API Endpoints

### **GET /todos/**
Fetch all TODO items from MongoDB.

### **POST /todos/**
Create a new TODO item.

**Sample Request Body**
```json
{
  "text": "Learn Docker"
}
```


### **DELETE /todos/{id}/**
Delete a TODO item by ID.

**Sample Request**
```
DELETE http://localhost:8000/todos/692da939ddc7fd65c037f9b7/
```

**Sample Response**
```json
{
  "message": "Todo deleted"
}
```

---

## Features Completed

- Add TODO from frontend (React form → POST API → MongoDB)
- Display TODO list dynamically from MongoDB (GET API)
- Delete TODO feature with instant UI update
- Loading indicators & error handling for API requests
- Dockerized setup with 3 containers (React + Django + MongoDB)
- Persistent MongoDB storage using Docker volumes
- Clean React hooks architecture (useState, useEffect)
- Lightweight REST API without Django models or serializers


---

## Contact

- **Meet T-Bot** - [Discover My Work](https://t-bot-blush.vercel.app/)
- **Tushar Bhardwaj** - [Portfolio](https://tushar-bhardwaj.vercel.app/)
- **Connect 1:1** - [Topmate](https://topmate.io/tusharbhardwaj)
- **GitHub:** [TuShArBhArDwA](https://github.com/TuShArBhArDwA)
- **LinkedIn:** [Tushar Bhardwaj](https://www.linkedin.com/in/bhardwajtushar2004/)
- **Email:** [tusharbhardwaj2617@example.com](mailto:tusharbhardwaj2617@example.com)



# Adbrew TODO App — Full Stack (React + Django + Mongo + Docker)

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

# Set environment variable (Windows Command Prompt)
set ADBREW_CODEBASE_PATH=%cd%\src

# Build and start containers
docker compose up --build -d

# Check running containers
docker ps




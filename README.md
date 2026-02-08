# Naksh Jewels - React and Node.js Internship Assignment

This project is a mini e-commerce module built as part of the Naksh Jewels ReactJS and Node.js assessment.

## Project Structure (High Level)

```text
project-root/
|-- backend/
|   |-- Dockerfile
|   |-- package.json
|   `-- src/
|-- frontend/
|   |-- Dockerfile
|   |-- package.json
|   `-- src/
|-- docker-compose.yml
`-- README.md
```

## Docker Setup

### Prerequisites

- Docker Desktop installed and running
- Docker Compose available (`docker compose version`)

### Build and Start

Run from project root:

```bash
docker compose up --build
```

### Access the App

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## API Endpoints

### Products

- `GET /products` - Returns the list of available products.

### Cart

- `POST /cart` - Accepts cart items and validates the request body.

Example payload:

```json
{
  "items": [
    { "productId": "1", "quantity": 2 }
  ]
}
```

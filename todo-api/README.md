# To-Do List API

This is a simple To-Do List API built with Node.js and TypeScript. It does not connect to any database but uses in-memory storage instead.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-api.git
   cd todo-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the server

In development mode:

```bash
npm run dev
```

In production mode:

```bash
npm start
```

The server will run on http://localhost:3000.

API Endpoints
GET /todos - Get all to-dos
POST /todos - Create a new to-do
Request body: { "task": "your task here" }
PUT /todos/:id - Update an existing to-do
Request body (optional): { "task": "updated task", "completed": true/false }
DELETE /todos/:id - Delete a to-do

Example Requests

Get all to-dos
curl -X GET http://localhost:3000/todos

Create a new to-do
curl -X POST -H "Content-Type: application/json" -d '{"task": "New Task"}' http://localhost:3000/todos

Update a to-do
curl -X PUT -H "Content-Type: application/json" -d '{"task": "Updated Task", "completed": true}' http://localhost:3000/todos/1

Delete a to-do
curl -X DELETE http://localhost:3000/todos/1

Initial Mock Data
The API starts with the following mock data:
{ id: 1, task: "Learn TypeScript", completed: false }
{ id: 2, task: "Write a Node.js API", completed: false }
{ id: 3, task: "Mock some data", completed: true }

Postman Collection
You can use the provided Postman collection to test the API. Import the todo-api.postman_collection.json file into Postman to get started.

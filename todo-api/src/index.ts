import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// ใช้ body-parser middleware
app.use(bodyParser.json());

// โครงสร้างข้อมูลในหน่วยความจำ พร้อมข้อมูล mock
let todos: { id: number; task: string; completed: boolean }[] = [
  { id: 1, task: "Learn TypeScript", completed: false },
  { id: 2, task: "Write a Node.js API", completed: false },
  { id: 3, task: "Mock some data", completed: true },
];
let currentId = 4;

// API สำหรับดึงรายการ to-do ทั้งหมด
app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

// API สำหรับสร้างรายการ to-do ใหม่
app.post("/todos", (req: Request, res: Response) => {
  const { task } = req.body;
  if (typeof task !== "string" || task.trim() === "") {
    return res
      .status(400)
      .json({ error: "Task is required and should be a non-empty string" });
  }

  const newTodo = { id: currentId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// API สำหรับอัปเดตรายการ to-do
app.put("/todos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { task, completed } = req.body;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (typeof task === "string" && task.trim() !== "") {
    todo.task = task;
  }
  if (typeof completed === "boolean") {
    todo.completed = completed;
  }

  res.json(todo);
});

// API สำหรับลบรายการ to-do
app.delete("/todos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

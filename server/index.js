const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getAFortune,
  addTask,
  updateTask,
  deleteTask
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getAFortune);
app.post("/api/tasks", addTask);
app.put("/api/tasks/:index", updateTask);
app.delete("/api/tasks/:index", deleteTask)

app.listen(4000, () => console.log("Server running on 4000"));

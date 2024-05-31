import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(cors());

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: uuidv4(),
      title: "Do the dishes",
      description: "",
      status: "not-started",
    },
  ]);
});

app.listen("3001", () => {
  console.log("running at 3001");
});

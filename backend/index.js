import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to the bookstore!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

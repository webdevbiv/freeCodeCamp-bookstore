import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Middleware for cors policy
// Option 1: Allow all origins
app.use(cors());
// Option 2: Allow only specific origins
// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// https://youtu.be/-42K44A1oMA?t=752

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to the bookstore!");
});

// Routes for books
app.use("/books", booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

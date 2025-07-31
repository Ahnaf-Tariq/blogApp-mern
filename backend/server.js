// console.log('hello world')
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import blogRouter from "./routes/blogRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/blog", blogRouter);

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

// server running'
app.listen(port, () => {
  console.log(`port is running on localhost:${port}`);
});

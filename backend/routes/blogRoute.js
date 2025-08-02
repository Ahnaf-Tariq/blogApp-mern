import express from "express";
import { addBlog, getBlog, getSingleBlog } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  addBlog
);
blogRouter.get("/list", getBlog);
blogRouter.post("/single", getSingleBlog);

export default blogRouter;

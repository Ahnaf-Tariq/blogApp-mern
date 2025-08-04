import express from "express";
import {
  addEmail,
  listEmail,
  removeEmail,
} from "../controllers/subscribeController.js";

const subscribeRouter = express.Router();

subscribeRouter.post("/add", addEmail);
subscribeRouter.get("/list", listEmail);
subscribeRouter.post("/delete", removeEmail);

export default subscribeRouter;

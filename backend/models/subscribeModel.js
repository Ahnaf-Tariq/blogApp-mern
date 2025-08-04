import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

const subscribeModel = mongoose.models.subscribe || mongoose.model("subscribe", subscribeSchema);

export default subscribeModel;

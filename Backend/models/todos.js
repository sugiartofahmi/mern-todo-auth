import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    trim: true,
    required: [true, "Please add  title"],
  },
  priority: {
    type: Number,
    trim: true,
    required: [true],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Todo", TodoSchema);

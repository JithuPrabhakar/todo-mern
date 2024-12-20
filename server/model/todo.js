const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

modulee.xports = mongoose.model("Todo", todoSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
});

modulee.xports = mongoose.model("Todo", todoSchema);

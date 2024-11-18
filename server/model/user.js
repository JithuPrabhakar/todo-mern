const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  todo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
});

module.exports = mongoose.model("User", userSchema);

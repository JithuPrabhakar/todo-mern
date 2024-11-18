const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb+srv://jithu:jitzp%40123@cluster0.tyueh.mongodb.net/")
      .then(() => {
        console.log("Mongo connected");
      });
  } catch (error) {
    res.status(400).json({ message: "Not connected" });
  }
};

connection();

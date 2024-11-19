const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../model/user");

//Sign In
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Please sign up first" });
    }

    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Password is not correct" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

// SIgn up
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashPassword });
    await user.save().then(() => res.status(200).json({ user: user }));
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

module.exports = router;

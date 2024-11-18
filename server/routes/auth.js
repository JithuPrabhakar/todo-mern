const router = require("express").Router();

const User = require("../model/user");

//Sign In
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      req.session.userId = user._id;
      res.json({ message: "Signed in successfully" });
    });
  });
});

// SIgn up
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username, password });
    await user.save().then(() => res.status(200) / json({ user: user }));
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

module.exports = router;

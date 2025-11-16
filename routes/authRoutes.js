const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("login");
});

// REGISTER PAGE
router.get("/register", (req, res) => {
  res.render("register");
});

// REGISTER POST
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    req.flash("error", "All fields are required!");
    return res.redirect("/register");
  }

  try {
    const exist = await User.findOne({ email });

    if (exist) {
      req.flash("error", "Email already registered!");
      return res.redirect("/register");
    }

    const user = new User({ name, email, password });
    await user.save();

    req.flash("success", "Account created successfully! Login now.");
    return res.redirect("/login");

  } catch (err) {
    console.log(err);
    req.flash("error", "Something went wrong.");
    return res.redirect("/register");
  }
});

// LOGIN POST
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.flash("error", "Please enter email & password.");
    return res.redirect("/login");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      req.flash("error", "Invalid email or password.");
      return res.redirect("/login");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      req.flash("error", "Invalid email or password.");
      return res.redirect("/login");
    }

    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    req.flash("success", "Logged in successfully!");
    return res.redirect("/");

  } catch (err) {
    console.log(err);
    req.flash("error", "Login failed!");
    return res.redirect("/login");
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;

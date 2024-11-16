const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashPassword, ComparePassword } = require("../utils/AuthUtils");

//Register

exports.Register = async (req, res) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      return res.status(403).json({
        status: "error",
        message:
          "User already exists with the same email , please choose another email.",
      });
    }

    const hashedPassword = await hashPassword(req.body.password);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({
      status: "success",
      message: "User Created.",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Login

exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User doesn't exists",
      });
    }

    const validPassword = await ComparePassword(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({
        status: "error",
        message: "Password is incorrect",
      });
    }

    const { password, ...userFields } = user._doc;

    const token = jwt.sign(userFields, process.env.JWT_SECRET, {
      expiresIn: "60mins",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        ...(process.env.NODE_ENV === "production" ? { sameSite: "None" } : {}),
      })
      .status(200)
      .json({
        status: "success",
        message: "Login successful",
        user: userFields,
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.checkAuth = async (req, res) => {
  const user = req.user;
  res.status(200).json({
    status: "success",
    message: "User is authenticated",
    user,
  });
};

exports.Logout = async (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      ...(process.env.NODE_ENV === "production" ? { sameSite: "None" } : {}),
    })
    .status(200)
    .json({
      status: "success",
      message: "Logged out successfully",
    });
};

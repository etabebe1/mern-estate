//importing model of user
const User = require("../model/user.model");

//*:::::: user sign-up route ::::::*//
const sign_up = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//*:::::: user sign-in route ::::::*//
const sign_in = (req, res) => {
  res.send(req.body);
};

module.exports = { sign_up, sign_in };

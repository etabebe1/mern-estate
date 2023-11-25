const User = require("../model/user.model");

//*:::::: user sign-up route ::::::*//
const sign_up = async (req, res, next) => {
  const { username, email, password } = req.body;

  const newUser = await User({ username, email, password });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

//*:::::: user sign-in route ::::::*//
const sign_in = (req, res, next) => {
  res.send(req.body);
};

module.exports = { sign_up, sign_in };

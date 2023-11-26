const jwt = require("jsonwebtoken");
const { errorHandler } = require("../errors/error");
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
const sign_in = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // TODO: credential require warning to be implemented to the client side
    // TODO: since we are not validating here

    const validUser = await User.findOne({ email });
    !validUser && next(errorHandler(404, "User not found!"));

    const passwordMatch = await validUser.comparePassword(password);
    !passwordMatch && next(errorHandler(401, "Wrong credentials"));
    const { password: userPassword, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { sign_up, sign_in };

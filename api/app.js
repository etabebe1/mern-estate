const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//*:::::: importing routers from router ::::::*//
const userRouter = require("./routers/user.routes");
const authRouter = require("./routers/auth.routes");

//*:::::: making donEnv ready to use ::::::*//
dotenv.config();

//*::::: setup to connection with database ::::::*//
const connectDB = require("./database/connectDB");

//*::::: middleware ::::::*//
app.use(cors());
app.use(express.json()); //NOTE: allow a json() obj to be an input to the server
app.use(helmet());
app.use(morgan("common")); // used to indicate request and related info

//*::::: server routes :::::*//
app.use("/api/user/", userRouter);
app.use("/api/authentication/", authRouter);

//*::::: port and URI connection :::::*//
const port = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

//*:::::: Initializing server ::::::*//
const start = async () => {
  try {
    await connectDB(URI);
    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
  } catch (error) {
    console.log(error);
  }
};

start();

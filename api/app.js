const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//*:::::: making donEnv ready to use ::::::*//
dotenv.config();

//*::::: setup to connection with database ::::::*//
const connectDB = require("./database/connectDB");

//*::::: middleware ::::::*//
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common")); // used to indicate request and related info

//*::::: port and URI connection *::::://
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

const user = (req, res) => {
  console.log("router works properly");
  res.send("user route testing");
};

module.exports = { user };

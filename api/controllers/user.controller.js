const test = (req, res) => {
  console.log("router works properly");
  res.send("test");
};

module.exports = { test };

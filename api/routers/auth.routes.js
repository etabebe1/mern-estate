const express = require("express");
const router = express.Router();

const { sign_up } = require("../controllers/auth.controller");

router.route("/test").get(sign_up);

module.exports = router;

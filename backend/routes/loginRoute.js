const express = require("express");
const router = express.Router();
loginRoute = require("../controllers/loginController");

router.post("/", loginRoute.loginController)

module.exports = router;
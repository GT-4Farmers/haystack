const express = require("express");
const router = express.Router();
usersRoute = require("../controllers/usersController");

router.get("/", (usersRoute.usersController));

module.exports = router;
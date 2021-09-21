const express = require("express");
const router = express.Router();
profileRoute = require("../controllers/profileController");

router.post("/", profileRoute.profileController)

module.exports = router;
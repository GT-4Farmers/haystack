const express = require("express");
const router = express.Router();
profileRoute = require("../controllers/profileController");

router.get("/", profileRoute.profileController)

module.exports = router;
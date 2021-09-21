const express = require("express");
const router = express.Router();
isLoggedInRoute = require("../controllers/isLoggedInController");

router.post("/", isLoggedInRoute.isLoggedInController)

module.exports = router;
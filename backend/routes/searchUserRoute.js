const express = require("express");
const router = express.Router();
searchUserRoute = require("../controllers/searchUserController");

router.get("/", searchUserRoute.searchUserController);

module.exports = router;
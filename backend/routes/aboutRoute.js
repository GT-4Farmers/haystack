const express = require("express");
const router = express.Router();
editAboutRoute = require("../controllers/editAboutController");

router.put("/", editAboutRoute.editAboutController);
// router.put("/bio", editAboutRoute.editBioController);

module.exports = router;
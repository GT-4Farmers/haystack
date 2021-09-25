const express = require("express");
const router = express.Router();
profileRoute = require("../controllers/profileController");
aboutRoute = require("../controllers/getAboutController");
// editAboutRoute = require("../controllers/editAboutController");

router.get("/", profileRoute.profileController)
router.get("/about/", aboutRoute.getAboutController)
// router.put("/about/", editAboutRoute.editAboutController);

module.exports = router;
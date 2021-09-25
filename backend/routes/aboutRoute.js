const express = require("express");
const router = express.Router();
aboutRoute = require("../controllers/getAboutController");
editAboutRoute = require("../controllers/editAboutController");

router.get("/", aboutRoute.getAboutController);
router.put("/", editAboutRoute.editAboutController);
// router.put("/:bio", editAboutRoute.editBioController);

module.exports = router;
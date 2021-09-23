const express = require("express");
const router = express.Router();
aboutRoute = require("../controllers/getAboutController");
editAboutRoute = require("../controllers/editAboutController");

router.get("/", aboutRoute.getAboutController);
router.put("/", editAboutRoute.editAboutController);

module.exports = router;
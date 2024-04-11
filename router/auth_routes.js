const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller.js")

router.get("/",authController.verifyUser);

module.exports = router;
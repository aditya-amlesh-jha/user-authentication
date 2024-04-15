const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller.js")

router.post("/login",authController.loginUser);
router.get("/logout",authController.logoutUser);

module.exports = router;
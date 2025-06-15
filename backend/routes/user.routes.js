const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
//! routes ko validate kar rahe hai data ko save karne se phele

const { body } = require("express-validator");

//! register routes
router.post("/register", [
  body("email").isEmail().withMessage("Invaild email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 5 characters"),
],

userControllers.registerUser
);

//! login routes
router.post("/login", [
  body("email").isEmail().withMessage("Invaild email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters"),
],
userControllers.loginUser
)
module.exports = router;

//! profile routes
router.get("/profile", authMiddleware.authUser  ,userControllers.getUserProfile);

//! logout routes
router.get("/logout", authMiddleware.authUser, userControllers.logoutUser);
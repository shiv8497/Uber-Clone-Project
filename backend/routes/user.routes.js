const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers.js");
//! routes ko validate kar rahe hai data ko save karne se phele

const { body } = require("express-validator");

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
module.exports = router;

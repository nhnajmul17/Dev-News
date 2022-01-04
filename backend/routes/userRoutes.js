const express = require("express");
const router = express.Router();

const { createUser, login } = require("../controller/usersController");

// @route POST /api/users/login
// @access Public
router.post("/login", login);

// @route POST /api/users/register
// @access Public
router.post("/register", createUser);

module.exports = router;

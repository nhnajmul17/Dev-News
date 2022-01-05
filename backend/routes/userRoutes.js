const express = require("express");
const router = express.Router();

const {
	createUser,
	login,
	makeAdmin,
} = require("../controller/usersController");

// @route POST /api/users/login
// @access Public
router.post("/login", login);

// @route POST /api/users/register
// @access Public
router.post("/register", createUser);

// @route POST /api/users/make-admin
// @access Private
router.post("/make-admin", makeAdmin);

module.exports = router;

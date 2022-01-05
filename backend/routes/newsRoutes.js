const express = require("express");
const router = express.Router();

const {
	createNews,
	getAllNews,
	getNewsById,
	getNewsByIdAndDelete,
} = require("../controller/newsConroller.js");

// @desc POST news to db
// @route POST /api/news
// @access Private

router.post("/", createNews);

// @desc GET all news from db
// @route GET /api/news
// @access Public
router.get("/", getAllNews);

// @desc GET single news by id from db
// @route GET /api/news/:id
// @access Public
router.get("/:id", getNewsById);

// @desc DELETE single news by id from db
// @route GET /api/news/:id
// @access Public
router.delete("/:id", getNewsByIdAndDelete);

// @desc DELETE single news by id from db
// @route GET /api/news/:id
// @access Public
// router.delete("/:id", getNewsByIdAndDelete);

module.exports = router;

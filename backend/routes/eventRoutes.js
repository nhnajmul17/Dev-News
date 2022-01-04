const express = require("express");
const router = express.Router();

const {
	getAllEvents,
	getEventById,
} = require("../controller/eventsConroller.js");

// @desc POST event to db
// @route POST /api/events
// @access Private

// router.post("/", createEvent);

// @desc GET all events from db
// @route GET /api/events
// @access Public
router.get("/", getAllEvents);

// @desc GET single event by id from db
// @route GET /api/events/:id
// @access Public
router.get("/:id", getEventById);

module.exports = router;

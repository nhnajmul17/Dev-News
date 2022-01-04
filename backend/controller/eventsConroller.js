const Event = require("../models/Event");

const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find({});
		res.json({ status: "success", data: events });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

const getEventById = async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);
		res.json({ status: "success", data: event });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

module.exports = {
	getAllEvents,
	getEventById,
};

const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
	key: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	about: {
		type: String,
		required: true,
	},
});

const Events = mongoose.model("events", eventSchema);

module.exports = Events;

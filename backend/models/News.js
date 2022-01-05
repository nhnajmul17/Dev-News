const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
	headLine: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	photoUrl: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	publishedDate: {
		type: Date,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	is_published: {
		type: Boolean,
		default: false,
	},
});

const News = mongoose.model("news", newsSchema);

module.exports = News;

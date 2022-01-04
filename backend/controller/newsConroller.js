const News = require("../models/News");

const getAllNews = async (req, res) => {
	try {
		const news = await News.find({});
		res.json({ status: "success", data: news });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

const getNewsById = async (req, res) => {
	try {
		const news = await News.findById(req.params.id);
		res.json({ status: "success", data: news });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

module.exports = {
	getAllNews,
	getNewsById,
};

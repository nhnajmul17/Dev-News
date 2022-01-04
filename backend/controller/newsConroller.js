const News = require("../models/News");
const jwt = require("jsonwebtoken");

const createNews = async (req, res) => {
	const token = req.headers["x-access-token"];
	const decoded = jwt.verify(token, "secret");

	try {
		const news = await News.find({});
		res.json({ status: "success", data: news });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

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
	createNews,
	getAllNews,
	getNewsById,
};

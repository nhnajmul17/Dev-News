const News = require("../models/News");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

const createNews = async (req, res) => {
	const token = req.headers["x-access-token"];
	const decoded = jwt.verify(token, "secret") || null;

	try {
		const news = await News.create({
			headLine: req.body.headLine,
			author: req.body.author,
			photoUrl: req.body.photoUrl,
			category: req.body.category,
			publishedDate: req.body.publishedDate,
			description: req.body.description,
			is_published: decoded.admin ? true : false,
		});
		res.json({ status: "success", data: news });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

const getAllNews = async (req, res) => {
	const publish = req.query.publish;

	try {
		let news;
		if (publish === "false") {
			news = await News.find({ is_published: false });
		} else {
			news = await News.find({ is_published: true });
		}
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

const updateNewsPublishStatusById = async (req, res) => {
	const token = req.headers["x-access-token"];
	console.log(req.params.id);
	try {
		const decoded = jwt.verify(token, "secret");
		const filter = { _id: ObjectId(req.params.id) };
		const updateDoc = {
			$set: {
				is_published: true,
			},
		};
		const news = await News.updateOne(filter, updateDoc);
		res.json({ status: "success" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

const getNewsByIdAndDelete = async (req, res) => {
	const token = req.headers["x-access-token"];
	try {
		const decoded = jwt.verify(token, "secret");
		await News.findByIdAndDelete(req.params.id);
		res.json({ status: "success" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

module.exports = {
	createNews,
	getAllNews,
	getNewsById,
	getNewsByIdAndDelete,
	updateNewsPublishStatusById,
};

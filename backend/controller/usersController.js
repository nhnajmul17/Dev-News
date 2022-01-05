const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bycript = require("bcryptjs");

// create new user
const createUser = async (req, res) => {
	try {
		// hash password
		const hashPassword = await bycript.hash(req.body.password, 10);
		// create user
		const user = await User.create({
			fullName: req.body.fullName,
			email: req.body.email,
			password: hashPassword,
		});
		res.json({ status: "success", data: user });
	} catch (error) {
		if (error.name === "ValidationError") {
			let errors = {};
			Object.keys(error.errors).forEach((key) => {
				errors[key] = error.errors[key].message;
			});
			return res.status(400).json({ status: "error", errors: errors });
		}
		res.status(500).json({
			status: "error",
			errors: "Something went wrong",
		});
	}
};

// login user
const login = async (req, res) => {
	// find user
	const user = await User.findOne({
		email: req.body.email,
	});

	// if no user found
	if (!user) {
		return res.json({
			status: "error",
			errors: "User not found.",
		});
	}

	// check if password is valid
	const isValidPassword = await bycript.compare(
		req.body.password,
		user.password
	);

	// authenticate user
	if (isValidPassword) {
		const token = jwt.sign(
			{
				fullName: user.fullName,
				email: user.email,
				admin: user.admin,
			},
			"secret"
		);
		return res.json({ status: "success", data: { user, token } });
	} else {
		return res.json({
			status: "error",
			errors: "Incorrect password.",
		});
	}
};

// make admin
const makeAdmin = async (req, res) => {
	const token = req.headers["x-access-token"];
	try {
		const decoded = jwt.verify(token, "secret");
		const filter = { email: req.body.email };
		const result = await User.updateOne(filter, { $set: { admin: true } });
		return res.json({ status: "success" });
	} catch (error) {
		res.status(500).json({ status: "error", errors: "Server Error" });
	}
};

module.exports = {
	createUser,
	login,
	makeAdmin,
};

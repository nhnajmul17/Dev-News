const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	admin: {
		type: Boolean,
		default: false,
	},
	password: {
		type: String,
		required: true,
	},
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;

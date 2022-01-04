import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import axios from "axios";
import { REACT_API_URL } from "../../Utils";

const Signup = () => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`${REACT_API_URL}/users/register`, data)
			.then((res) => {
				console.log(res.data);
				if (res.data.status === "success") {
					window.alert("user created");
					// TODO:
					// reidrect to login page
				}
				if (res.data.status === "error") {
					console.log(res.data.errors);
				}
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<Grid container spacing={1} className="Regi__item" maxWidth="md">
			<Grid item xs={12} md={8}>
				<img
					className="Regi__img"
					src="https://previews.123rf.com/images/tudmeak/tudmeak1804/tudmeak180400054/100329950-news-update-online-illustration-vector-newspaper-website-concept-announcements-internet-social-netwo.jpg"
					alt=""
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<h2>Create an account</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						sx={{ width: "90%", mx: 1 }}
						required
						id="standard-basic"
						label="Your Full name"
						{...register("fullName")}
						variant="standard"
					/>
					<TextField
						sx={{ width: "90%", mx: 1 }}
						required
						id="standard-basic"
						label="Your Email"
						{...register("email")}
						variant="standard"
					/>
					<TextField
						sx={{ width: "90%", mx: 1 }}
						required
						id="standard-basic"
						label="Password"
						{...register("password")}
						variant="standard"
						type="password"
					/>
					<TextField
						sx={{ width: "90%", mx: 1 }}
						required
						id="standard-basic"
						label="Confrim Password"
						{...register("confrimpass")}
						variant="standard"
						type="password"
					/>
					<Button
						type="submit"
						style={{
							backgroundColor: "#6a2b36",
							marginTop: "20px",
							marginLeft: "5px",
						}}
						variant="contained"
					>
						Register
					</Button>
					<br />
					<br />
					<NavLink style={{ textDecoration: "none" }} to="/Login">
						<Button
							variant="text"
							style={{ textAlign: "left", fontSize: "12px" }}
						>
							Already Registered? Please Login here.
						</Button>
					</NavLink>{" "}
					<br />
				</form>
			</Grid>
		</Grid>
	);
};

export default Signup;

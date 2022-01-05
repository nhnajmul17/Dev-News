import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { REACT_API_URL } from "../../Utils";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`${REACT_API_URL}/users/login`, data)
			.then((res) => {
				console.log(res.data);
				if (res.data.status === "success") {
					localStorage.setItem("token", res.data.token);
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
					src="https://thumbs.dreamstime.com/b/online-news-update-breaking-news-banner-tiny-people-laptop-flat-cartoon-vector-illustration-announcements-189844354.jpg"
					alt=""
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<h2>Login</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
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
					<Button
						type="submit"
						style={{
							backgroundColor: "#6a2b36",
							marginTop: "20px",
							marginLeft: "5px",
						}}
						variant="contained"
					>
						Login
					</Button>
					<br />
					<br />
					<NavLink style={{ textDecoration: "none" }} to="/signup">
						<Button
							variant="text"
							style={{ textAlign: "left", fontSize: "12px" }}
						>
							Need an account? Please register here.
						</Button>
					</NavLink>{" "}
					<br />
				</form>
			</Grid>
		</Grid>
	);
};

export default Login;

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, CircularProgress, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { REACT_API_URL } from "../../Utils";
import swal from "sweetalert";

const Login = () => {
	const [loading, setLoading] = useState(false);

	const { register, handleSubmit } = useForm();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`${REACT_API_URL}/users/login`, data)
			.then((res) => {
				console.log(res.data);
				if (res.data.status === "success") {
					swal({
						title: "Good job!",
						text: "Logged in successfully!",
						icon: "success",
					});
					localStorage.setItem("token", res.data.data.token);
					navigate("/");
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
					{loading ? (
						<CircularProgress />
					) : (
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
					)}
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

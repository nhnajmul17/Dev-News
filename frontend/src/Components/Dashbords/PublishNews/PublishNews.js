import React from "react";
import './PublishNews.css';
import { useForm } from "react-hook-form";

const PublishNews = () => {

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = data => {
		fetch('https://newsportal-serverapi.herokuapp.com/', {
            method: "POST",
			headers: {
				"x-access-token": localStorage.getItem("token")
			},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' added successfully')
                    reset();
                }
            })
	};

	let today = new Date().toLocaleDateString();

	return (
		<div className="news__publish__page">
			<div className="news__publish__form">
				<form onSubmit={handleSubmit(onSubmit)}>
					
					<input {...register("headLine")} required placeholder="write headline here" /> <br />
					
					<input {...register("author")} required placeholder="write author name" /> <br />

					<input {...register("photoUrl")} required placeholder="give photo URL" /> <br />

					<select className="text-area" {...register("category")}>
						<option value="javaScript">javaScript</option>
						<option value="python">python</option>
						<option value="java">java</option>
						<option value="php">php</option>
						<option value="c++">c++</option>
					</select> <br /> 
					
					<input {...register("publishedDate")} required defaultValue={today} /> <br />

					<textarea {...register("description")} required placeholder="write or paste your article" /> <br />

					<input type="submit" value="Publish" className="news__publishing_btn" />
				</form>
			</div>
		</div>
	);
};

export default PublishNews;

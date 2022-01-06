import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopnews } from "../../../Redux/NewsSlice/NewsSlice";
import OneNews from "./OneNews/OneNews";
import "./TopNews.css";

const TopNews = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTopnews());
	}, [dispatch]);

	const topNews = useSelector((state) => state.news.topNews);
	console.log(topNews);

	return (
		<div className="topNews__Section">
			<div className="topNews__Headline">
				<h1>Todays Top News</h1>
			</div>
			<div className="all__Newses">
				{topNews.map((news) => (
					<OneNews key={news.id} news={news}></OneNews>
				))}
			</div>
		</div>
	);
};

export default TopNews;

import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNews, fetchAllnews } from "../../../Redux/NewsSlice/NewsSlice";

const ManageNewses = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllnews())
	}
		, [dispatch])

	const news = useSelector(state => state.news.allNewsItem)

	const handleDelete = (id) => {
		dispatch(deleteNews(id))
	}




	return (
		<div>
			<h1>All News {news?.length}</h1>
			<Box sx={{ m: 3 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{
						news.map(pd => <Grid key={pd._id} item xs={4} sm={4} md={4}> <Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image={pd.photoUrl}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{pd?.headLine}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Author: {pd?.author}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Published: {pd?.publishedDate}
								</Typography>
								<button onClick={() => handleDelete(pd._id)} className="btn bg-warning m-2 ">  Delete News</button>
							</CardContent>

						</Card>  </Grid>)
					}
				</Grid>
			</Box>


		</div>

	);
};

export default ManageNewses;


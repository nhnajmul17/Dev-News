import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { deleteNews, fetchAllnews } from "../../../Redux/NewsSlice/NewsSlice";

const ManageNewses = () => {


	const [news, setNews] = useState([])

	useEffect(() => {
		fetch('/NewsData.json')
			.then(res => res.json())
			.then(data => {
				setNews(data);
			})
	}, [])

	const handleDelete = (id) => {
		fetch(`https://localhost5000/deleteNews/${id}`, {
			method: "DELETE",
			headers: { "content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert('News Deleted')
					window.location.reload()
				} else {
				}
			});
	}


	/* const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllnews())
	}
		, [dispatch])

	const news = useSelector(state => state.news.allNewsItem)

	const handleDelete = (id) => {
		dispatch(deleteNews(id))
	} */




	return (
		<div>
			<h1>All News {news?.length}</h1>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Headline</th>
						<th>Author</th>
						<th>Category</th>
						<th>Published</th>
						<th>Action</th>
					</tr>
				</thead>
				{news?.map((pd, index) => (
					<tbody>
						<tr>
							<td>{index + 1}</td>
							<td>{pd?.headLine}</td>
							<td>{pd?.Author}</td>
							<td>{pd?.category}</td>
							<td>{pd?.PublishedDate}</td>
							<button
								onClick={() => handleDelete(pd._id)}
								className="btn bg-danger m-2"
							>
								Delete
							</button>

						</tr>
					</tbody>
				))}
			</Table>
		</div>

	);
};

export default ManageNewses;


import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const PendingNewses = () => {

	const [news, setNews] = useState([])

	useEffect(() => {
		fetch('/api/news?publish=false')
			.then(res => res.json())
			.then(data => {
				setNews(data);
			})
	}, [])

	const handleUpdate = (id) => {
		const url = `https://fathomless-everglades-23928.herokuapp.com/bookings/${id}`
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(news)
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					alert('Updated Successfully')
					window.location.reload();
				}
			})
	}
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
								onClick={() => handleUpdate(pd._id)}
								className="btn bg-warning m-2"
							>
								Approved
							</button>

						</tr>
					</tbody>
				))}
			</Table>

		</div>
	);
};

export default PendingNewses;


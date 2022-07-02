import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

const Row = (props) => {
	const { title, fetchUrl, isLargeRow = false } = props;
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className="Row-Wrapper">
			<h2>{title}</h2>
			{movies.map((movie) => {
				<img
					src={`${base_url}${
						isLargeRow ? movie.poster_path : movie.backdrop_path
					}`}
					alt={movie.name}
				/>;
			})}
		</div>
	);
};

export default Row;

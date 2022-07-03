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
			<div className="Row-Posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`Row-Poster ${isLargeRow ? "Row-Poster-Large" : ""}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Row;

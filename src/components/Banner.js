import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import requests from "../utils/Requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<header
			className="Banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="Banner-Contents">
				<h1 className="Banner-Title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="Banner-Buttons">
					<button className="Banner-Button">Play</button>
					<button className="Banner-Button">My List</button>
				</div>
				<h1 className="Banner-Description">{truncate(movie?.overview, 140)}</h1>
			</div>
			<div className="Banner--FadeBottom" />
		</header>
	);
};

export default Banner;

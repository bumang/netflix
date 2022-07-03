import React from "react";
import requests from "../utils/Requests";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Row from "../components/Row";

const HomeScreen = () => {
	return (
		<div className="HomeScreen-Wrapper">
			<NavBar />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
		</div>
	);
};

export default HomeScreen;

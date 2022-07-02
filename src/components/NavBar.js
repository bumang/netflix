import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/img/netflix-logo.png";

const NavBar = () => {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "nav-black"}`}>
			<div className="NavBar-Wrapper">
				<img className="Nav-Logo" src={netflixLogo} alt="logo not found" />
				<img
					className="Nav-Avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="Avatar Not Found"
				/>
			</div>
		</div>
	);
};

export default NavBar;

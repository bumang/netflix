import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import netflixLogo from "../assets/img/netflix-logo.png";

const NavBar = () => {
	const [show, handleShow] = useState(false);
	const history = useHistory();

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
				<img
					onClick={() => history.push("/")}
					className="Nav-Logo"
					src={netflixLogo}
					alt="logo not found"
				/>
				<img
					onClick={() => history.push("/profile")}
					className="Nav-Avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="Avatar Not Found"
				/>
			</div>
		</div>
	);
};

export default NavBar;

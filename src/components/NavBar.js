import React, { useEffect, useState } from "react";

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
				<img
					className="Nav-Logo"
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="logo not found"
				/>
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

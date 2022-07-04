import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { selectUser } from "../features/userSlice";
import { authentication } from "../firebase";

const Profile = () => {
	const user = useSelector(selectUser);

	return (
		<div className="Profile-Screen">
			<NavBar />
			<div className="Profile-Screen-Body">
				<h1>Edit Profile</h1>
				<div className="Profile-Screen-Info">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt="Profile Not Found"
					/>
					<div className="Profile-Screen-Details">
						<h2>{user.email}</h2>
						<div className="Profile-Screen-Plans">
							<h3>Plans</h3>
							<button
								onClick={() => {
									authentication.signOut();
								}}
								className="Profile-Screen-SignOut"
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

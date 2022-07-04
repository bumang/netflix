import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./styles/dist/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { authentication } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./screens/Profile";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(authentication, (authUser) => {
			if (authUser) {
				//logged in
				dispatch(
					login({
						uid: authUser.uid,
						email: authUser.email,
					})
				);
			} else {
				//logged out
				dispatch(logout());
			}
		});
		return unsubscribed;
	}, [dispatch]);

	return (
		<div className="wrapper">
			<div className="App">
				<Router>
					{!user ? (
						<Login />
					) : (
						<Switch>
							<Route exact path="/">
								<HomeScreen />
							</Route>
							<Route path="/profile">
								<Profile />
							</Route>
						</Switch>
					)}
				</Router>
			</div>
		</div>
	);
}

export default App;

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./styles/dist/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";

function App() {
	const user = null;

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
							<Route path="/test">
								<h1>heloooooo</h1>
							</Route>
						</Switch>
					)}
				</Router>
			</div>
		</div>
	);
}

export default App;

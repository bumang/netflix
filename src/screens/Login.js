import React, { useState } from "react";
import Logo from "../assets/img/netflix-logo.png";
import SignInScreen from "./SignInScreen";

const Login = () => {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="Login-Screen">
			<div className="Login-Screen-BG">
				<img className="Login-Screen-Logo" src={Logo} alt="Netflix logo" />
				<button className="Login-Screen-BTN" onClick={() => setSignIn(true)}>
					Sign In
				</button>
			</div>
			<div className="Login-Screen-Gradient" />
			<div className="Login-Screen-Body">
				{signIn ? (
					<SignInScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership
						</h3>
						<div className="Login-Screen-Input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									className="Login-Screen-GetStarted"
									onClick={() => setSignIn(true)}
								>
									{" "}
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;

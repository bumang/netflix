import React from "react";

const SignInScreen = () => {
	return (
		<div className="Sign-Up-Screen">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
				<h4>
					<span className="Sign-Up-Screen-Grey"> New to Netflix? </span>
					<span className="Sign-Up-Screen-Link">Sign Up now.</span>
				</h4>
			</form>
		</div>
	);
};

export default SignInScreen;

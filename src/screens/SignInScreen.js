import React, { useRef } from "react";
import { authentication } from "../firebase.js";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const SignInScreen = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(
			authentication,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				// console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			authentication,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				// console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="Sign-Up-Screen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="Sign-Up-Screen-Grey"> New to Netflix? </span>
					<span className="Sign-Up-Screen-Link" onClick={register}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignInScreen;

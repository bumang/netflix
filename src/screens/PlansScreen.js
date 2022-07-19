import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
	checkSubscription,
	selectUser,
	setSubscription,
} from "../features/userSlice";
import { addDoc, onSnapshot } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";

const PlansScreen = () => {
	const [products, setProducts] = useState([]);
	const user = useSelector(selectUser);
	const subscriptionData = useSelector(checkSubscription);
	const dispatch = useDispatch();
	useEffect(() => {
		const q = query(collection(db, `customers/${user.uid}/subscriptions`));

		const getSubscriptionInfo = async () => {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach(async (subscribe) => {
				dispatch(
					setSubscription({
						role: subscribe.data().role,
						current_period_end: subscribe.data().current_period_end.seconds,
						current_period_start: subscribe.data().current_period_start.seconds,
					})
				);
			});
		};
		getSubscriptionInfo();
	}, [user.uid, dispatch]);

	useEffect(() => {
		// getting the products as product id
		const q = query(collection(db, "products"), where("active", "==", true));
		const products = {};
		const getProducts = async () => {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach(async (doc) => {
				/* storing the product in products object where key is productId */
				products[doc.id] = doc.data();
				/* getting the prices of the products */
				const priceSnap = await getDocs(collection(doc.ref, "prices"));
				priceSnap.docs.forEach((price) => {
					/* setting the prices of the product in the products object and it's data  */
					products[doc.id].prices = {
						priceId: price.id,
						priceData: price.data(),
					};
				});
			});
			setProducts(products);
		};
		getProducts();
	}, []);

	/* creating the payment session using stripe */
	const loadCheckout = async (priceId) => {
		const docRef = await addDoc(
			collection(db, `customers/${user.uid}/checkout_sessions`),
			{
				price: priceId,
				success_url: window.location.origin,
				cancel_url: window.location.origin,
			}
		);
		onSnapshot(docRef, async (snap) => {
			const { error, sessionId } = snap.data();

			if (error) {
				// Show an error to your customer and
				// inspect your Cloud Function logs in the Firebase console.
				alert(`An error occured: ${error.message}`);
			}
			if (sessionId) {
				// We have a Stripe Checkout URL, let's redirect.
				//Init Stripe
				const stripe = await loadStripe(
					"pk_test_51LI1hzIiYKljS5M33fhC5plE57saFRdlNPjQlbyvleFp2Yolnl4Vn1PxZU5uzRUxECqpCNAr9ApQlyvl4WrT35hM00jzSJGAMq"
				);
				stripe.redirectToCheckout({ sessionId });
			}
		});
	};
	return (
		<div className="Plan-Screen">
			<br />
			{subscriptionData && (
				<p>
					Renewal Date :
					{new Date(
						subscriptionData?.current_period_end * 1000
					).toLocaleDateString()}
				</p>
			)}

			{Object.entries(products).map(([productId, productData]) => {
				// TODOs add some logic if user subscription is active...
				const isCurrentPackage = productData.name
					?.toLowerCase()
					.includes(subscriptionData?.role.toLowerCase());

				return (
					<div
						className={`Plan-Screen-Plans ${
							isCurrentPackage && "Plan-Screen-Disabled"
						}`}
						key={productId}
					>
						<div className="Plan-Screen-Info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							onClick={() =>
								!isCurrentPackage && loadCheckout(productData.prices.priceId)
							}
						>
							{isCurrentPackage ? "Current Package" : "Subscribe"}
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default PlansScreen;

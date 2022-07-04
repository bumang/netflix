import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDwG_X95voIMqz0bC1bYREzu2pC8FK8GIk",
	authDomain: "netflix-clone-dc23e.firebaseapp.com",
	projectId: "netflix-clone-dc23e",
	storageBucket: "netflix-clone-dc23e.appspot.com",
	messagingSenderId: "192826679484",
	appId: "1:192826679484:web:e9273a7b6b78cfcaedf0b9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const authentication = getAuth(firebaseApp);

export { authentication };
export default db;

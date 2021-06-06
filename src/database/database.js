import firebase from "firebase/app"

var firebaseConfig = {
    apiKey: "AIzaSyAJKYHefbinrhNNZE1VpWEkQy5tCDZq6rY",
    authDomain: "api-fakefood.firebaseapp.com",
    projectId: "api-fakefood",
    storageBucket: "api-fakefood.appspot.com",
    messagingSenderId: "598516565742",
    appId: "1:598516565742:web:86b97a4ce0f845e79b55ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
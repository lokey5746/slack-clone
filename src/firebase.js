import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbBdh-BYYmpxR0E2QjXW_7OIBnWTKa2jM",
  authDomain: "slack-clone-635e4.firebaseapp.com",
  databaseURL: "https://slack-clone-635e4.firebaseio.com",
  projectId: "slack-clone-635e4",
  storageBucket: "slack-clone-635e4.appspot.com",
  messagingSenderId: "873688886381",
  appId: "1:873688886381:web:6c65b04fa0bf80adc3e364",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

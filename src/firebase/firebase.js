import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTyAUJjCS2rqXGS9VGe0HKEhpZ3fjiFC4",
  authDomain: "expensify-7f5a9.firebaseapp.com",
  databaseURL: "https://expensify-7f5a9.firebaseio.com",
  projectId: "expensify-7f5a9",
  storageBucket: "expensify-7f5a9.appspot.com",
  messagingSenderId: "934651661164"
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: "Bob Firestone"
  });

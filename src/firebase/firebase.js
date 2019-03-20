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

const database = firebase.database();

database.ref().set({
  name: "Bob Firestone",
  age: 39
});

database.ref("age").set(40);

database.ref("attributes").set({ height: `6'4"`, weight: 240 });

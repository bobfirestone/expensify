import * as firebase from "firebase";

import { firebaseExpenses } from "../tests/fixtures/expenses";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // firebaseExpenses.forEach(expense => {
// //   database.ref("expenses").push(expense);
// // });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   })
// //   .catch(err => {});

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref("notes").push({ title: "note 1", body: "note 1" });
// // database.ref("notes").push({ title: "note 2", body: "note 2" });

// // database
// //   .ref("notes/-Lab9FG7VDexsjixahmK")
// //   .once("value")
// //   .then(result => {
// //     console.log(result.val());
// //   })
// //   .catch(err => {});

// // database
// //   .ref("location/city")
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(err => {});

// // database
// //   .ref()
// //   .set({
// //     name: "Bob Firestone",
// //     age: 40,
// //     stressLevel: 5,
// //     job: { title: "Developer", company: "Google" },
// //     isSingle: false,
// //     location: { city: "Denver", country: "USA" }
// //   })
// //   .then(() => {
// //     console.log("success");
// //   })
// //   .catch(error => {
// //     console.log("error", error);
// //   });

// // const onDataChange = database.ref().on(
// //   "value",
// //   snapshot => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   },
// //   e => {
// //     console.log("error", e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref().update({
// //     name: "Bobbo",
// //     "job/company": "circus jerkus",
// //     "job/title": "jerk wrangler"
// //   });
// // }, 4000);

// // setTimeout(() => {
// //   database.ref().off("value", onDataChange);
// // }, 8000);

// // setTimeout(() => {
// //   database.ref().update({
// //     name: "Bobby",
// //     "job/company": "Bob's Burgers",
// //     "job/title": "jerk wrangler"
// //   });
// // }, 12000);

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });
// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("successfully removed data");
// //   })
// //   .catch(err => {
// //     console.log("ERROR:", err);
// //   });

// // database
// //   .ref()
// //   .update({
// //     name: "Bender",
// //     age: 29,
// //     job: "bending robot",
// //     isSingle: null,
// //     "location/city": "New New York",
// //     "location/state": "NY"
// //   });

// // database.ref("age").set(40);

// // database
// //   .ref("attributes")
// //   .set({ height: `6'4"`, weight: 240 })
// //   .then(() => {
// //     console.log("attributes updated");
// //   })
// //   .catch(err => {
// //     console.log("ERROR: ", err);
// //   });

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5IjSHbdJ2HdCo-4bLplPWASMMV4QksX0",
  authDomain: "banking-system-ef160.firebaseapp.com",
  projectId: "banking-system-ef160",
  storageBucket: "banking-system-ef160.appspot.com",
  messagingSenderId: "338208039496",
  appId: "1:338208039496:web:360727094d6ded452aee7d",
  measurementId: "G-PLL062PQ7Q"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email:email, accountno: accountno, balance: balance });
};

export const addTransaction = ( receiver, sender, amount) => {
  return db
    .collection("transactions")
    .add({ receiver: receiver, sender: sender, amount: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
 
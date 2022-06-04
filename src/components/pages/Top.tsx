import { onAuthStateChanged } from "firebase/auth";
<<<<<<< Updated upstream
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

export const Top = () => {
  const data = {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  };

  const addUser = async () => {
    try {
      await setDoc(doc(db, "users", "1"), data);
=======
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

export const Top = () => {
  const test = async () => {
    try {
      const docRef = await addDoc(collection(db, "user"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
>>>>>>> Stashed changes
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

<<<<<<< Updated upstream
  const getUser = async () => {
    const docRef = doc(db, "users", "4ye33LaPUwK09jIMCDY0");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const deleteUser = async () => {
    try {
      await deleteDoc(doc(db, "user", "qCfzTb3OZ5bBNwLs4fzc"));
      console.log("削除しました");
    } catch (e) {
      console.error("error", e);
    }
  };
=======
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //     console.log(user);
  //   } else {
  //   }
  // });
>>>>>>> Stashed changes

  return (
    <>
      <div>Topページです</div>
<<<<<<< Updated upstream
      <button onClick={() => addUser()}>ユーザーの追加</button>
      <button onClick={() => getUser()}>ユーザーの取得</button>
      <button onClick={() => deleteUser()}>ユーザーの削除</button>
=======
      <button onClick={() => test()}>ユーザーの追加</button>
>>>>>>> Stashed changes
    </>
  );
};

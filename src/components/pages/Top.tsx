import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useUidContext } from "../../store/UidProvider";

export const Top = () => {
  const { uid } = useUidContext();
  const data = {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  };

  const addUser = async () => {
    try {
      await setDoc(doc(db, "users", "1"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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

  return (
    <>
      <div>Melon Memoryへようこそ！</div>
    </>
  );
};

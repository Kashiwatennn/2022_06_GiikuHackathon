import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { FC, useEffect } from "react";
import { auth, db } from "../../firebase";
import { useAuthContext } from "../../store/AuthProvider";
import { useDataContext } from "../../store/DataProvider";
import { useIsCompleteContext } from "../../store/IsCompleteProvidr";
import { useUidContext } from "../../store/UidProvider";

type propsType = {
  children: React.ReactNode;
};

export const SetInitialState: FC<propsType> = ({ children }) => {
  const { uid, setUid } = useUidContext();
  const { setIsLogin } = useAuthContext();
  const { data, setData } = useDataContext();
  const { setIsComplete } = useIsCompleteContext();

  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     const temp: any = doc.data();
  //     let temp2: any = [];
  //     if (!!temp !== false) {
  //       const temp1 = Object.entries(temp.emails);
  //       temp1.map((item: any, index) => {
  //         const temp3 = Object.entries(item[1]);
  //         let temp4: any = [];
  //         temp3.map((item, index) => {
  //           temp4[index] = item[1];
  //         });
  //         temp2[index] = temp4;
  //       });
  //     } else {
  //       temp2 = temp;
  //     }
  //     console.log("initialState", doc.id);
  //     if (uid === doc.id) {
  //       setData(temp2);
  //       console.log("データをセットしました");
  //     }
  //   });
  // };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const temp: any = doc.data();
      const temp1 = Object.entries(temp.emails);
      let temp2: any = [];
      temp1.map((item: any, index) => {
        const temp3 = Object.entries(item[1]);
        let temp4: any = [];
        temp3.map((item, index) => {
          temp4[index] = item[1];
        });
        temp2[index] = temp4;
      });
      return setData(temp2);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("ログインしているユーザーがいます");
        setIsLogin(true);
        setUid(user.uid);
      } else {
        setIsLogin(false);
        console.log("ログインしているユーザーはいません");
      }
    });
    getData().then(() => {
      setIsComplete(true);
    });
  }, []);

  return <div>{children}</div>;
};

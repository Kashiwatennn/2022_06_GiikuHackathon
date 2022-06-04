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
  const { setUid } = useUidContext();
  const { setIsLogin } = useAuthContext();
  const { data, setData } = useDataContext();
  const { setIsComplete } = useIsCompleteContext();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = {
        emails: {
          0: {
            0: "email",
            1: "service",
          },
          1: {
            0: "email",
            1: "service",
          },
        },
      };

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
        setIsLogin(true);
        setUid(user.uid);
      } else {
        setIsLogin(false);
      }
    });

    getData().then(() => {
      setIsComplete(true);
    });
  }, []);

  console.log(data);
  return <div>{children}</div>;
};

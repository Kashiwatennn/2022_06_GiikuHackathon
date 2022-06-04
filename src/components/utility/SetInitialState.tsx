import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useAuthContext } from "../../store/AuthProvider";
import { useUidContext } from "../../store/UidProvider";

type propsType = {
  children: React.ReactNode;
};

export const SetInitialState: FC<propsType> = ({ children }) => {
  const user = auth.currentUser;
  const { uid, setUid } = useUidContext();
  const { isLogin, setIsLogin } = useAuthContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUid(user.uid);
        console.log(uid);
      } else {
        setIsLogin(false);
      }
      console.log("isLogin:" + isLogin);
    });
  }, []);

  return <div>{children}</div>;
};

import React, { createContext, useContext, useState, FC } from "react";

const UidContext = createContext(
  {} as {
    uid: boolean;
    setUid: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

type propsType = {
  children: React.ReactNode;
};

export const UidProvider: FC<propsType> = (props) => {
  const { children } = props;
  const [uid, setUid] = useState<boolean>(false);
  return (
    <UidContext.Provider value={{ uid, setUid }}>
      {children}
    </UidContext.Provider>
  );
};

export const useUidContext = () => {
  return useContext(UidContext);
};

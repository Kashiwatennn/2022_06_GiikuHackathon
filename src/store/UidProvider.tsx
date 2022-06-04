import React, { createContext, useContext, useState, FC } from "react";

const UidContext = createContext(
  {} as {
    uid: string;
    setUid: React.Dispatch<React.SetStateAction<string>>;
  }
);

type propsType = {
  children: React.ReactNode;
};

export const UidProvider: FC<propsType> = (props) => {
  const { children } = props;
  const [uid, setUid] = useState<string>("");
  return (
    <UidContext.Provider value={{ uid, setUid }}>
      {children}
    </UidContext.Provider>
  );
};

export const useUidContext = () => {
  return useContext(UidContext);
};

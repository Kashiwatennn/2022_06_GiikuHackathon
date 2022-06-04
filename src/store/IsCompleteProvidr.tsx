import React, { createContext, useContext, useState, FC } from "react";

const IsCompleteContext = createContext(
  {} as {
    isComplete: boolean;
    setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

type propsType = {
  children: React.ReactNode;
};

export const IsCompleteProvider: FC<propsType> = (props) => {
  const { children } = props;
  const temp = {
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

  const [isComplete, setIsComplete] = useState<boolean>(false);

  return (
    <IsCompleteContext.Provider value={{ isComplete, setIsComplete }}>
      {children}
    </IsCompleteContext.Provider>
  );
};

export const useIsCompleteContext = () => {
  return useContext(IsCompleteContext);
};

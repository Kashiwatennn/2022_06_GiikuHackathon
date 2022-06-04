import React, { createContext, useContext, useState, FC } from "react";

const DataContext = createContext(
  {} as {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
  }
);

type propsType = {
  children: React.ReactNode;
};

export const DataProvider: FC<propsType> = (props) => {
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

  const [data, setData] = useState<any>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

import { FC } from "react";

type propsType = {
  children: React.ReactNode;
};

export const SetInitialState: FC<propsType> = ({ children }) => {
  return <div>{children}</div>;
};

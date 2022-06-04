import { FC } from "react";
import { auth } from "../../firebase";

type propsType = {
  children: React.ReactNode;
};

const user = auth.currentUser;
if (user !== null) {
  const uid = user.uid;
}
export const SetInitialState: FC<propsType> = ({ children }) => {
  return <div>{children}</div>;
};

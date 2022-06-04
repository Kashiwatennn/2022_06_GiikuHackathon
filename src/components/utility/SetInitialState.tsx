import { FC } from "react";
<<<<<<< Updated upstream
import { auth } from "../../firebase";
=======
>>>>>>> Stashed changes

type propsType = {
  children: React.ReactNode;
};

<<<<<<< Updated upstream
const user = auth.currentUser;
if (user !== null) {
  const uid = user.uid;
}
=======
>>>>>>> Stashed changes
export const SetInitialState: FC<propsType> = ({ children }) => {
  return <div>{children}</div>;
};

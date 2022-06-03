import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { pathData } from "../../assets/pathData";

type propsType = {
  navigate: NavigateFunction;
};
const onClick = (props: propsType) => {
  const { navigate } = props;
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Googleアカウントでログインしました。");
      navigate(pathData.home);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => onClick({ navigate })}>
        Googleアカウントでログイン
      </button>
    </div>
  );
};

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const clickButton = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Googleアカウントでログインしました。");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Login = () => {
  return (
    <div>
      <button onClick={clickButton}>Googleアカウントでログイン</button>
    </div>
  );
};

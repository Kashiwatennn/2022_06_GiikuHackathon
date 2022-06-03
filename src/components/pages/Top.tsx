import { Link } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { firebaseConfig } from "../../firebase";

export const Top = () => {
  console.log(firebaseConfig);
  console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
  return (
    <>
      <div>Topページです</div>
      <Link to={pathData.top}>Top</Link>
      <Link to={pathData.home}>Home</Link>
      <Link to={pathData.login}>Lgoin</Link>
    </>
  );
};

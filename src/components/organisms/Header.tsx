import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { DefaultButton } from "../atoms/DefaultButton";
import { signInWithPopup, signOut, UserCredential } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { auth, db, provider } from "../../firebase";
import { useAuthContext } from "../../store/AuthProvider";
import { useUidContext } from "../../store/UidProvider";
import { useDataContext } from "../../store/DataProvider";
import { collection, getDocs } from "firebase/firestore";
import { useIsCompleteContext } from "../../store/IsCompleteProvidr";

type loginProps = {
  navigate: NavigateFunction;
  setUid: React.Dispatch<React.SetStateAction<string>>;
};

type logoutProps = {
  setUid: React.Dispatch<React.SetStateAction<string>>;
};

const logout = (props: logoutProps) => {
  const { setUid } = props;
  signOut(auth)
    .then(() => {
      setUid("");
      console.log("ログアウトしました");
    })
    .catch((error) => {
      console.log("ログアウトに失敗しました");
    });
};

export const Header: FC = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuthContext();
  const { setData } = useDataContext();
  const { setUid } = useUidContext();
  const { setIsComplete } = useIsCompleteContext();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const temp: any = doc.data();
      const temp1 = Object.entries(temp.emails);
      let temp2: any = [];
      temp1.map((item: any, index) => {
        const temp3 = Object.entries(item[1]);
        let temp4: any = [];
        temp3.map((item, index) => {
          temp4[index] = item[1];
        });
        temp2[index] = temp4;
      });
      return setData(temp2);
    });
  };

  const login = async (props: loginProps) => {
    const { navigate, setUid } = props;

    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        console.log("Googleアカウントでログインしました。");
        console.log(result.user.uid);
        setUid(result.user.uid);
        getData().then(() => {
          setIsComplete(true);
          navigate(pathData.home);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SContainer>
      <div>
        <SLink to={pathData.top}>Top</SLink>
        {isLogin && <SLink to={pathData.home}>Home</SLink>}
      </div>
      <div>
        {isLogin || (
          <DefaultButton onClick={() => login({ navigate, setUid })}>
            ログイン
          </DefaultButton>
        )}
        {isLogin && (
          <DefaultButton
            onClick={() => {
              logout({ setUid });
              setData({});
              navigate(pathData.top);
            }}
          >
            ログアウト
          </DefaultButton>
        )}
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: green;
  display: flex;
  //ヘッダーのボタン左右->"均等配置(左右は開けない)"
  justify-content: space-between;
  //ヘッダーのボタン上下->”真ん中”
  align-items: center;
  gap: 10px;
  height: 40px;
`;

const SLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

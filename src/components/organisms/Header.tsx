import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { DefaultButton } from "../atoms/DefaultButton";
import { signInWithPopup, signOut, UserCredential } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { useAuthContext } from "../../store/AuthProvider";

type propsType = {
  navigate: NavigateFunction;
};

const login = (props: propsType) => {
  const { navigate } = props;

  signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      console.log("Googleアカウントでログインしました。");
<<<<<<< Updated upstream
      console.log(result.user.uid);
=======
      console.log(result.user.email);
>>>>>>> Stashed changes
      navigate(pathData.home);
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("ログアウトしました");
    })
    .catch((error) => {
      console.log("ログアウトに失敗しました");
    });
};

export const Header: FC = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuthContext();

  return (
    <SContainer>
<<<<<<< Updated upstream
      <div>
        <SLink to={pathData.top}>Top</SLink>
        <SLink to={pathData.home}>Home</SLink>
      </div>
      <div>
        {isLogin || (
          <DefaultButton onClick={() => login({ navigate })}>
            ログイン
          </DefaultButton>
        )}
        {isLogin && (
          <DefaultButton
            onClick={() => {
              logout();
            }}
          >
            ログアウト
          </DefaultButton>
        )}
      </div>
=======
      <SLink to={pathData.top}>Top</SLink>
      <SLink to={pathData.home}>Home</SLink>
      {isLogin || (
        <DefaultButton onClick={() => login({ navigate })}>
          ログイン
        </DefaultButton>
      )}
      {isLogin && (
        <DefaultButton
          onClick={() => {
            logout();
          }}
        >
          ログアウト
        </DefaultButton>
      )}
>>>>>>> Stashed changes
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

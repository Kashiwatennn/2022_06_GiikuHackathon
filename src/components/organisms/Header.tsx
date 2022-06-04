import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { DefaultButton } from "../atoms/DefaultButton";
import { signInWithPopup, signOut } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";

type propsType = {
  navigate: NavigateFunction;
};

const login = (props: propsType) => {
  const { navigate } = props;

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Googleアカウントでログインしました。");
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
  return (
    <SContainer>
      <SLink to={pathData.top}>Top</SLink>
      <SLink to={pathData.home}>Home</SLink>
      <DefaultButton onClick={() => login({ navigate })}>
        ログイン
      </DefaultButton>
      <DefaultButton
        onClick={() => {
          logout();
        }}
      >
        ログアウト
      </DefaultButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: green;
  display: flex;
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

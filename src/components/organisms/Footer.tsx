import styled from "styled-components";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <SComponentContainer>
      &copy; 2022 Tsumugi,Yuta,Syouiti,Karen
    </SComponentContainer>
  );
};

const SComponentContainer = styled.footer`
  background-color: green;
  padding: 10px 0;
  bottom: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  //フッター固定用
  margin-top: auto;
  height: 40px;
`;

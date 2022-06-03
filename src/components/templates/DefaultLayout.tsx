import { FC } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import styled from "styled-components";

type PropsType = {
  children: React.ReactNode;
};

export const DefaultLayout: FC<PropsType> = (props) => {
  const { children } = props;

  return (
    <SFooterFixed>
      <Header />
      <SCenter>{children}</SCenter>
      <Footer />
    </SFooterFixed>
  );
};

const SCenter = styled.div`
  //コンテンツの中央寄せと幅の指定
  margin: auto;
  width: 80vw;
`;

const SFooterFixed = styled.div`
  //フッターの固定
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

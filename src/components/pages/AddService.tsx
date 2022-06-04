import { FC } from "react";
import styled from "styled-components";

export const AddServise: FC = () => {
  //emailに対してサービスを追加するので遷移次にクエリパラメータとかで色々渡す必要がありそう
  return (
    <SContainer>
      <SText>追加するサービス名を入力してください</SText>
      <input />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SText = styled.div`
  font-weight: bold;
`;

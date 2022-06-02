import React, { FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  return (
    <SComponentContainer>
      <SText>メロン組へようこそ</SText>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  text-align: center;
`;

const SText = styled.div`
  font-size: 24px;
`;

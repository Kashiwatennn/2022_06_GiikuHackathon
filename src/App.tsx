import styled from "styled-components";
import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./store/AuthProvider";

export const App = () => {
  return (
    <AuthProvider>
      <SComponentContainer>
        <ComponentRouter />;
      </SComponentContainer>
    </AuthProvider>
  );
};

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #4ec54e;
  width: 100vw;
  height: 100vh;
`;

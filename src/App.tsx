import styled from "styled-components";
import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./store/AuthProvider";

// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./firebase";
// initializeApp(firebaseConfig);

export const App = () => {
  return (
    <AuthProvider>
      <SComponentContainer>
        <ComponentRouter />
      </SComponentContainer>
    </AuthProvider>
  );
};

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #4ec54e;
`;

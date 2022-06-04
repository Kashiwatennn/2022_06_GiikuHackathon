import styled from "styled-components";
import { SetInitialState } from "./components/utility/SetInitialState";
import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./store/AuthProvider";

export const App = () => {
  return (
    <AuthProvider>
      <SComponentContainer>
        <SetInitialState>
          <ComponentRouter />
        </SetInitialState>
      </SComponentContainer>
    </AuthProvider>
  );
};

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #4ec54e;
`;

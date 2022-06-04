import styled from "styled-components";
import { SetInitialState } from "./components/utility/SetInitialState";
import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./store/AuthProvider";
import { UidProvider } from "./store/UidProvider";

export const App = () => {
  return (
    <AuthProvider>
      <UidProvider>
        <SComponentContainer>
          <SetInitialState>
            <ComponentRouter />
          </SetInitialState>
        </SComponentContainer>
      </UidProvider>
    </AuthProvider>
  );
};

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #4ec54e;
`;

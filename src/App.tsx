import styled from "styled-components";
import { SetInitialState } from "./components/utility/SetInitialState";
import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./store/AuthProvider";
import { DataProvider } from "./store/DataProvider";
import { IsCompleteProvider } from "./store/IsCompleteProvidr";
import { UidProvider } from "./store/UidProvider";

export const App = () => {
  return (
    <IsCompleteProvider>
      <DataProvider>
        <AuthProvider>
          <UidProvider>
            <SComponentContainer>
              <SetInitialState>
                <ComponentRouter />
              </SetInitialState>
            </SComponentContainer>
          </UidProvider>
        </AuthProvider>
      </DataProvider>
    </IsCompleteProvider>
  );
};

const SComponentContainer = styled.div`
  //色の指定
  color: white;
  background-color: #4ec54e;
`;

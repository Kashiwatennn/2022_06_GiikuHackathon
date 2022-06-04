import styled from "styled-components";
import { DefaultButton } from "../atoms/DefaultButton";
import { useNavigate } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { useDataContext } from "../../store/DataProvider";
import { useIsCompleteContext } from "../../store/IsCompleteProvidr";
import { Email } from "../organisms/Email";

export const Home = () => {
  const navigate = useNavigate();
  const { data } = useDataContext();
  const { isComplete } = useIsCompleteContext();

  if (isComplete) {
    return (
      <SContainer>
        {data.map((item: any, index: number) => (
          <Email data={item} key={index} />
        ))}
        <DefaultButton
          onClick={() => {
            navigate(pathData.addMail);
          }}
        >
          メールアドレスの追加
        </DefaultButton>
      </SContainer>
    );
  } else {
    return <div>ローディング中</div>;
  }
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pathData } from "../../assets/pathData";
import { useDataContext } from "../../store/DataProvider";
import { DefaultButton } from "../atoms/DefaultButton";

type propsType = {
  data: any;
};

export const Email: FC<propsType> = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const contentsArray = ["test.test", "Amazon", "youtube", "apex"];
  return (
    <SElement>
      <SFlexContainer>
        <SMail>{data[0]}</SMail>
        <DefaultButton>削除</DefaultButton>
      </SFlexContainer>
      <SService>
        {data.map((item: any, index: number) => {
          if (index > 0) {
            return (
              <SFlexContainer key={index}>
                <div>{item}</div>
                <DefaultButton>削除</DefaultButton>
              </SFlexContainer>
            );
          }
        })}
      </SService>
      <DefaultButton
        onClick={() => {
          navigate(pathData.addService);
        }}
      >
        サービスの追加
      </DefaultButton>
    </SElement>
  );
};

const SFlexContainer = styled.div`
  display: flex;
`;

const SService = styled.div`
  margin-left: 30px;
`;

const SMail = styled.div`
  font-weight: bold;
`;

const SElement = styled.div`
  margin: bottom;
`;

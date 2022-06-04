import styled from "styled-components";
import { DefaultButton } from "../atoms/DefaultButton";
import { useNavigate } from "react-router-dom";
import { pathData } from "../../assets/pathData";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <SContainer>
      {/* 
        トグルスイッチなどで展開できるとなおよいが時間と相談 
        めんどくさいのでdivで全部書いてますが意味はありません
      */}
      <SElement>
        <SFlexContainer>
          <SMail>メールアドレス1</SMail>
          <DefaultButton>削除</DefaultButton>
        </SFlexContainer>
        <SService>
          <SFlexContainer>
            <div>Amazon</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
          <SFlexContainer>
            <div>youtube(観賞用)</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
          <SFlexContainer>
            <div>apex(メイン垢)</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
        </SService>
        <DefaultButton
          onClick={() => {
            navigate(pathData.addService);
          }}
        >
          サービスの追加
        </DefaultButton>
      </SElement>

      <SElement>
        <SFlexContainer>
          <SMail>メールアドレス2</SMail>
          <DefaultButton>削除</DefaultButton>
        </SFlexContainer>
        <SService>
          <SFlexContainer>
            <div>moodle</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
          <SFlexContainer>
            <div>slack(学校用)</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
          <SFlexContainer>
            <div>サポーターズ</div>
            <DefaultButton>削除</DefaultButton>
          </SFlexContainer>
        </SService>
        <DefaultButton
          onClick={() => {
            navigate(pathData.addMail);
          }}
        >
          サービスの追加
        </DefaultButton>
      </SElement>

      <DefaultButton
        onClick={() => {
          navigate(pathData.addMail);
        }}
      >
        メールアドレスの追加
      </DefaultButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

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

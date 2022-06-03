import styled from "styled-components";
import { DefaultButton } from "../atoms/DefaultButton";

export const Home = () => {
  return (
    <SContainer>
      {/* 
        トグルスイッチなどで展開できるとなおよいが時間と相談 
        めんどくさいのでdivで全部書いてますが意味はありません
      */}
      <SElement>
        <SMail>メールアドレス1</SMail>
        <SService>
          <div>Amazon</div>
          <div>youtube(観賞用)</div>
          <div>apex(メイン垢)</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <SElement>
        <SMail>メールアドレス2</SMail>
        <SService>
          <div>moodle</div>
          <div>slack(大学用)</div>
          <div>サポーターズ</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <SElement>
        <SMail>メールアドレス1</SMail>
        <SService>
          <div>Amazon</div>
          <div>youtube(観賞用)</div>
          <div>apex(メイン垢)</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <SElement>
        <SMail>メールアドレス2</SMail>
        <SService>
          <div>moodle</div>
          <div>slack(大学用)</div>
          <div>サポーターズ</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <SElement>
        <SMail>メールアドレス1</SMail>
        <SService>
          <div>Amazon</div>
          <div>youtube(観賞用)</div>
          <div>apex(メイン垢)</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <SElement>
        <SMail>メールアドレス2</SMail>
        <SService>
          <div>moodle</div>
          <div>slack(大学用)</div>
          <div>サポーターズ</div>
        </SService>
        <DefaultButton>サービスの追加</DefaultButton>
      </SElement>

      <br />
      <DefaultButton>メールアドレスの追加</DefaultButton>
    </SContainer>
  );
};

const SContainer = styled.div``;

const SService = styled.div`
  margin-left: 30px;
`;

const SMail = styled.div`
  font-weight: bold;
`;

const SElement = styled.div`
  margin: bottom;
`;

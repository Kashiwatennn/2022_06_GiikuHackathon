import { FC } from "react";
import styled from "styled-components";

export const AddMail: FC = () => {
  //できれば動的フォームにしたいがreact-hook-formを使うことになると思うので少し大変かも
  return (
    <SContainer>
      <SText>メールアドレスを入力してください</SText>
      <input />
      <SText>
        メールアドレスを使用しているサービスを入力してください（とりあえず１つ）
      </SText>
      <input />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SText = styled.div`
  font-weight: bold;
`;

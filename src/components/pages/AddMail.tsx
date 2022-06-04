import { collection, doc, setDoc } from "firebase/firestore";
import { FC, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useUidContext } from "../../store/UidProvider";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router-dom";
import { pathData } from "../../assets/pathData";

type addUserProps = {
  email: string;
  service: string;
  navigate: NavigateFunction;
};

export const AddMail: FC = () => {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const { uid } = useUidContext();
  const navigate = useNavigate();

  const data = {
    emails: {
      0: {
        email: email,
        0: service,
      },
    },
  };

  const addMail = async (props: addUserProps) => {
    const path = "users/" + uid;

    try {
      const refEmails = doc(db, path);
      await setDoc(refEmails, data);
      window.alert("追加しました");
      navigate(pathData.home);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <SContainer>
      <SText>メールアドレスを入力してください</SText>
      <input onChange={(e) => setEmail(e.target.value)} />
      <SText>
        メールアドレスを使用しているサービスを入力してください（登録時は１つのみ選択）
      </SText>
      <input onChange={(e) => setService(e.target.value)} />
      <button onClick={() => addMail({ email, service, navigate })}>
        追加
      </button>
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

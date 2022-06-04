import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { FC, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useUidContext } from "../../store/UidProvider";
import { useNavigate } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { useDataContext } from "../../store/DataProvider";

export const AddMail: FC = () => {
  const [email, setEmail] = useState("");
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");
  const [service3, setService3] = useState("");
  const { uid } = useUidContext();
  const { data } = useDataContext();
  const navigate = useNavigate();

  const addMail = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let or_data: any = {};
    querySnapshot.forEach((doc) => {
      or_data = doc.data();
    });
    const path = "users/" + uid;
    let temp = or_data;
    const num = data.length;
    temp.emails = Object.assign(or_data.emails, {
      [num]: {
        0: email,
        1: service1,
        2: service2,
        3: service3,
      },
    });
    console.log(or_data);
    try {
      const refEmails = doc(db, path);
      await setDoc(refEmails, temp);
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
        メールアドレスを使用しているサービスを入力してください（最大３つまで）
      </SText>
      <input onChange={(e) => setService1(e.target.value)} />
      <input onChange={(e) => setService2(e.target.value)} />
      <input onChange={(e) => setService3(e.target.value)} />
      <button onClick={() => addMail()}>追加</button>
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

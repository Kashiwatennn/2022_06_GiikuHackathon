import styled from "styled-components";
import { DefaultButton } from "../atoms/DefaultButton";
import { useNavigate } from "react-router-dom";
import { pathData } from "../../assets/pathData";
import { useDataContext } from "../../store/DataProvider";
import { useIsCompleteContext } from "../../store/IsCompleteProvidr";
import { Email } from "../organisms/Email";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { data, setData } = useDataContext();
  const { isComplete } = useIsCompleteContext();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const temp: any = doc.data();
      const temp1 = Object.entries(temp.emails);
      let temp2: any = [];
      temp1.map((item: any, index) => {
        const temp3 = Object.entries(item[1]);
        let temp4: any = [];
        temp3.map((item, index) => {
          temp4[index] = item[1];
        });
        temp2[index] = temp4;
      });
      return setData(temp2);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isComplete) {
    return (
      <SContainer>
        <SService>
          {data.map((item: any, index: number) => (
            <Email data={item} key={index} id={index} />
          ))}
          </SService>
          <SButton
            onClick={() => {
              navigate(pathData.addMail);
            }}
          >
            メールアドレスの追加
        </SButton>
      </SContainer>
    );
  } else {
    return <div>ローディング中</div>;
  }
};

const SContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-around;

  gap: 40px; 
`;

const SService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SButton = styled(DefaultButton)`
  width: 150px;
  height: 70px;
`;
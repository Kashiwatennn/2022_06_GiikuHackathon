import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { FC } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useDataContext } from "../../store/DataProvider";
import { useUidContext } from "../../store/UidProvider";
import { DefaultButton } from "../atoms/DefaultButton";

type propsType = {
  data: any;
  id: number;
};

export const Email: FC<propsType> = (props) => {
  const { data, id } = props;
  const { uid } = useUidContext();
  const { setData } = useDataContext();

  const deleteEmail = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let or_data: any = {};
    querySnapshot.forEach((doc) => {
      or_data = doc.data();
    });

    const temp1 = Object.entries(or_data.emails);
    let temp2: any = [];
    temp1.map((item: any, index) => {
      temp2[index] = item[1];
    });
    temp2.splice(id, 1);
    temp2 = Object.assign({}, temp2);
    const updateData = { emails: temp2 };
    console.log(temp2);
    const path = "users/" + uid;
    try {
      const refEmails = doc(db, path);
      await setDoc(refEmails, updateData);

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
          setData(temp2);
        });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <SElement>
      <SFlexContainer>
        <Sdelete>
          <SMail>{data[0]}</SMail>
          <DButton onClick={() => deleteEmail()}>削除</DButton>
        </Sdelete>
      </SFlexContainer>
      <SService>
        {data.map((item: any, index: number) => {
          if (index > 0) {
            return (
              <SFlexContainer key={index}>
                <div>{item}</div>
              </SFlexContainer>
            );
          }
        })}
      </SService>
    </SElement>
  );
};

const SFlexContainer = styled.div`
  display: flex;
`;

const SService = styled.div`
  margin-left: 50px;
  font-size: 18px;
`;

const SMail = styled.div`
  font-weight: bold;
  font-size: 23px;
`;

const SElement = styled.div`
  margin: bottom;
`;

const Sdelete = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
`; 

const DButton = styled(DefaultButton)`
  width: 55px;
  height: 25px;
`;
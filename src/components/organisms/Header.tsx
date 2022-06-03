import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/pathData";

export const Header: FC = () => {
  return (
    <SContainer>
      <Link to={pathData.top}>Top</Link>
      <Link to={pathData.home}>Home</Link>
      <Link to={pathData.login}>Lgoin</Link>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: green;
  display: flex;
  gap: 10px;
`;

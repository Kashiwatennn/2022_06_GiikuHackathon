import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathData } from "../assets/pathData";
import { Top } from "../components/pages/Top";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";

export const ComponentRouter: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={pathData.top} element={<Top />} />
        <Route path={pathData.login} element={<Login />} />
        <Route path={pathData.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

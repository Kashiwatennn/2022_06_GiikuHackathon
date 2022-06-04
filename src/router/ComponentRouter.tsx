import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathData } from "../assets/pathData";
import { Top } from "../components/pages/Top";
import { Home } from "../components/pages/Home";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { AddMail } from "../components/pages/AddMail";
import { AddServise } from "../components/pages/AddService";

export const ComponentRouter: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path={pathData.top}
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path={pathData.home}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path={pathData.addMail}
          element={
            <DefaultLayout>
              <AddMail />
            </DefaultLayout>
          }
        />
        <Route
          path={pathData.addService}
          element={
            <DefaultLayout>
              <AddServise />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

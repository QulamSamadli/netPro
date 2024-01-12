import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "../Routing";

const Myroute = () => {
  return (
    <Routes>
      {routes.map(({ id, path, element }) => {
        return <Route path={path} key={id} element={element} />;
      })}
    </Routes>
  );
};

export default Myroute;

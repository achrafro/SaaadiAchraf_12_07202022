import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Dashboard/Home";
import App from "./App";
import Notfound from "./Dashboard/Notfound";

function DashboardRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Navigate replace to="Dashboard/12" />}
        />

        <Route path="Dashboard/:id" element={<Home> </Home>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DashboardRoutes;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../views/Welcome/Welcome";
import Login from "../views/Authentication/Login/Login";
import Registration from "../views/Authentication/Registration/Registration";
import SRootWrapper from "../components/SRootWrapper";
import Diary from "../views/Diary/Diary";
import SleepData from "../views/SleepData/SleepData";
import Instruction from "../views/Instruction/Instruction";
import Settings from "../views/Settings/Settings";
import PrivateRouteProvider from "./PrivateRouteProvider";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="welcome" />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="/" element={<PrivateRouteProvider />}>
        <Route path="/" element={<SRootWrapper />}>
          <Route path="diary" element={<Diary />} />
          <Route path="sleep-data" element={<SleepData />} />
          <Route path="instruction" element={<Instruction />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;

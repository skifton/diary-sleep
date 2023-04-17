import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const SRootWrapper: React.FC = () => {
  return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
  );
};

export default SRootWrapper;

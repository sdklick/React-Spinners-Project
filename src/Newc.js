import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Newc = () => {
  return (
    <>
     <Navbar/>
      <Outlet/>
    </>
  );
};

export default Newc;
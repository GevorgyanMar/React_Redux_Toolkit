import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const Navigate: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;

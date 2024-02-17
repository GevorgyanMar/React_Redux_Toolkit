import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MediaComponent from "../pages/media/Media";
import User from "../pages/user/User";
import Menu from "../components/menu/Menu";
import WeatherComponent from "../pages/weather/WeatherComponent";

const Navigate: FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Media" element={<MediaComponent />} />
        <Route path="/User" element={<User />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/WeatherForecast" element={<WeatherComponent />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;

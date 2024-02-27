import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MediaComponent from "../pages/media/Media";
import User from "../pages/user/User";
import WeatherComponent from "../pages/weather/WeatherComponent";
import Chat from "../components/chat/Chat";
import Enter from "../Enter/Enter";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

const Navigate: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="User" element={<User />} />
        </Route>

        {/* <Route path="/Media" element={<MediaComponent />} /> */}

        {/* <Route path="/WeatherForecast" element={<WeatherComponent />} /> */}

        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;

import React, { FC } from "react";
import { useSelector } from "react-redux";
import { nameSelector } from "../../toolkit/loginSlices/loginSelector";

import User from "../user/User";

const Home: FC = () => {
  const name = useSelector(nameSelector);
  return (
    <div>
      Welcome {name}
      <User />
    </div>
  );
};

export default Home;

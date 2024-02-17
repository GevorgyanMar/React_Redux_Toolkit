import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { routerItems } from "../../router/routerItems";

const Menu: FC = () => {
  return (
    <div className="menu-bar">
      <ul>
        {routerItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

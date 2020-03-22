import React from "react";

import { Button, Ion } from "antd";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";
import AgusLogo from "../../../assets/img/png/logo.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={AgusLogo}
          alt="Sasan Abbasi"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed && <MenuUnfoldOutlined />}
          {!menuCollapsed && <MenuFoldOutlined />}
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("dexconexion")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}

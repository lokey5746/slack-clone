import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/Help";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      {/* =========User profile section======== */}
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </div>
      {/* ======Search Feild =========== */}
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Chat Room" />
      </div>
      {/* =======Help user Section====== */}
      <div className="header__right">
        <HelpOutLineIcon />
        {/* help icon */}
      </div>
    </div>
  );
}

export default Header;

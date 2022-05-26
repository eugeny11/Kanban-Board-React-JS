import React, { useState } from "react";
import userAvatar from "./user-avatar.png";
import arrow from "./arrow.png";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={css.userMenu} onClick={handleClick}>
      <div className={css.userMenuArrow}>
        <img className={css.userAvatar} src={userAvatar} alt="" />
        <img
          className={
            click ? "userMenuArrow userMenuArrowClicked" : "userMenuArrow"
          }
          src={arrow}
          alt="arrow"
        />
      </div>
      {click && (
        <>
          <ul className={css.userMenuDropdown}>
            <li className={css.dropdownPosition}>Profile</li>
            <li className={css.dropdownPosition}>Goals</li>
            <li className={css.dropdownPosition}>Log Out</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default UserMenu;

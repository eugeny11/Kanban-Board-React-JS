import React from "react";
import css from "./Header.module.css";
import UserMenu from "./UserMenu/UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContent}>
        <Link to="/">
          <h1 className={css.headerTitle}>Kanban board</h1>
        </Link>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;

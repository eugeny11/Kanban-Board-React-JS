import React from "react";
import css from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import Board from "../Board/Board";
import GoalSeparatePage from "../GoalSeparatePage/GoalSeparatePage";

const Main = (props) => {
  return (
    <main className={css.main}>
      <Routes>
        <Route exact path={"/"} element={<Board {...props} />} />
        <Route
          exact
          path={"/goals/:goalId"}
          element={<GoalSeparatePage {...props} />}
        />
      </Routes>
    </main>
  );
};

export default Main;

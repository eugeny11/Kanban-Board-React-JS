import React from "react";
import uniqid from "uniqid";
import css from "./Board.module.css";
import { LIST_TYPES, LIST_COPY } from "../../config";
import List from "../List/List";

const Board = (props) => {
  const { goals, setGoals } = props;

  const addNewGoal = (title, desc) => {
    const goal = {
      id: uniqid(),
      title,
      desc,
      status: LIST_TYPES.GOALS_BACKLOG,
    };

    setGoals([...goals, goal]);
  };

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listOfGoals = goals.filter((goal) => goal.status === type);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            goals={listOfGoals || []}
            addNewGoal={addNewGoal}
            countOfGoals={goals}
            setGoals={setGoals}
          />
        );
      })}
    </div>
  );
};

export default Board;

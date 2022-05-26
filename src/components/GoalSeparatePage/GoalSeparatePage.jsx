import React, { useState } from "react";
import X from "./x.png";
import { Link, useParams } from "react-router-dom";
import css from "./GoalSeparatePage.module.css";

const GoalSeparatePage = (props) => {
  const { goals, setGoals } = props;
  const { goalId } = useParams();
  const [newDesc, setNewDesc] = useState("");
  const goal = goals.find((goal) => goal.id === goalId);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!newDesc) {
      alert("Enter new desc!");
    }

    const updatedGoals = goals.map((goal) => {
      if (goal.id === goalId) {
        return { ...goal, desc: newDesc };
      }
      return goal;
    });
    setGoals(updatedGoals);

    setNewDesc("");
  };

  const newDescChange = (e) => {
    setNewDesc(e.target.value);
  };

  const renderGoalSeparatePage = () => {
    return (
      <>
        <form className={css.goalForm} onSubmit={onSubmit}>
          <div className={css.goalHeader}>
            <h2 className={css.goalTitle}>{goal.title}</h2>
          </div>
          {goal.desc ? (
            <p className={css.goalDesc}>{goal.desc}</p>
          ) : (
            <p className={css.goalDesc}>Goal got no desc, please add desc</p>
          )}
          <input
            className="input"
            name="description"
            value={newDesc}
            onChange={newDescChange}
            type="text"
            placeholder="Change description"
          />
          <Link to="/">
            <img className={css.pageClose} src={X} alt="" />
          </Link>
          <button
            type="submit"
            value="Submit"
            className="button separateButton"
          >
            Submit changes
          </button>
        </form>
      </>
    );
  };

  const renderEmptyState = () => {
    return (
      <div className={css.emptyState}>
        <h2>
          Goal with ID <em>{goalId}</em> was not found
        </h2>
      </div>
    );
  };

  return (
    <>
      <div className={css.wrapper}>
        {goal ? renderGoalSeparatePage() : renderEmptyState()}
      </div>
      <Link to="/">
        <img className={css.pageClose} src={X} alt="" />
      </Link>
    </>
  );
};

export default GoalSeparatePage;

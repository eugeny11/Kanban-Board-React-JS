import React, { useState } from "react";

const AddGoalsToBacklog = (props) => {
  const { formSubmit, isFormVisible, setFormVisible, handleAddNewClick } =
    props;

  const [values, setValues] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      formSubmit(values.title, values.desc);
      setValues({ title: "", desc: "" });
      setFormVisible(false);
    } else {
      alert("Enter name of goal");
      setFormVisible(false);
    }
  };

  if (isFormVisible) {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="taskTitle"
          name="title"
          type="text"
          placeholder="Enter goal title"
          onChange={handleChange}
          value={values.title}
        />
        <input
          className="input"
          id="taskDescription"
          name="desc"
          type="text"
          placeholder="Enter goal description"
          value={values.desc}
          onChange={handleChange}
        />
        <button className="button submit" type="submit">
          Submit
        </button>
      </form>
    );
  }

  return (
    <>
      <button className="button add-goal-button" onClick={handleAddNewClick}>
        Add goal
      </button>
    </>
  );
};

export default AddGoalsToBacklog;

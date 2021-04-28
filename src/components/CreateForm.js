import React from "react";

export const CreateForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="create-employee-form">
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="create-employee-details"
      />
      <input
        type="text"
        placeholder="Positon"
        name="position"
        className="create-employee-details"
      />
      <input
        type="text"
        placeholder="Salary"
        name="salary"
        className="create-employee-details"
      />
      <input type="submit" value="Save" />
    </form>
  );
};

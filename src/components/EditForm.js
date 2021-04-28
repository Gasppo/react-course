import React from "react";

export const EditForm = ({ onSubmit, employee }) => {
  return (
    <form onSubmit={onSubmit} className="create-employee-form">
      <input
        type="text"
        defaultValue={employee.name}
        name="name"
        className="create-employee-details"
      />
      <input
        type="text"
        defaultValue={employee.position}
        name="position"
        className="create-employee-details"
      />
      <input
        type="text"
        defaultValue={employee.salary}
        name="salary"
        className="create-employee-details"
      />
      <input type="submit" value="Save" />
    </form>
  );
};

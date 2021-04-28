import React from "react";
import { CustomStyledLi } from "./components/CustomStyles";

export const EmployeeItem = ({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}) => {
  return (
    <div>
      <CustomStyledLi key={employee.id} className="list-employees">
        <div className="employee-details">
          <p>{employee.name}</p>
          <p>{employee.position}</p>
          <p>{employee.salary}</p>
        </div>
        <RemoveButton onClick={() => onDeleteEmployee(employee)}>
          Delete
        </RemoveButton>
        <button onClick={() => onEditEmployee(employee)}>Edit </button>
      </CustomStyledLi>
    </div>
  );
};

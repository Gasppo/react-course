import React from "react";
import {
  CustomStyledLi,
  EditButton,
  RemoveButton,
} from "./components/CustomStyles";

export const EmployeeItem = ({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}) => {
  return (
    <div>
      <CustomStyledLi key={employee.id} className="employees-list-item">
        <div className="employee-details">
          <p>{employee.name}</p>
          <p>{employee.position}</p>
          <p>{employee.salary}</p>
        </div>
        <div className="list-buttons">
          <RemoveButton onClick={() => onDeleteEmployee(employee)} />
          <EditButton onClick={() => onEditEmployee(employee)} />
        </div>
      </CustomStyledLi>
    </div>
  );
};

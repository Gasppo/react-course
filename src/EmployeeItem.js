import React from "react";
import styled from "styled-components";
import removeButton from "./icons/cancel.svg";

const RemoveButton = styled.button`
  padding-left: 20px;
  align-self: center;
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-image: url("${removeButton}");
  background-size: 100% 100%;
  border: 0;
  color: black;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
`;

const size = {
  desktopL: "600px",
};
const device = {
  desktopL: `(min-width: ${size.desktopL})`,
};
const StyledLi = ({ className, children }) => (
  <li className={className}>{children}</li>
);

const CustomStyledLi = styled(StyledLi)`
  poadding: 20px;
  background: white;
  display: flex;
  @media ${device.desktopL} {
    margin: 20px;
    border: 1px solid #d5d8df;
    border-radius: 4px;
  }
`;

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

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { EditForm } from "./components/EditForm";

class EmployeeEdit extends Component {
  componentWillMount() {
    this.setState({
      ...this.props.location.state,
      redirect: false,
    });
    console.log(this.state);
  }

  getUpdatedEmployeeInfo = (event) => {
    return {
      id: this.state.editedEmployee.id,
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value,
    };
  };

  updateEmployees = (employeesList, updatedEmployee) => {
    return employeesList.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let updatedEmployee = this.getUpdatedEmployeeInfo(event);
    let updatedEmployees = this.updateEmployees(
      this.state.employees,
      updatedEmployee
    );
    this.setState({
      ...this.state,
      employees: updatedEmployees,
      redirect: true,
    });
  };

  render() {
    const { redirect, editedEmployee } = this.state;
    return redirect ? (
      <Redirect to={{ pathname: "/", state: this.state }} />
    ) : (
      <div>
        <EditForm onSubmit={this.handleSubmit} employee={editedEmployee} />
        <Link to={{ pathname: "/", state: this.state }}>Back</Link>
      </div>
    );
  }
}

export default EmployeeEdit;

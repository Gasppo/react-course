import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { EmployeeItem } from "./EmployeeItem";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Luke",
      position: "dev",
      salary: 1000,
    },
    {
      id: 2,
      name: "David",
      position: "sales",
      salary: 5000,
    },
    {
      id: 3,
      name: "David",
      position: "CEO",
      salary: 50000000,
    },
  ],
  nextId: 4,
};

export default class Home extends Component {
  componentWillMount = () => {
    let newState = this.props.location.state
      ? this.props.location.state
      : initialState;
    this.setState(() => ({
      ...newState,
      query: "",
      redirectEdit: false,
    }));
  };

  componentDidUpdate() {
    console.log("updated");
  }

  removeEmployee = (employee) => {
    this.setState((state) => ({
      employees: state.employees.filter((c) => c.id !== employee.id),
    }));
  };

  editEmployee = (employee) => {
    this.setState(() => ({
      redirectEdit: true,
      editedEmployee: employee,
    }));
  };

  handleSearch = (q) => {
    this.setState({ query: q.target.value });
  };

  getFilteredEmployees = () => {
    return this.state.employees.filter((employee) =>
      JSON.stringify(employee)
        .toLowerCase()
        .includes(this.state.query.toLowerCase())
    );
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <input onChange={this.handleSearch}></input>
        <Link to={{ pathname: "/add", state: this.state }}> Add Employee</Link>
        <ol className="employees-list">
          {this.getFilteredEmployees().map((employee) => (
            <EmployeeItem
              employee={employee}
              onDeleteEmployee={this.removeEmployee}
              onEditEmployee={this.editEmployee}
            />
          ))}
        </ol>
        {this.state.redirectEdit && (
          <Redirect
            to={{
              pathname: `/edit/${this.state.editedEmployee.id}`,
              state: this.state,
            }}
          />
        )}
      </div>
    );
  }
}
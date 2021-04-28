import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { EmployeeItem } from "./EmployeeItem";

const initialState = {
  employees: [],
  nextId: 4,
};

export default class Home extends Component {
  componentWillMount = async () => {
    let newState = this.props.location.state
      ? this.props.location.state
      : initialState;
    this.setState(() => ({
      ...newState,
      query: "",
      redirectEdit: false,
      loading: false,
      error: false,
    }));
    if (!this.props.location.state) this.getEmployees();
  };

  getEmployees = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/employees",
    })
      .then((res) => {
        this.setState(() => ({ employees: [...new Set([...res.data])] }));
        this.setState(() => ({ loading: false }));
        console.log(res);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        this.setState(() => ({ error: true }));
      });
  };

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
    const { loading } = this.state;
    return (
      <div className="list-employees">
        <div className="list-employees-top"></div>
        <div className="showing-employees">
          <div className="list-employees-toolbar">
            <input onChange={this.handleSearch} />
            <Link to={{ pathname: "/add", state: this.state }}>
              Add Employee
            </Link>
          </div>
          {loading && <div>Loading...</div>}
          {!loading && (
            <ol className="employee-list">
              {this.getFilteredEmployees().map((employee) => (
                <EmployeeItem
                  employee={employee}
                  onDeleteEmployee={this.removeEmployee}
                  onEditEmployee={this.editEmployee}
                />
              ))}
            </ol>
          )}
        </div>
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

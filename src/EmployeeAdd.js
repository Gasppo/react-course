import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { CreateForm } from "./components/CreateForm";

class EmployeeAdd extends Component {
  componentWillMount() {
    this.setState({
      ...this.props.location.state,
      redirect: false,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let employee = {
      id: this.state.nextId,
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value,
    };
    this.setState({
      employees: this.state.employees.concat(employee),
      nextId: this.state.nextId + 1,
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    return redirect ? (
      <Redirect to={{ pathname: "/", state: this.state }} />
    ) : (
      <CreateForm onSubmit={this.handleSubmit} />
    );
  }
}

export default EmployeeAdd;

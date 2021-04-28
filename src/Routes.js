import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import EmployeeAdd from "./EmployeeAdd";
import EmployeeEdit from "./EmployeeEdit";
import Home from "./Home";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={EmployeeAdd} path="/add" />
        <Route component={EmployeeEdit} path="/edit/:id" />
      </BrowserRouter>
    );
  }
}

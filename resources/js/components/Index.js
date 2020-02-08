import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inventory from "./inventory/Inventory";
import Employee from "./employee/Employee";
import EmployeeForm from "./employee/EmployeeForm";
import InventoryState from "../context/inventory/InventoryState";
import EmployeeState from "../context/employee/EmployeeState";
export default class Index extends Component {
    render() {
        return (
            <InventoryState>
                <EmployeeState>
                    <Router>
                        <div className="main">
                            <div className="main__navbar">
                                <Navbar />
                            </div>
                            <div className="main__content">
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={Inventory}
                                    />
                                    <Route
                                        exact
                                        path="/employees"
                                        component={Employee}
                                    />
                                    <Route
                                        exact
                                        path="/employeeForm"
                                        component={EmployeeForm}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </EmployeeState>
            </InventoryState>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

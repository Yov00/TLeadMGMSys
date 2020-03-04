import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inventory from "./inventory/Inventory";
import Employee from "./employee/Employee";
import SingleEmployeeView from "./employee/SingleEmployeeView";
import EmployeeForm from "./employee/EmployeeForm";
import ArrivedItems from "./inventory/ArrivedItems";
import InventoryState from "../context/inventory/InventoryState";
import EmployeeState from "../context/employee/EmployeeState";
import BalanceState from "../context/balance/BalanceState";
export default class Index extends Component {
    render() {
        return (
            <InventoryState>
                <BalanceState>
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
                                            path="/arrivedItems"
                                            component={ArrivedItems}
                                        />
                                        <Route
                                            exact
                                            path="/employees"
                                            component={Employee}
                                        />
                                        <Route
                                            exact
                                            path="/employees/:id"
                                            component={SingleEmployeeView}
                                        />
                                        <Route
                                            exact
                                            path="/employeeForm"
                                            component={EmployeeForm}
                                        />
                                        <Route
                                            exact
                                            path="/employeeForm/edit/:id"
                                            component={EmployeeForm}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </EmployeeState>
                </BalanceState>
            </InventoryState>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

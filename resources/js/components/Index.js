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
import EditEmployee from "../components/employee/EditEmployee";
import MultiSport from "../components/multisport/MultiSport";
import MultiSportState from "../context/multisport/MultisportState";

export default class Index extends Component {
    render() {
        return (
            <InventoryState>
                <BalanceState>
                    <EmployeeState>
                    <MultiSportState>
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
                                            path="/employees/:id/edit"
                                            component={EditEmployee}
                                        />
                                          <Route
                                            exact
                                            path="/multi-sport"
                                            component={MultiSport}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                        </MultiSportState>
                    </EmployeeState>
                </BalanceState>
            </InventoryState>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

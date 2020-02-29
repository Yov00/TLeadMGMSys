import React, { useReducer } from "react";
import EmployeeContext from "./employeeContext";
import EmployeeReducer from "./empoyeeReducer";
import axios from "axios";

import { GET_EMPLOYEES, ADD_EMPLOYEE, GET_TOKENS } from "../../Types";
const EmployeeState = props => {
    const initialState = {
        employees: [],
        tokens: [],
        loading: true
    };
    const [state, dispatch] = useReducer(EmployeeReducer, initialState);

    // Get All Eployees
    const fetchAllEmployees = async () => {
        try {
            const res = await axios.get("/api/employees");
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });
        } catch (err) {
            console.log("err get employees");
        }
    };
    // Get Tokens
    const fetchTokens = async () => {
        try {
            const res = await axios.get("api/tokens");
            dispatch({
                type: GET_TOKENS,
                payload: res.data
            });
        } catch (err) {
            console.log(err.response);
        }
    };
    // Create New Employee
    const addEmployee = async employee => {
        console.log(employee.image);
        const config = {
            "Content-Type": "application/json"
        };
        try {
            const res = await axios.post(
                "/api/employees/create",
                employee,
                config
            );
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            });
        } catch (err) {
            console.log(JSON.stringify(err.response));
        }
    };
    return (
        <EmployeeContext.Provider
            value={{
                employees: state.employees,
                loading: state.loading,
                tokens: state.tokens,
                fetchAllEmployees,
                fetchTokens,
                addEmployee
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeState;

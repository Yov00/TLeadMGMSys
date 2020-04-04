import React, { useReducer } from "react";
import EmployeeContext from "./employeeContext";
import EmployeeReducer from "./empoyeeReducer";
import axios from "axios";

import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    GET_TOKENS,
    GET_SINGLE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from "../../Types";

const EmployeeState = props => {
    const initialState = {
        employees: [],
        singleEmployee: {},
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
            const res = await axios.get("/api/tokens");
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
        console.log(employee)
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

    // Update existing employe
    const udpateEmployee = async (employee,id) => {
        console.log(employee);
        const config = {
            "Content-Type": "application/json"
        };

        try {
            const res = await axios.post(
                "/api/employees/"+id+"/update",
                employee,
                config
            );
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: res.data
            });
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    const fetchSingleEmployee = async id => {
        try {
            const res = await axios.get(`/api/employees/${id}`);

            dispatch({
                type: GET_SINGLE_EMPLOYEE,
                payload: res.data
            });
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <EmployeeContext.Provider
            value={{
                employees: state.employees,
                singleEmployee: state.singleEmployee,
                loading: state.loading,
                tokens: state.tokens,
                fetchAllEmployees,
                fetchSingleEmployee,
                fetchTokens,
                addEmployee,
                udpateEmployee
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeState;
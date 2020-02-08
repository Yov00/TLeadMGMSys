import React, { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeContext from "../../context/employee/employeeContext";

const Employee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees, fetchAllEmployees } = employeeContext;
    useEffect(() => {
        fetchAllEmployees();
        // eslint-disable-next-line
    }, []);

    const allEmployees =
        employees.length > 0 ? (
            employees.map((employee, index) => {
                return <EmployeeItem employee={employee} key={index} />;
            })
        ) : (
            <h3>There are no employees...</h3>
        );
    return (
        <div className="employeeWrapepr ease_in">
            <h1
                className="ease_in"
                style={{
                    fontSize: "40px",
                    display: "inline-block",
                    width: "100%"
                }}
            >
                Employees
            </h1>

            {allEmployees}
        </div>
    );
};

export default Employee;

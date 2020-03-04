import React, { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeContext from "../../context/employee/employeeContext";
import Spinner from "../layout/Spinner";

const Employee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees, fetchAllEmployees, loading } = employeeContext;

    useEffect(() => {
        setTimeout(() => fetchAllEmployees(), 1000);

        // eslint-disable-next-line
    }, []);

    const allEmployees =
        employees.length > 0 ? (
            employees.map((employee, index) => {
                return <EmployeeItem employee={employee} key={index} />;
            })
        ) : (
            <h3 className="employeeWrapepr">There are no employees...</h3>
        );
    if (loading)
        return (
            <div className="employees ">
                <Spinner />
            </div>
        );

    return (
        <div className="employees ease_in">
            <h1 style={{ color:'#333',fontSize:'40px' }}>EMPLOYEES</h1>
            <div className="employeeWrapepr">{allEmployees}</div>
        </div>
    );
};

export default Employee;

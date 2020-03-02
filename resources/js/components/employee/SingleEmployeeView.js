import React, { useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";

const SingleEmployeeView = props => {
    const employeeContext = useContext(EmployeeContext);
    const { fetchSingleEmployee, singleEmployee } = employeeContext;

    useEffect(() => {
        const userID = props.match.params.id;
        fetchSingleEmployee(userID);
    }, []);
    return (
        <div>
            {console.log(singleEmployee)}
            Hi
        </div>
    );
};

export default SingleEmployeeView;

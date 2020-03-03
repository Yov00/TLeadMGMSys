import React from "react";
import { Link } from "react-router-dom";

const EmployeeItem = ({ employee }) => {
    const {
        id,
        first_name,
        last_name,
        c_number,
        job_title,
        image,
        token
    } = employee;
    return (
        <div className="card">
            {console.log("storage/" + image)}
            <div className="card__header">
                {image ? (
                    <img className="employee_image" src={"storage/" + image} />
                ) : (
                    <img src="https://www.journalofaccountancy.com/content/dam/jofa/issues/2015/jul/shaylynn-fuller.jpg" />
                )}
            </div>
            <div className="card__body">
                <p>
                    <b>{first_name + " " + last_name}</b>
                </p>
                <p>{job_title}</p>
                <p>
                    <b>C Number:</b> {c_number}
                </p>
                <p>
                    <b>Token:</b> {token.token_number}
                </p>
            </div>
            <div className="card__footer">
                <Link to={`/employees/${id}`}>
                    <button>View more</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeItem;

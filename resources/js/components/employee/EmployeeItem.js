import React from "react";

const EmployeeItem = ({ employee }) => {
    const { first_name, last_name, c_number, job_title } = employee;
    return (
        <div className="card">
            <div className="card__header">
                <img src="https://www.journalofaccountancy.com/content/dam/jofa/issues/2015/jul/shaylynn-fuller.jpg" />
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
                    <b>Token:</b> 15
                </p>
            </div>
            <div className="card__footer">
                <button>Manage</button>
            </div>
        </div>
    );
};

export default EmployeeItem;

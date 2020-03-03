import React, { useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";

const SingleEmployeeView = props => {
    const employeeContext = useContext(EmployeeContext);
    const { fetchSingleEmployee, singleEmployee } = employeeContext;

    const {
        id,
        first_name,
        last_name,
        c_number,
        job_title,
        image,
        token,
        phone
    } = singleEmployee;

    useEffect(() => {
        const userID = props.match.params.id;
        fetchSingleEmployee(userID);
    }, []);
    return (
        <div className="singleEmployee">
            <div className="singleEmployee_body">
                <div className="singleEmployee_left">
                    <div className="singleEmployee_image_container">
                        {image ? (
                            <img
                                className="singleEmployee_image"
                                src={"../../storage/" + image}
                            />
                        ) : (
                            <img src="https://www.journalofaccountancy.com/content/dam/jofa/issues/2015/jul/shaylynn-fuller.jpg" />
                        )}
                    </div>
                </div>
                <div className="singleEmployee__right">
                    <div className="singleEmployee_information">
                        <div className="singleEmployee_fullName">{`${first_name}, ${last_name}`}</div>
                        <div>{`${job_title}`}</div>
                        <div>{`C Number: ${c_number}`}</div>
                        <div>{`Token:${
                            token ? token.token_number : "no token"
                        }`}</div>

                        <div>{`Phone: ${phone}`}</div>
                    </div>
                </div>
            </div>
            <div className="singleEmployee_footer">
                <div className="singleEmployee_email">
                    {`${first_name}.${last_name}@outcons.com`}
                </div>
                <div className="singleEmployee_socialNetworks">
                    <span>
                        <i className="fab fa-facebook-square"></i>
                    </span>
                    <span>
                        <i className="fab fa-facebook-square"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleEmployeeView;

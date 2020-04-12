import React, { useState, useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const EmployeeForm = props => {
    const employeeContext = useContext(EmployeeContext);
    const { addEmployee, fetchTokens, tokens, fetchAllEmployees } = employeeContext;

    const [userCreated, setUserCreated] = useState(false);
    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        c_number: "",
        image: {},
        job_title: "Administrator",
        phone_number: "",
        token_id: 1
    });

    const {
        first_name,
        last_name,
        c_number,
        phone_number,
        image,
        job_title,
        token_id
    } = employee;

    useEffect(() => {
        fetchTokens();
    }, []);
    // Adding file to the state
    const imageUploadHandler = e => {
        const file = e.target.files[0];
        setEmployee({ ...employee, image: file });
    };

    const onChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        const employeeInfo = new FormData();

        employeeInfo.append("first_name", first_name);
        employeeInfo.append("last_name", last_name);
        employeeInfo.append("c_number", c_number);
        employeeInfo.append("image", image);
        employeeInfo.append("job_title", job_title);
        employeeInfo.append("phone_number", phone_number);
        employeeInfo.append("token_id", token_id);
        addEmployee(employeeInfo);

        setEmployee({
            first_name: "",
            last_name: "",
            c_number: "",
            image: {},
            job_title: "Administrator",
            phone_number: "",
            token_id: 1
        });

        setUserCreated(true);
    };

    if (userCreated) {
        // redirect 
        window.location.href = '/employees';
    }
    return (
        <form
            onSubmit={onSubmit}
            className="employeeForm ease_in"
            encType="multipart/form-data"
        >
            {console.log(employee.token_id)}
            <div className="form__group" style={{ width: "100%" }}>
                <h1>Create New Employee</h1>
            </div>

            <div className="form__group" style={{ width: "100%" }}>
                <label htmlFor="first_name">First Name</label>
                <input
                    onChange={onChange}
                    name="first_name"
                    type="text"
                    value={first_name}
                    required
                />
            </div>
            <div className="form__group" style={{ width: "100%" }}>
                <label htmlFor="last_name">Last Name</label>
                <input
                    onChange={onChange}
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={last_name}
                    required
                />
            </div>

            <div>
                <div className="form__group" style={{ width: "100%" }}>
                    <label htmlFor="c_number">C Number</label>
                    <input
                        onChange={onChange}
                        id="c_number"
                        name="c_number"
                        type="text"
                        value={c_number}
                    />
                </div>
            </div>

            <div className="form__group" style={{ width: "100%" }}>
                <label htmlFor="image">Add Image</label>
                <input
                    name="image"
                    id="image"
                    type="file"
                    onChange={e => imageUploadHandler(e)}
                />
            </div>

            <div>
                <div className="form__group" style={{ width: "100%" }}>
                    <label htmlFor="job_title">Job title</label>
                    <select
                        onChange={onChange}
                        id="job_title"
                        name="job_title"
                        value={job_title}
                    >
                        <option value="Administrator">Administrator</option>
                        <option value="Developer">Developer</option>
                        <option value="Cleaner">Cleaner</option>
                        <option value="Supervisor">Supervisor</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="form__group" style={{ width: "100%" }}>
                    <label htmlFor="token_number">Token number</label>
                    <select
                        onChange={onChange}
                        id="token_id"
                        name="token_id"
                        value={token_id}
                    >
                        {tokens.map(token => (
                            <option key={token.id} value={token.id}>
                                {token.token_number}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <div className="form__group" style={{ width: "100%" }}>
                    <label htmlFor="phone_number">Phone number</label>
                    <input
                        onChange={onChange}
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        value={phone_number}
                    />
                </div>
            </div>

            <div>
                <div className="form__group" style={{ width: "100%" }}>
                    <input
                        className="employeeForm_button"
                        type="submit"
                        value="Add Employee"
                    />


                </div>
            </div>
        </form>
    );
};

export default EmployeeForm;

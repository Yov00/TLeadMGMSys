import React, { useState, useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";

const EmployeeForm = () => {
    const employeeContext = useContext(EmployeeContext);
    const { addEmployee, fetchTokens, tokens } = employeeContext;

    const [employee, setEmployee] = useState({
        first_name: "",
        last_name: "",
        c_number: "",
        image: {},
        job_title: "",
        phone_number: "",
        token_id: ""
    });

    const { first_name, last_name, c_number, phone_number, image } = employee;

    useEffect(() => {
        fetchTokens();
    }, []);
    // Adding file to the state
    const imageUploadHandler = e => {
        setEmployee({ ...employee, image: e.target.files[0] });

        console.warn(employee.image);
    };

    const onChange = e =>
        setEmployee({ ...employee, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        addEmployee(employee);

        setEmployee({
            first_name: "",
            last_name: "",
            c_number: "",
            image: {},
            job_title: "",
            phone_number: "",
            token_id: ""
        });
    };
    return (
        <form
            onSubmit={onSubmit}
            className="employeeForm ease_in"
            encType="multipart/form-data"
        >
            <div className="form__group">
                <h1>Add Employee</h1>
            </div>

            <div className="d__flex">
                <div className="form__group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        onChange={onChange}
                        name="first_name"
                        type="text"
                        value={first_name}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        onChange={onChange}
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={last_name}
                    />
                </div>
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
                    <select onChange={onChange} id="job_title" name="job_title">
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
                    <select onChange={onChange} id="token_id" name="token_id">
                        {tokens.map(token => (
                            <option value={token.token_number}>
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
                    <input type="submit" value="Add Employee" />
                </div>
            </div>
        </form>
    );
};

export default EmployeeForm;

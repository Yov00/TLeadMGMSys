import React, { useState, useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
const EmployeeForm = props => {
    const employeeContext = useContext(EmployeeContext);
    const {
        addEmployee,
        udpateEmployee,
        fetchTokens,
        tokens,
        fetchSingleEmployee,
        singleEmployee,
        loading
    } = employeeContext;

    const [userUpdated, setUserUpdated] = useState(false);
    const [displayedImage, setDisplayedImage] = useState(
        "/storage/" + singleEmployee.image
    );

    const [employee, setEmployee] = useState({
        id: singleEmployee.id,
        first_name: singleEmployee.first_name,
        last_name: singleEmployee.last_name,
        c_number: singleEmployee.c_number,
        image: singleEmployee.image,
        job_title: singleEmployee.job_title,
        phone_number: singleEmployee.phone_number,
        token_id: singleEmployee.token.id
    });

    const {
        id,
        first_name,
        last_name,
        c_number,
        phone_number,
        image,
        job_title,
        token_id
    } = employee;

    const {
        sE_first_name,
        sE_last_name,
        sE_c_number,
        sE_phone_number,
        sE_image,
        sE_job_title,
        sE_token_id
    } = singleEmployee;

    useEffect(() => {
        const userID = props.match.params.id;
        fetchSingleEmployee(userID);
        fetchTokens();
    }, []);
    // Adding file to the state
    const imageUploadHandler = e => {
        const file = e.target.files[0];
        setEmployee({ ...employee, image: file });

        imageDisplayHandler(e);
    };

    const onChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };
    function imageDisplayHandler(image) {
        var file = image.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;

            setDisplayedImage(image.src);
        };
        reader.readAsDataURL(file);
    }

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

        udpateEmployee(employeeInfo, id);
        setUserUpdated(true);
    };
    if (loading) {
        return <Spinner />;
    }

    if (userUpdated) {
        return <Redirect to="/employees" />;
    }
    return (
        <form
            onSubmit={onSubmit}
            className="employeeForm ease_in"
            encType="multipart/form-data"
        >
            <div className="form__group" style={{ width: "100%" }}>
                <h1>Edit: {first_name + ", " + last_name}</h1>
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
                <label>Avatar:</label>
                <img
                    className="edit_employee_image"
                    src={displayedImage}
                    alt=""
                />
            </div>
            <div className="form__group" style={{ width: "100%" }}>
                <label htmlFor="image">Update Image</label>
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
                        multiple={false}
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
                        type="submit"
                        className="employeeForm_button"
                        value="Update Employee"
                        style={{
                            backgroundColor: "#333",
                            color: "white",
                            cursor: "pointer"
                        }}
                    />
                </div>
            </div>
        </form>
    );
};

export default EmployeeForm;

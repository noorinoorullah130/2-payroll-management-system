import React, { useEffect, useState } from "react";
import "./Form.css";
import SuccessPopUp from "../SuccessPopUp/SuccessPopUp";

const Form = ({ setEmployees, selectedEmployee, isEditing, setIsEditing }) => {
    const [name, setName] = useState("");
    const [fName, setFname] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [grade, setGrade] = useState("");
    const [account, setAccount] = useState("");
    const [image, setImage] = useState(null);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    useEffect(() => {
        if (isEditing && selectedEmployee) {
            setName(selectedEmployee.name);
            setFname(selectedEmployee.fName);
            setJobTitle(selectedEmployee.jobTitle);
            setGrade(selectedEmployee.grade);
            setAccount(selectedEmployee.account);
            setImage(selectedEmployee.image);
        }
    }, [isEditing, selectedEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedEmployee = {
            id: isEditing ? selectedEmployee.id : new Date(),
            name,
            fName,
            jobTitle,
            grade,
            account,
            image,
            saveDate: new Date(),
        };

        let storedEmployees =
            JSON.parse(localStorage.getItem("employees")) || [];

        if (isEditing) {
            storedEmployees = storedEmployees.map((emp) =>
                emp.id === selectedEmployee.id ? updatedEmployee : emp
            );
        } else {
            storedEmployees.push(updatedEmployee);
        }

        localStorage.setItem("employees", JSON.stringify(storedEmployees));

        console.log(storedEmployees);

        setEmployees(storedEmployees);

        setIsEditing(false);

        setName("");
        setFname("");
        setJobTitle("");
        setGrade("");
        setAccount("");
        setImage(null);

        handleSuccessMsg();
    };

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
            };
        }
    };

    const handleSuccessMsg = () => {
        setShowSuccessMsg(true);
        setTimeout(() => {
            setShowSuccessMsg(false);
        }, 3000);
    };

    return (
        <div className="addNewEmployee">
            <form className="addEmployeeForm" id="form" onSubmit={handleSubmit}>
                <h2>{isEditing ? "Edit Employee" : "Add New Employee"}</h2>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee name"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Father Name:</label>
                    <input
                        type="text"
                        value={fName}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter Father name"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Enter job title"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Grade:</label>
                    <input
                        type="Number"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        min="1"
                        max="6"
                        placeholder="Enter employee grade"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Account Number:</label>
                    <input
                        type="Number"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        placeholder="Enter account number"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        onChange={(e) => handleUploadImage(e)}
                        required
                    />
                </div>
                <button type="submit">Add Employee</button>
            </form>

            {showSuccessMsg && <SuccessPopUp message="Successfully Added!" />}
        </div>
    );
};

export default Form;

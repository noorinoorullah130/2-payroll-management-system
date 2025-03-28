import React from "react";
import "./EmployeeDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import calculateSalary from "../../utils/calculateSalary";

const EmployeeDetails = () => {
    const { id } = useParams();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find((emp) => emp.id.toString() === id);
    console.log(employee);

    const navigate = useNavigate();

    return (
        <div className="employee-details">
            <div className="employee-details-header">
                <h1>Employee Details</h1>
                <button onClick={() => navigate("/employee")}>
                    Back to Employee List
                </button>
            </div>
            <div className="container">
                <h1>Employee Info</h1>
                <div className="employee-information">
                    <div className="left-side">
                        <h2>ID: {employee.id}</h2>
                        <h2>Name: {employee.name}</h2>
                        <h2>Father Name: {employee.fName}</h2>
                        <h2>Job Title: {employee.jobTitle}</h2>
                        <h2>Grade: {employee.grade}</h2>
                        <h2>Salary: {calculateSalary(employee.grade).toLocaleString()}</h2>
                        <h2>
                            Save Date:{" "}
                            {new Date(employee.saveDate).toLocaleString()}
                        </h2>
                    </div>
                    <div className="right-side">
                        <img src={employee.image} className="employee-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;

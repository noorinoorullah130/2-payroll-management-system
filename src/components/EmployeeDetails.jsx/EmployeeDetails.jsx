import React from "react";
import "./EmployeeDetails.css";
import EmployeeImage from "../../assets/profile.jpg";

const EmployeeDetails = () => {
    return (
        <div className="employee-details">
            <div className="employee-details-header">
                <h1>Employee Details</h1>
                <button>Back to Employee List</button>
            </div>
            <div className="container">
                <h1>Employee Info</h1>
                <div className="employee-information">
                    <div className="left-side">
                        <h2>ID: 1234567890</h2>
                        <h2>Name: Noorullah</h2>
                        <h2>Father Name: Suhail Badshah</h2>
                        <h2>Job Title: Manager</h2>
                        <h2>Grade: 4</h2>
                        <h2>Salary: 24,125</h2>
                        <h2>Save Date: 01:45 PM - 02-18/2025</h2>
                    </div>
                    <div className="right-side">
                        <img src={EmployeeImage} className="employee-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;

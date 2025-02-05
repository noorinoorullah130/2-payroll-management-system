
import React from 'react';
import "./Form.css";

const AddNewEmployee = () => {
    
    return (
        <div className="addNewEmployee">
            <form className="addEmployeeForm" id="form">
                <h2>Add New Employee</h2>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter employee name" required />
                </div>
                <div className="input-group">
                    <label htmlFor="fname">Father Name:</label>
                    <input type="text" id="fname" placeholder="Enter Father name" required />
                </div>
                <div className="input-group">
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" placeholder="Enter job title" required />

                </div>
                <div className="input-group">
                    <label htmlFor="grade">Grade:</label>
                    <input type="text" id="grade" min="1" max="6" placeholder="Enter employee grade" required />
                </div>
                <div className="input-group">
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input type="text" id="accountNumber" placeholder="Enter account number" required />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}

export default AddNewEmployee

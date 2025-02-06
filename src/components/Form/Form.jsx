
import React, { useEffect, useState } from 'react';
import "./Form.css";

const Form = ({setEmployees, selectedEmployee, isEditing, setIsEditing}) => {

    const [name, setName] = useState("");
    const [fName, setFname] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [grade, setGrade] = useState("");
    const [account, setAccount] = useState("");

    useEffect(() => {
        if(isEditing && selectedEmployee) {
            setName(selectedEmployee.name);
            setFname(selectedEmployee.fName);
            setJobTitle(selectedEmployee.jobTitle);
            setGrade(selectedEmployee.grade);
            setAccount(selectedEmployee.account);
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
            account
        }

        let storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

        if(isEditing) {
            storedEmployees = storedEmployees.map(emp => 
                emp.id === selectedEmployee.id ? updatedEmployee : emp
            );
        }
        else {
            storedEmployees.push(updatedEmployee)
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
    }

    
    return (
        <div className="addNewEmployee">
            <form className="addEmployeeForm" id="form" onSubmit={handleSubmit}>
                <h2>
                    {
                        isEditing ? "Edit Employee" : "Add New Employee"
                    }
                </h2>
                <div className="input-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter employee name" required />
                </div>
                <div className="input-group">
                    <label>Father Name:</label>
                    <input type="text" value={fName} onChange={(e) => setFname(e.target.value)} placeholder="Enter Father name" required />
                </div>
                <div className="input-group">
                    <label>Job Title:</label>
                    <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" required />

                </div>
                <div className="input-group">
                    <label>Grade:</label>
                    <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} min="1" max="6" placeholder="Enter employee grade" required />
                </div>
                <div className="input-group">
                    <label>Account Number:</label>
                    <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} placeholder="Enter account number" required />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}

export default Form

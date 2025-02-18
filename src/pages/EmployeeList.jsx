import React, { useEffect, useState } from "react";
import "./CSS/Employee.css";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedEmployees =
            JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
    }, []);

    const toggleForm = () => {
        setShowForm(!showForm);
        setIsEditing(false);
    };

    const handleDelete = (index) => {
        const storedEmployees = employees.filter((_, i) => index !== i);
        localStorage.setItem("employees", JSON.stringify(storedEmployees));
        setEmployees(storedEmployees);
    };

    const handleEdit = (emp) => {
        setSelectedEmployee(emp);
        setIsEditing(true);
        setShowForm(true);
    };

    const navigate = useNavigate();

    return (
        <div className="employee">
            <div className="emp-header">
                <h1>{showForm ? "Add New Employee Form" : "Employee List"}</h1>
                <div>
                    <button onClick={() => toggleForm()}>
                        {showForm ? "Employee List" : "Add New Employee"}
                    </button>
                    <button
                        onClick={() => navigate("/attendancereportform")}
                        nav
                    >
                        Generate Attendance Report
                    </button>
                </div>
            </div>

            {showForm ? (
                <Form
                    setEmployees={setEmployees}
                    selectedEmployee={selectedEmployee}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <div className="main-content">
                    <table>
                        <thead>
                            <tr>
                                <th>No #</th>
                                <th>Account Number</th>
                                <th>Name</th>
                                <th>Father Name</th>
                                <th>Job Title</th>
                                <th>Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.length > 0 ? (
                                employees.map((emp, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{emp.account}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.fName}</td>
                                        <td>{emp.jobTitle}</td>
                                        <td>{emp.grade}</td>
                                        <td className="action-btns">
                                            <button
                                                onClick={() =>
                                                    navigate("/employeedetails")
                                                }
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleEdit(emp)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleDelete(i);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={"7"}>No employee found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EmployeeList;

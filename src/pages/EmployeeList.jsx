
import React, { useState } from 'react';
import "./CSS/Employee.css";
import Form from '../components/Form/Form';

const Employee = () => {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            account: 75382538,
            name: "Noorullah",
            fatherName: "Suhailbad Shah",
            grade: "4th",
        }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="employee">
            <div className="emp-header">
                <h1>Employee List</h1>
                <div>
                    <button onClick={() => toggleForm()}>Add New Employee</button>
                    <button>Generate Attendance Report</button>
                </div>
            </div>

            {
                showForm ? <Form /> : 
                    <div className="main-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Account #</th>
                                    <th>Name</th>
                                    <th>Father Name</th>
                                    <th>Grade</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((emp, i) => (
                                        <tr key={i}>
                                            <td>{emp.id}</td>
                                            <td>{emp.account}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.fatherName}</td>
                                            <td>{emp.grade}</td>
                                            <td className="action-btns">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> 
            }
        </div>
    )
};

export default Employee

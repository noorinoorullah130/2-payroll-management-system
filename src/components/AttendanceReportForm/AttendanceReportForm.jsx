import React, { useEffect, useState } from "react";
import "./AttendanceReportForm.css";
import { useNavigate } from "react-router-dom";

const AttendanceReportForm = () => {
    const [employees, setEmployees] = useState([]);
    const [empStatus, setEmpStatus] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmployees =
            JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);

        const initialStatus = {};

        storedEmployees.forEach((emp) => {
            initialStatus[emp.id] = {
                presentDays: 30,
                absentDays: "",
                considerations: "",
                selected: false
            };
        });

        setEmpStatus(initialStatus);
    }, []);

    const handleInputChange = (id, field, value) => {
        setEmpStatus((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: value,
            },
        }));
    };

    return (
        <div className="attendance-report-form">
            <div className="report-header">
                <h1>Attendance Report Form</h1>
                <div className="header-input-group">
                    <label htmlFor="month">Select Month:</label>
                    <input type="text" id="month" placeholder="Select Month" />
                </div>
                <div className="header-input-group">
                    <label htmlFor="month">Select Year:</label>
                    <input type="number" id="month" placeholder="Select Year" />
                </div>
                <div className="btns">
                    <button>Save</button>
                    <button onClick={() => navigate("/employee")}>
                        Cancel
                    </button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No #</th>
                        <th>Account #</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Job Title</th>
                        <th className="small-cells">Grade</th>
                        <th className="small-cells">Present Days</th>
                        <th className="small-cells">Absent Days</th>
                        <th>Considerations</th>
                        <th>Selected</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{emp.account}</td>
                            <td>{emp.name}</td>
                            <td>{emp.fName}</td>
                            <td>{emp.jobTitle}</td>
                            <td>{emp.grade}</td>
                            <td>
                                <input
                                    type="number"
                                    value={empStatus[emp.id]?.presentDays || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            emp.id,
                                            "presentDays",
                                            e.target.value
                                        )
                                    }
                                    placeholder="#"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={empStatus[emp.id]?.absentDays || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            emp.id,
                                            "absentDays",
                                            e.target.value
                                        )
                                    }
                                    placeholder="#"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={
                                        empStatus[emp.id]?.considerations || ""
                                    }
                                    onChange={(e) =>
                                        handleInputChange(
                                            emp.id,
                                            "considerations",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Any Considerations"
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    value={
                                        empStatus[emp.id]?.selected || ""
                                    }
                                    onChange={(e) =>
                                        handleInputChange(
                                            emp.id,
                                            "selected",
                                            e.target.value
                                        )
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceReportForm;

import React, { useEffect, useState } from "react";
import "./AttendanceReportForm.css";
import { useNavigate } from "react-router-dom";

const AttendanceReportForm = () => {
    const [employees, setEmployees] = useState([]);
    const [empStatus, setEmpStatus] = useState({});
    const navigate = useNavigate();
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errorMonthMsg, setErrorMonthMsg] = useState(false);
    const [errorYearMsg, setErrorYearMsg] = useState(false);
    const [errorSelectedEmpMsg, setErrorSeletedEmpMsg] = useState(false);
    const [attendanceReports, setAttendanceReports] = useState([]);

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
                selected: false,
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

    const isAnyEmployeeSelected = Object.values(empStatus).some(
        (emp) => emp.selected
    );

    const handleSaveAttendanceReport = () => {
        if (!month) {
            setErrorMonthMsg(true);
        } else if (!year) {
            setErrorYearMsg(true);
            setErrorMonthMsg(false);
        } else if (!isAnyEmployeeSelected) {
            setErrorSeletedEmpMsg(true);
            setErrorYearMsg(false);
        } else {
            setErrorMonthMsg(false);
            setErrorYearMsg(false);
            setErrorSeletedEmpMsg(false);
            setMonth("");
            setYear("");
            console.log(month, year);
            console.log(empStatus);
            console.log(isAnyEmployeeSelected);

            const selectedEmployees = getSelectedEmployees();
            console.log(selectedEmployees);

            const attendanceReportData = {
                month,
                year,
                selectedEmployees,
            };

            console.log(attendanceReportData);

            setAttendanceReports(attendanceReportData);

            localStorage.setItem(
                "attendanceReports",
                JSON.stringify(attendanceReports)
            );

            navigate("/attendancereport");
        }
    };

    const getSelectedEmployees = () => {
        return Object.entries(empStatus)
            .filter(([id, status]) => status.selected)
            .map(([id, status]) => {
                const employee = employees.find((emp) => emp.id === id);

                return {
                    id,
                    name: employee?.name,
                    fatherName: employee?.fName,
                    accountNumber: employee?.account,
                    jobTitle: employee?.jobTitle,
                    grade: employee?.grade,
                    presentDays: status.presentDays,
                    absentDays: status.absentDays,
                    considerations: status.considerations,
                };
            });
    };

    return (
        <div className="attendance-report-form">
            <div className="report-header">
                <h1>Attendance Report Form</h1>
                <div className="header-input-group">
                    <label htmlFor="month">Select Month:</label>
                    <input
                        type="text"
                        id="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        placeholder="Select Month"
                    />
                    {errorMonthMsg && (
                        <p className="error-msg">Please Enter Month</p>
                    )}
                </div>
                <div className="header-input-group">
                    <label htmlFor="year">Select Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Select Year"
                    />
                    {errorYearMsg && (
                        <p className="error-msg">Please Enter Year</p>
                    )}
                </div>
                <div className="btns">
                    <button onClick={handleSaveAttendanceReport}>Save</button>
                    <button onClick={() => navigate("/employee")}>
                        Cancel
                    </button>
                    {errorSelectedEmpMsg && (
                        <p className="error-msg">
                            Please select at least one Employee!
                        </p>
                    )}
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
                                    value={empStatus[emp.id]?.selected || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            emp.id,
                                            "selected",
                                            e.target.checked
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

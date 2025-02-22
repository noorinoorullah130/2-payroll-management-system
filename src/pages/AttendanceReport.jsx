import React, { useEffect, useState } from "react";
import "./CSS/AttendanceReport.css";

const AttendanceReport = () => {
    const [attendanceReports, setAttendanceReports] = useState([]);

    useEffect(() => {
        const storedReports =
            JSON.parse(localStorage.getItem("attendanceReports")) || [];
        setAttendanceReports(storedReports);
        console.log(storedReports);
    }, []);

    console.log(attendanceReports);

    return (
        <div className="attendance-report">
            <h1>Attendance Reports</h1>
            <div className="main-content">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceReports.map((report, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{report.month}</td>
                                <td>{report.year}</td>
                                <td className="action-btns">
                                    <button>View</button>
                                    <button
                                        style={{ backgroundColor: "#f14141" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceReport;

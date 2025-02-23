import React, { useEffect, useState } from "react";
import "./CSS/AttendanceReport.css";
import { useNavigate } from "react-router-dom";

const AttendanceReport = () => {
    const [attendanceReports, setAttendanceReports] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedReports =
            JSON.parse(localStorage.getItem("attendanceReports")) || [];
        setAttendanceReports(storedReports);
        console.log(storedReports);
    }, []);

    const storedReports =
        JSON.parse(localStorage.getItem("attendanceReports")) || [];

    const report = storedReports.find((report, id) => {
        console.log(report);
    });

    const handleView = (id) => {
        navigate(`/attendancereport/${id}`);
    };

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
                                    <button
                                        onClick={() => handleView(report.id)}
                                    >
                                        View
                                    </button>
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

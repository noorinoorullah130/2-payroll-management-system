import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const M41Report = () => {
    const [attendanceReports, setAttendanceReports] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedReports =
            JSON.parse(localStorage.getItem("attendanceReports")) || [];
        setAttendanceReports(storedReports);
        console.log(storedReports);
    }, []);

    const handleView = (id) => {
        navigate(`/m41report/${id}`);
    };

    const handleDelete = (id) => {
        const storedReports =
            JSON.parse(localStorage.getItem("attendanceReports")) || [];
        const updatedReports = storedReports.filter(
            (report) => report.id !== id
        );
        localStorage.setItem(
            "attendanceReports",
            JSON.stringify(updatedReports)
        );
        setAttendanceReports(updatedReports);

        console.log(updatedReports);
    };

    return (
        <div className="m41-report">
            <h1>M41 Reports</h1>
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
                        {attendanceReports.length > 0 ? (
                            attendanceReports.map((report, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{report.month}</td>
                                    <td>{report.year}</td>
                                    <td className="action-btns">
                                        <button
                                            onClick={() =>
                                                handleView(report.id)
                                            }
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(report.id)
                                            }
                                            style={{
                                                backgroundColor: "#f14141",
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No Reports found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default M41Report;

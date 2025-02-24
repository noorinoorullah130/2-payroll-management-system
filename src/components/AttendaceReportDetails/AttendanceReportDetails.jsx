import { useNavigate, useParams } from "react-router-dom";
import "./AttendanceReportDetails.css";

const AttendanceReportDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const attendanceReports =
        JSON.parse(localStorage.getItem("attendanceReports")) || [];

    const report = attendanceReports.find(
        (report) => report.id.toString() === id
    );

    console.log(attendanceReports);
    console.log(report);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="attendance-report-details">
            <div className="report-header">
                <h1>Attendance Report Details</h1>
                <div className="report-header-btns">
                    <button onClick={handlePrint}>Print</button>
                    <button
                        onClick={() => navigate("/attendancereport")}
                        style={{ backgroundColor: "#238636" }}
                    >
                        Back to Attendance Reports
                    </button>
                </div>
            </div>
            <div className="report">
                <div className="report-header-details">
                    <h3>Attendance Report of Salary of Bonus Employees</h3>
                    <div>
                        <h3>
                            {report.month} - {report.year}
                        </h3>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Account #</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Job Title</th>
                            <th>Grade</th>
                            <th>Present Days</th>
                            <th>Absent Days</th>
                            <th>Considerations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.selectedEmployees.map((emp, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{emp.accountNumber}</td>
                                <td>{emp.name}</td>
                                <td>{emp.fatherName}</td>
                                <td>{emp.jobTitle}</td>
                                <td>{emp.grade}</td>
                                <td>{emp.presentDays}</td>
                                <td>{emp.absentDays}</td>
                                <td>{emp.considerations}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="footer">
                    <p>
                        Above is the layout and accuracy of the attendance
                        report
                    </p>
                    <h3>Please Sign Here</h3>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReportDetails;

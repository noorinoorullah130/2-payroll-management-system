import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import calculateSalary from "../../utils/calculateSalary";

const BankReportDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const attendanceReports =
        JSON.parse(localStorage.getItem("attendanceReports")) || [];

    const report = attendanceReports.find(
        (report) => report.id.toString() === id
    );

    console.log(attendanceReports);
    console.log(report);

    const employeesInSingleReport = report.selectedEmployees.length;

    const handlePrint = () => {
        window.print();
    };

    const calculateTotals = () => {
        let totalPureSalary = 0;

        report.selectedEmployees.forEach((emp) => {
            totalPureSalary +=
                (calculateSalary(emp.grade) / 30) * emp.presentDays -
                ((calculateSalary(emp.grade) / 30) * emp.presentDays * 10) /
                    100;
        });

        return Math.floor(totalPureSalary).toLocaleString();
    };

    calculateTotals();

    return (
        <div className="m41-report-details">
            <div className="report-header">
                <h1>Bank Report Details</h1>
                <div className="report-header-btns">
                    <button onClick={handlePrint}>Print</button>
                    <button
                        onClick={() => navigate("/m41report")}
                        style={{ backgroundColor: "#238636" }}
                    >
                        Back to M41 Reports
                    </button>
                </div>
            </div>
            <div className="report">
                <div className="report-header-details">
                    <h3>Bank Report of Salary of Bonus Employees</h3>
                    <div>
                        <h3>
                            {report.month} - {report.year}
                        </h3>
                    </div>
                </div>
                <table>
                    <thead>
                        <th colSpan={7} style={{ fontSize: "3rem" }}>
                            Bank Report
                        </th>
                        <tr>
                            <th>ID</th>
                            <th>Account #</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Department</th>
                            <th>Province Type</th>
                            <th>Pure Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.selectedEmployees.map((emp, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{emp.accountNumber}</td>
                                <td>{emp.name}</td>
                                <td>{emp.fatherName}</td>
                                <td>--------</td>
                                <td>--------</td>
                                <td>
                                    {Math.floor(
                                        Math.floor(
                                            (calculateSalary(emp.grade) / 30) *
                                                emp.presentDays
                                        ) -
                                            (Math.floor(
                                                (calculateSalary(emp.grade) /
                                                    30) *
                                                    emp.presentDays
                                            ) *
                                                10) /
                                                100
                                    ).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={6}>Total</td>
                            <td>{calculateTotals()}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <p>
                        Above is the layout and accuracy of the Bank report of{" "}
                        <strong>({employeesInSingleReport})</strong> Employees.
                    </p>
                    <h3>Please Sign Here</h3>
                </div>
            </div>
        </div>
    );
};

export default BankReportDetails;

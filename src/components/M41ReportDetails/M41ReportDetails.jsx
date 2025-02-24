import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import calculateSalary from "../../utils/calculateSalary";

const M41ReportDetails = () => {
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
        let totalSalary = 0;
        let totalTax = 0;
        let totalPureSalary = 0;

        report.selectedEmployees.forEach((emp) => {
            totalSalary += (calculateSalary(emp.grade) / 30) * emp.presentDays;
            totalTax +=
                ((calculateSalary(emp.grade) / 30) * emp.presentDays * 10) /
                100;
            totalPureSalary +=
                (calculateSalary(emp.grade) / 30) * emp.presentDays -
                ((calculateSalary(emp.grade) / 30) * emp.presentDays * 10) /
                    100;
        });

        const calculateTotalsObject = {
            totalSalary: Math.floor(totalSalary).toLocaleString(),
            totalTax: Math.floor(totalTax).toLocaleString(),
            totalPureSalary: Math.floor(totalPureSalary).toLocaleString(),
        };

        return calculateTotalsObject;
    };

    calculateTotals();

    return (
        <div className="m41-report-details">
            <div className="report-header">
                <h1>M41 Report Details</h1>
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
                    <h3>M41 Report of Salary of Bonus Employees</h3>
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
                            <th>Main Salary</th>
                            <th>Present Days Salary</th>
                            <th>Tax</th>
                            <th>Pure Salary</th>
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
                                <td>
                                    {calculateSalary(
                                        emp.grade
                                    ).toLocaleString()}
                                </td>
                                <td>
                                    {Math.floor(
                                        (calculateSalary(emp.grade) / 30) *
                                            emp.presentDays
                                    ).toLocaleString()}
                                </td>
                                <td>
                                    {Math.floor(
                                        ((calculateSalary(emp.grade) / 30) *
                                            emp.presentDays *
                                            10) /
                                            100
                                    ).toLocaleString()}
                                </td>
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
                                <td>{emp.considerations}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={8}>Total</td>
                            <td>{calculateTotals().totalSalary}</td>
                            <td>{calculateTotals().totalTax}</td>
                            <td>{calculateTotals().totalPureSalary}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <p>
                        Above is the layout and accuracy of the M41 report of{" "}
                        <strong>({employeesInSingleReport})</strong> Empoloyees.
                    </p>
                    <h3>Please Sign Here</h3>
                </div>
            </div>
        </div>
    );
};

export default M41ReportDetails;

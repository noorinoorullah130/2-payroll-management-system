import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Left from "./components/Left/Left.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import AttendanceReport from "./pages/AttendanceReport.jsx";
import M41Report from "./pages/M41Report.jsx";
import BankReport from "./pages/BankReport.jsx";
import AttendanceReportForm from "./components/AttendanceReportForm/AttendanceReportForm.jsx";
import EmployeeDetails from "./components/EmployeeDetails.jsx/EmployeeDetails.jsx";
import AttendanceReportDetails from "./components/AttendaceReportDetails/AttendanceReportDetails.jsx";
import M41ReportDetails from "./components/M41ReportDetails/M41ReportDetails.jsx";
import BankReportDetails from "./components/BankReportDetails/BankReportDetails.jsx";

function App() {
    return (
        <div>
            <Header />
            <Left />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<EmployeeList />} />
                <Route
                    path="/attendancereport"
                    element={<AttendanceReport />}
                />
                <Route path="/m41report" element={<M41Report />} />
                <Route path="/bankreport" element={<BankReport />} />
                <Route
                    path="/attendancereportform"
                    element={<AttendanceReportForm />}
                />
                <Route
                    path="/employeedetails/:id"
                    element={<EmployeeDetails />}
                />
                <Route
                    path="/attendancereport/:id"
                    element={<AttendanceReportDetails />}
                />
                <Route path="/m41report/:id" element={<M41ReportDetails />} />
                <Route path="/bankreport/:id" element={<BankReportDetails />} />
            </Routes>
        </div>
    );
}

export default App;

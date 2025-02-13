import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Left from "./components/Left/Left.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Employee from "./pages/EmployeeList.jsx";
import AttendanceReport from "./pages/AttendanceReport.jsx";
import M41Report from "./pages/M41Report.jsx";
import BankReport from "./pages/BankReport.jsx";
import AttendanceReportForm from "./components/AttendanceReportForm/AttendanceReportForm.jsx";

function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Left />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route
                        path="/attendancereport"
                        element={<AttendanceReport />}
                    />
                    <Route path="/m41report" element={<M41Report />} />
                    <Route path="/bankreport" element={<BankReport />} />
                    <Route path="/attendancereportform" element={<AttendanceReportForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

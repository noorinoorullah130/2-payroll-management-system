import "./Left.css";
import dashboardImg from "../../assets/dashboard-square-1.svg";
import employeeList from "../../assets/list-solid.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Left() {
    const [activeTab, setActiveTab] = useState("dashboard");

    function handleTabClick(tab) {
        setActiveTab(tab);
    }

    return (
        <div className="left">
            <Link
                onClick={() => handleTabClick("dashboard")}
                className={activeTab === "dashboard" ? "active" : ""}
                to="/"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    Dashboard
                </div>
            </Link>
            <Link
                onClick={() => handleTabClick("employee")}
                className={activeTab === "employee" ? "active" : ""}
                to="/employee"
            >
                <div className="tab">
                    <img src={employeeList} />
                    Employees List
                </div>
            </Link>
            <Link
                onClick={() => handleTabClick("attendancereport")}
                className={activeTab === "attendancereport" ? "active" : ""}
                to="/attendancereport"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    Attendance Reports List
                </div>
            </Link>
            <Link
                onClick={() => handleTabClick("m41report")}
                className={activeTab === "m41report" ? "active" : ""}
                to="/m41report"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    M41 Reports List
                </div>
            </Link>
            <Link
                onClick={() => handleTabClick("bankreport")}
                className={activeTab === "bankreport" ? "active" : ""}
                to="/bankreport"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    Bank Reports List
                </div>
            </Link>
        </div>
    );
}

export default Left;

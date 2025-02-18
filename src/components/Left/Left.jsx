import "./Left.css";
import dashboardImg from "../../assets/dashboard-square-1.svg";
import employeeList from "../../assets/list-solid.svg";
import { Link, useLocation } from "react-router-dom";

function Left() {
    const location = useLocation();

    return (
        <div className="left">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
                <div className="tab">
                    <img src={dashboardImg} />
                    Dashboard
                </div>
            </Link>
            <Link
                className={location.pathname === "/employee" ? "active" : ""}
                to="/employee"
            >
                <div className="tab">
                    <img src={employeeList} />
                    Employees List
                </div>
            </Link>
            <Link
                className={
                    location.pathname === "/attendancereport" ? "active" : ""
                }
                to="/attendancereport"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    Attendance Reports List
                </div>
            </Link>
            <Link
                className={location.pathname === "/m41report" ? "active" : ""}
                to="/m41report"
            >
                <div className="tab">
                    <img src={dashboardImg} />
                    M41 Reports List
                </div>
            </Link>
            <Link
                className={location.pathname === "/bankreport" ? "active" : ""}
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

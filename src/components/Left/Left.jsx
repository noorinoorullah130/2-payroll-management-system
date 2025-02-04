
import "./Left.css";
import dashboardImg from "../../assets/dashboard-square-1.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Left() {

    const [tabs, setTabs] = useState("dashboard");

    return (
        <div className="left">
            <Link to="/" >
                <div className="tab">
                    <img src={dashboardImg}/>Dashboard
                </div>
            </Link>
            <Link to="/employee">
                <div className="tab">
                    <img src={dashboardImg}/>Employees List
                </div>
            </Link>
        </div>
    );
}

export default Left

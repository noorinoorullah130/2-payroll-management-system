import React from "react";
import "./CSS/Dashboard.css";
import profilePicture from "../assets/profile.jpg";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="main-content">
                <div className="about-me">
                    <h2>Welcome to Payroll Managemet System!</h2>
                    <p>
                        My name is <strong>Noorullah Noori</strong>, and I am
                        from Afghanistan. I am a BCS faculty student and a
                        passionate web development programmer. I have experience
                        in working with HTML, CSS, JavaScript, Node.js, and
                        MySQL, which I am using to build and enhance this
                        project.
                        <br />
                        <br />
                        The <strong>Payroll Management System</strong> is
                        designed to streamline employee salary processing,
                        attendance management, and reporting. This system
                        ensures accuracy, efficiency, and a user-friendly
                        experience for both employees and administrators.
                    </p>
                </div>

                <div className="profile-picture">
                    <img src={profilePicture} alt="" />
                </div>
            </div>
            <div className="footer">
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <strong>Payroll Management System</strong>. Developed by{" "}
                    <strong>Noorullah Noori</strong>. All right reserved.
                </p>
            </div>
        </div>
    );
}

export default Dashboard;

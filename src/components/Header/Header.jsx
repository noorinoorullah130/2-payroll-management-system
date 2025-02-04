
import profilePic from "../../assets/profile.jpg";
import "./Header.css";

function Header() {

    return (
        <header className="header">
            <h1>Payroll Management System</h1>
            <input type="text" className="search" placeholder="Search anything..." />
            <img src={profilePic} className="profile-pic" />
        </header>
    );
}

export default Header

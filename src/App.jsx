
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Left from "./components/Left/Left.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Employee from "./pages/Employee.jsx";

function App() {

    return (
        <div>
            <Header />
            <BrowserRouter>
                <Left />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App

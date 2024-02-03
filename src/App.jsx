import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import Applications from "./pages/applications/Applications";
import Calender from "./pages/calender/Calender";
import DashboardHome from "./pages/dashboardHome/DashboardHome";

import "./App.scss";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("loggedin", isLoggedIn);
  return (
    <div>
      <BrowserRouter>
        {!isLoggedIn && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route path="" element={<DashboardHome />} />
            <Route path="applications" element={<Applications />} />
            <Route path="calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

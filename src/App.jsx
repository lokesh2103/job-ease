import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

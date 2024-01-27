import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

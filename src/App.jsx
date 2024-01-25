import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/home/home";
import { Switch } from "@mui/material";
import Login from "./pages/login/login";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;

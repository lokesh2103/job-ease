import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const nav = useNavigate();

  const handleClick = (text) => {
    nav(`/${text}`);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      className="navigation"
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link
          href="/"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          className="home"
        >
          <Typography variant="h6">JobEase</Typography>
        </Link>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            className="help"
          >
            Help
          </Link>
        </nav>
        <Button
          onClick={() => handleClick("login")}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          className="navButton"
        >
          Login
        </Button>
        <Button
          onClick={() => handleClick("signup")}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          className="navButton"
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

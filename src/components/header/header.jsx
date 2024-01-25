import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  const handleClick = () => {
    // Navigate("/login");
    nav()
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          JobEase
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Help
          </Link>
        </nav>
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

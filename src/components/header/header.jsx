import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
// import { useHistory } from "react-router-dom";

const Header = () => {
  //   const history = useHistory();

  const handleClick = () => {
    // Navigate("/login");
    // history.push("/login");
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
          JobeEase
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

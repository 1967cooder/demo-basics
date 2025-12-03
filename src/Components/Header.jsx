import React from "react";
//import { Link } from "react-router";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router";
const Header = () => {
  //return (
  // <header className="header">
  //   <h1>Logo</h1>
  //   <nav className="nav-links">
  //     <Link to="/">Home</Link>
  //     <Link to="/about">About</Link>
  //     <Link to="/todos">Todos</Link>
  //     <Link to="/employees/1">Single Employee</Link>
  //   </nav>
  // </header>
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/todos">
            Todos
          </Button>
          <Button color="inherit" component={Link} to="/employees/1">
            Single Employee
          </Button>
          <Button color="inherit" component={Link} to="/employeesTable">
            Employees Table
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

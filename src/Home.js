import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/connection">Connection</Link>
        <Link to="/department-list">Department list</Link>
      </Box>
    );
  }
}

export default Home;

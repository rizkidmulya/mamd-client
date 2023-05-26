import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "./navbar/Navbar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box sx={{ px: 0, py: 10, flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({
  title = "MADM",
  navItems = [
    { label: "Produk", link: "/products" },
    { label: "Model", link: "/model" },
    { label: "Preset", link: "/preset" },
    { label: "Prediksi", link: "/" },
  ],
}) => {
  return (
    <AppBar component={"nav"}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { sm: "none", md: "block" } }}
        >
          <Button component={Link} to={"/"} sx={{ color: "#fff" }}>
            <Typography variant="h6">{title}</Typography>
          </Button>
        </Box>

        <Box sx={{ display: { sm: "none", md: "block" } }}>
          {navItems.map((item) => (
            <Button
              component={Link}
              key={item.label}
              to={item.link}
              sx={{ color: "#fff" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Navbar;

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const NavDrawer = ({ title, navItems, handleDrawerToggle }) => {
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Button component={Link} to={"/"}>
      <Typography variant="h6">{title}</Typography>
    </Button>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={Link}
            to={item.link}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>;
};

NavDrawer.propTypes = {};

export default NavDrawer;

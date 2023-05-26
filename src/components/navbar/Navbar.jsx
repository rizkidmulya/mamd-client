import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({
  title = "MADM",
  navItems = [
    { label: "Product", link: "/products" },
    { label: "Model", link: "/models" },
  ],
  drawerWidth = 240,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component={"nav"}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="open menu"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Button component={Link} to={"/"} sx={{ color: "#fff" }}>
              <Typography variant="h6">{title}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
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
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  drawerWidth: PropTypes.number,
};

export default Navbar;

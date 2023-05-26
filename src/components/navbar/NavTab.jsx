import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";

const a11yProps = (index) => {
  return {
    id: `Tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
};

const NavTab = ({
  tabs = ["Item One", "Item Two", "Item Three"],
  onChange = () => {},
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Box
      sx={{
        w: "100%",
        typography: "body1",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="tabs">
        {tabs.map((t, i) => (
          <Tab key={i} label={t} {...a11yProps(i)} />
        ))}
      </Tabs>
    </Box>
  );
};

NavTab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default NavTab;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const CriteriaSelector = ({
  criteria = [{ col: "test", label: "Test", selected: false }],
  title = "Select criteria",
  onChange = () => {},
}) => {
  const [checkedArr, setCheckedList] = useState(criteria);

  const handleValueChange = (col, value) => {
    const index = checkedArr.findIndex((x) => x.col === col);
    if (index < 0) return;

    setCheckedList([
      ...checkedArr.slice(0, index),
      Object.assign({}, checkedArr[index], { selected: value }),
      ...checkedArr.slice(index + 1),
    ]);
  };

  useEffect(() => {
    onChange(checkedArr);
  }, [checkedArr]);

  return (
    <FormGroup>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      {checkedArr &&
        checkedArr.map((c) => (
          <>
            <FormControlLabel
              checked={c.selected}
              key={c?.col}
              control={
                <Checkbox
                  onChange={(e, checked) => handleValueChange(c?.col, checked)}
                />
              }
              label={c?.label}
            />
            <Divider />
          </>
        ))}
    </FormGroup>
  );
};

CriteriaSelector.propTypes = {
  criteria: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  checkedList: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default CriteriaSelector;

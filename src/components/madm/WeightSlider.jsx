import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Slider, Stack, Typography } from "@mui/material";

const WeightSlider = ({ criteria, onChange = () => {} }) => {
  const [totalW, setTotalW] = useState(0);
  const [weights, setWeights] = useState([]);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    setWeights(criteria);
  }, [criteria]);

  useEffect(() => {
    setTotalW(weights.map((w) => w.weight).reduce((a, b) => a + b, 0));
    if (isDone) {
      onChange(weights);
    }
  }, [weights, isDone]);

  const handleChange = (value, criteria) => {
    const index = weights.findIndex((x) => x.criteria === criteria);
    if (index < 0) return;
    setDone(false);

    setWeights([
      ...weights.slice(0, index),
      Object.assign({}, weights[index], { weight: value }),
      ...weights.slice(index + 1),
    ]);
  };

  const validateChange = (value, criteria) => {
    const remaining = 1 - totalW;
    if (remaining > 0) {
      setDone(true);
      return;
    }

    const index = weights.findIndex((x) => x.col === criteria);
    if (index < 0) return;

    const otherSum = [...weights.slice(0, index), ...weights.slice(index + 1)]
      .map((w) => w.weight)
      .reduce((a, b) => a + b, 0);

    const newValue = Number((1 - otherSum).toFixed(2));

    setWeights([
      ...weights.slice(0, index),
      Object.assign({}, weights[index], { weight: newValue }),
      ...weights.slice(index + 1),
    ]);
    setDone(true);
  };

  return (
    <Box width={"100%"}>
      <Stack gap={2}>
        <Box display={"flex"} gap={4}>
          <Typography fontWeight={"bold"}>Total Weight</Typography>
          <Typography>{totalW.toFixed(2)}</Typography>
        </Box>
        {weights &&
          weights.map((c) => (
            <Grid
              container
              gap={1}
              key={c?.criteria}
              columns={{ xs: 4, md: 12 }}
            >
              <Grid item xs={1}>
                <Typography fontWeight={"bold"}>{c?.label}</Typography>
              </Grid>
              <Grid item xs={9}>
                <Slider
                  aria-label="test"
                  defaultValue={c?.weight}
                  value={c?.weight}
                  onChange={(_, v) => handleChange(v, c.criteria)}
                  onChangeCommitted={(_, v) => validateChange(v, c.criteria)}
                  step={0.01}
                  min={0}
                  max={1}
                  valueLabelDisplay="auto"
                  sx={{ flexGrow: 1 }}
                />
              </Grid>
              <Grid item xs={1}>
                <Typography>{c?.weight}</Typography>
              </Grid>
            </Grid>
          ))}
      </Stack>
    </Box>
  );
};

WeightSlider.propTypes = {
  criteria: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default WeightSlider;

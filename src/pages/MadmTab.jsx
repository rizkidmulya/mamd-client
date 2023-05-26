import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, Grid, Stack } from "@mui/material";
import CriteriaSelector from "../components/madm/criteriaSelector";
import WeightSlider from "../components/madm/WeightSlider";
import useSAW from "../hooks/useSAW";

const MadmTab = ({
  dataset,
  criteria,
  onUpdate = (madmOptions) => {},
  weights,
}) => {
  const [SAWCriteria, setSAWCriteria] = useState(criteria);
  const [SAWWeights, setSAWWeights] = useState(weights);
  const [altOptions, setAlt] = useState([]);
  const [canUpdate, setCanUpdate] = useState(false);

  const handleMADMCriteriaChange = (value) => {
    const newValue = [];
    value.map((v) => {
      if (v.selected) newValue.push({ ...v, weight: 0 });
    });

    setSAWCriteria(newValue);
  };

  const saw = useSAW(dataset, altOptions);

  const hanldeWeightChange = (value) => {
    setSAWWeights(value);
  };

  const handleAltOptions = () => {
    const alts = SAWWeights.map((a) => ({
      criteria: a.criteria,
      weight: a.weight,
      label: a.label,
      col: a.col,
    }));
    setAlt(alts);
    onUpdate(alts);
    setCanUpdate(false);
  };

  useEffect(() => {
    if (SAWWeights.length > 0) setCanUpdate(true);
  }, [SAWWeights]);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} px={1}>
          <Card elevation={2} sx={{ px: 2, py: 4 }}>
            <Stack gap={4}>
              <CriteriaSelector
                criteria={SAWCriteria}
                onChange={handleMADMCriteriaChange}
              />
              <WeightSlider
                criteria={SAWCriteria}
                onChange={hanldeWeightChange}
              />
              <Box width={"100%"} display={"flex"} justifyContent={"end"}>
                <Button
                  onClick={handleAltOptions}
                  disabled={!canUpdate}
                  variant="contained"
                >
                  Update
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} px={1}>
          <Card elevation={2} sx={{ px: 2, py: 4 }}>
            <Stack gap={4}></Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

MadmTab.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.object),
  onUpdate: PropTypes.func,
  criteria: PropTypes.arrayOf(PropTypes.object),
  weights: PropTypes.arrayOf(PropTypes.object),
};

export default MadmTab;

import { Box, Button, Card, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavTab from "../components/navbar/NavTab";
import TabPanel from "../components/navbar/TabPanel";

import useDataset from "../hooks/useDataset";
import MainTable from "../components/table/MainTable";
import CriteriaSelector from "../components/madm/criteriaSelector";
import WeightSlider from "../components/madm/WeightSlider";
import useSAW from "../hooks/useSAW";
import MadmTab from "./MadmTab";

const ModelPage = () => {
  const [optionTab, setOptionTab] = useState(0);
  const [madmOptions, setMadmOptions] = useState([]);

  const dataset = useDataset();

  const criteria = Object.keys(dataset[0]).map((c) => {
    const result = c.replace(/([A-Z])/g, " $1");
    return {
      label: result.charAt(0).toUpperCase() + result.slice(1),
      col: c,
      criteria: c,
      selected: false,
    };
  });

  const optionTabChange = (value) => {
    setOptionTab(value);
  };

  return (
    <Box>
      <NavTab tabs={["Dataset", "MADM", "SGD"]} onChange={optionTabChange} />
      <TabPanel value={optionTab} index={0}>
        <Card elevation={2}>
          <MainTable cols={criteria} rows={dataset} />
        </Card>
      </TabPanel>

      <TabPanel value={optionTab} index={1}>
        <MadmTab
          dataset={dataset}
          criteria={criteria}
          onUpdate={(data) => setMadmOptions(data)}
          weights={madmOptions}
        />
      </TabPanel>
    </Box>
  );
};

export default ModelPage;

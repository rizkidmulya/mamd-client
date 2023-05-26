import React from "react";
import useModel from "../hooks/useModelLoader";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import camelToTitle from "../features/camelToTitle";

const ModelLoad = () => {
  const data = useModel();

  return (
    <Box display={"flex"} justifyContent={"center"} px={4}>
      <Stack gap={4} sx={{ flexGrow: 1 }}>
        {data &&
          data.map((model) => (
            <Card sx={{ p: 2 }} key={model?.id}>
              <CardHeader
                title={model?.name}
                subheader="Last updated: September 14, 2016"
              />
              <Divider />
              <CardContent>
                <Stack gap={2}>
                  <Box display={"flex"}>
                    <Typography sx={{ flexGrow: 1 }} fontWeight={"bold"}>
                      Status
                    </Typography>
                    <Typography>
                      {model?.selected
                        ? "Used"
                        : model?.isFinished
                        ? "Available"
                        : "Unable"}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box display={"flex"}>
                    <Stack>
                      <Typography sx={{ flexGrow: 1 }} fontWeight={"bold"}>
                        Alternatives and Weights
                      </Typography>
                    </Stack>
                  </Box>
                  <Box display={"flex"}>
                    <Typography sx={{ flexGrow: 1 }} fontWeight={"bold"}>
                      Target
                    </Typography>
                    <Typography>
                      {model?.target?.criteria
                        ? camelToTitle(model?.target?.criteria)
                        : "undefined"}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          ))}

        <Box display={"flex"} justifyContent={"end"}>
          <Button variant="contained">Save</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ModelLoad;

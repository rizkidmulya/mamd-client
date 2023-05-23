import { Box, Button, Stack, Table, Typography, colors } from "@mui/material";
import { useEffect } from "react";
import { Chart } from "chart.js/auto";

import ScatterLine from "./components/charts/ScatterLine";
import MainTable from "./components/table/MainTable";
import ScatterPlot from "./components/charts/ScatterPlot";
import dataset from "./test/dataset.json";
import saw from "./test/saw-result.json";
import testOptions from "./test/test-options.json";
import mse from "./test/mse-result.json";
import LinePlot from "./components/charts/LinePlot";

import modelResult from "./test/test-result.json";
import polynomial from "./test/polynomial.json";

function Test() {
  const cols = [
    { col: "name", label: "Product Name" },
    { col: "quality", label: "Quality(1-5)" },
    { col: "ageInMonths", label: "Age in Months" },
    { col: "initialPrice", label: "Original Price" },
    { col: "sellingPrice", label: "Selling Price" },
  ];

  return (
    <>
      <Stack gap={10}>
        <MainTable cols={cols} rows={dataset} />

        <ScatterPlot
          xs={dataset.map((x) => x.initialPrice)}
          ys={dataset.map((y) => y.sellingPrice)}
          label="Initial to Selling Price"
          backgroundColor={[colors.blue[200]]}
        />

        <ScatterPlot
          xs={dataset.map((x) => x.quality)}
          ys={dataset.map((y) => y.sellingPrice)}
          label="Quality to Selling Price"
          backgroundColor={[colors.orange[200]]}
        />

        <ScatterPlot
          xs={dataset.map((x) => x.ageInMonths)}
          ys={dataset.map((y) => y.sellingPrice)}
          label="Age (in Months) to Selling Price"
          backgroundColor={[colors.red[200]]}
        />

        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
          <Typography fontWeight={"bold"}>Normalized Value</Typography>
          <MainTable
            cols={cols.slice(0, 4)}
            rows={saw.alternatives}
            label={"nomalized value"}
          />
        </Box>

        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
          <Typography fontWeight={"bold"}>Weights</Typography>
          <MainTable
            cols={cols.slice(1, 4)}
            rows={[
              {
                [cols[1].col]: saw.weights[0],
                [cols[2].col]: saw.weights[1],
                [cols[3].col]: saw.weights[2],
              },
            ]}
            label={"nomalized value"}
          />
        </Box>

        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
          <Typography>SAW Score</Typography>
          <MainTable
            cols={[
              { col: "name", label: "Product Name" },
              { col: "score", label: "SAW score" },
            ]}
            rows={dataset.map((d, i) => ({
              name: d.name,
              score: saw.scores[i],
            }))}
            label={"nomalized value"}
          />
        </Box>

        <ScatterPlot
          xs={saw.scores.map((x) => x)}
          ys={dataset.map((y) => y.sellingPrice)}
          label="Scores to Selling Price"
          backgroundColor={[colors.green[200]]}
        />

        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
          <Typography>Training Data</Typography>
          <MainTable
            cols={[
              { col: "epochs", label: "Number of epoch" },
              { col: "learningRate", label: "Learning Rate (alpha)" },
              { col: "loss", label: "Loss function" },
              { col: "optimizer", label: "Optimizer" },
            ]}
            rows={[
              {
                epochs: testOptions.epochs,
                learningRate: testOptions.learningRate,
                loss: "Mean Squared Error (MSE)",
                optimizer: "Stochastic Gradient Descent (SGD)",
              },
            ]}
            label={"options"}
          />
        </Box>

        <LinePlot
          label="MSE"
          backgroundColor={colors.grey[900]}
          xs={mse}
          ys={Array.from({ length: mse.length }, (_, i) => i + 1)}
        />

        <ScatterLine
          data={{
            datasets: [
              {
                label: "Actual Data",
                data: modelResult.map((a) => ({
                  x: a.x,
                  y: a.label,
                })),
                fill: false,
                borderColor: colors.green[300],
                backgroundColor: [colors.green[200]],
              },
              {
                label: "Prediction",
                data: modelResult.map((a) => ({
                  x: a.x,
                  y: a.pred,
                })),
                fill: false,
                borderColor: colors.red[300],
                backgroundColor: [colors.red[200]],
              },
              {
                label: "Function",
                data: polynomial.map((p) => ({
                  x: p.x,
                  y: p.y,
                })),
                fill: false,
                showLine: true,
                borderColor: colors.grey[900],
                backgroundColor: [colors.grey[800]],
                pointRadius: 0,
                borderWidth: 0.5,
              },
            ],
          }}
          options={{
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />

        {/* <ScatterLine />  */}
      </Stack>
    </>
  );
}

export default Test;

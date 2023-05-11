import { Button, Typography } from "@mui/material";
import ScatterLine from "./components/charts/ScatterLine";
import usePolynomial from "./hooks/usePolynomial";
import { useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

function App() {
  const model = usePolynomial({
    xs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ys: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  });

  useEffect(() => {}, []);

  return (
    <>
      <Typography>{model.currentEpoch}</Typography>
      <Typography>{JSON.stringify(model.coeffs)}</Typography>

      <Button>Test</Button>

      {/* <ScatterLine /> */}
    </>
  );
}

export default App;

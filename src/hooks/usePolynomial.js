import { useEffect, useState } from "react";
import fit from "./gradientDescent";

const usePolynomial = ({
  xs = [],
  ys = [],
  epochs = 100,
  learningRate = 0.002,
  initialCoeff = [0, 2.1, 0],
} = {}) => {
  const [mse, setMse] = useState([]);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [simulationSpeed, setSimulationSpeed] = useState(100);

  const [coeffs, setCoeffs] = useState(initialCoeff);

  useEffect(() => {
    if (!isStart) {
      return;
    }

    const simulation = setInterval(async () => {
      if (currentEpoch >= epochs) {
        return;
      }

      await fit(xs, ys, {
        learningRate,
        epochs: 1,
        initialCoeffs: coeffs,
      }).then((model) => {
        console.log(coeffs);

        setCoeffs(model.weights);
        setMse((prev) => [...prev, ...model.mse]);
      });

      setCurrentEpoch(currentEpoch + 1);
    }, simulationSpeed);

    return () => clearInterval(simulation);
    // fit(xs, ys, { learningRate, epochs: 1, degree: 2 });
  }, [isStart, currentEpoch]);

  const toogleStart = () => {
    setIsStart(!isStart);
  };

  return { coeffs, currentEpoch, mse };
};

export default usePolynomial;

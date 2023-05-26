import { useEffect, useState } from "react";
import simpleAdditiveWeighting from "../features/SAW";

/**
 *
 * @param {Object[]} dataset
 * @param {Object[]} alternativesOptions
 * @param {string} alternativesOptions.criteria
 * @param {number} alternativesOptions.weights
 */
const useSAW = (dataset, alternativesOptions) => {
  const { criteria, weights } = alternativesOptions;
  const [data, setData] = useState([]);
  const [states, setStates] = useState({
    isError: false,
    isLoading: false,
    isSuccess: false,
    error: "",
  });

  useEffect(() => {
    setData(dataset);
  }, [dataset]);

  useEffect(() => {}, [alternativesOptions]);

  if (!dataset || alternativesOptions) return "error";

  //   simpleAdditiveWeighting();
};

export default useSAW;

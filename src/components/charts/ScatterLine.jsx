import { Bar, Scatter } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart } from "chart.js/auto";

const ScatterLine = ({ data, options }) => {
  return <Scatter data={data} options={options} />;
};

ScatterLine.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

export default ScatterLine;

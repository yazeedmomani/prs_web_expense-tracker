import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((current) => current.value);
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((current) => (
        <ChartBar
          key={current.label}
          value={current.value}
          maxValue={maxValue}
          label={current.label}
        />
      ))}
    </div>
  );
}

export default Chart;

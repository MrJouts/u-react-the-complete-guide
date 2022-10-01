import { Point } from "../../types";
import "./Chart.css";
import ChartBar from "./ChartBar";

type Props = {
  points: Point[];
};

const Chart = ({ points }: Props) => {
  const pointValues = points.map((point) => point.value);
  const totalMaximum = Math.max(...pointValues);

  return (
    <div className="chart">
      {points.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;

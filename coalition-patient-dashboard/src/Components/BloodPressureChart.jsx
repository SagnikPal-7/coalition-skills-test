import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function TrendIndicator({ level }) {
  const text = level || "";
  const normalized =
    text.toLowerCase();

  if (normalized.includes("higher")) {
    return (
      <span className="trend-text">
        <span className="trend-arrow">▲</span>
        {text}
      </span>
    );
  }

  if (normalized.includes("lower")) {
    return (
      <span className="trend-text">
        <span className="trend-arrow">▼</span>
        {text}
      </span>
    );
  }

  return (
    <span className="trend-text">
      {text || "Normal"}
    </span>
  );
}

function BloodPressureChart({
  diagnosisHistory,
}) {
  const chartHistory = diagnosisHistory
    .slice(0, 6)
    .reverse();

  const labels = chartHistory.map(
    (item) => {
      const month = item.month
        ? item.month.slice(0, 3)
        : "";

      return `${month}, ${item.year}`;
    }
  );

  const systolicValues =
    chartHistory.map(
      (item) =>
        item.blood_pressure?.systolic
          ?.value ?? null
    );

  const diastolicValues =
    chartHistory.map(
      (item) =>
        item.blood_pressure?.diastolic
          ?.value ?? null
    );

  const latest =
    diagnosisHistory[0];

  const systolic =
    latest?.blood_pressure?.systolic;

  const diastolic =
    latest?.blood_pressure?.diastolic;

  const data = {
    labels,

    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2.5,
        tension: 0.38,
        fill: false,
      },

      {
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2.5,
        tension: 0.38,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        displayColors: true,
        padding: 10,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        border: {
          display: false,
        },

        ticks: {
          color: "#707070",
          font: {
            size: 11,
          },
          maxRotation: 0,
        },
      },

      y: {
        suggestedMin: 60,
        suggestedMax: 180,

        ticks: {
          stepSize: 20,
          color: "#707070",
          font: {
            size: 11,
          },
        },

        grid: {
          color: "rgba(7, 38, 53, 0.08)",
        },

        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="blood-pressure-card">
      <div className="blood-pressure-header">
        <h3>Blood Pressure</h3>

        <div className="period-label">
          Last 6 months
          <span>⌄</span>
        </div>
      </div>

      <div className="blood-pressure-content">
        <div className="chart-wrapper">
          <Line
            data={data}
            options={options}
          />
        </div>

        <div className="blood-pressure-summary">
          <div className="pressure-stat">
            <div className="pressure-label">
              <span className="dot systolic-dot" />
              <strong>Systolic</strong>
            </div>

            <div className="pressure-value">
              {systolic?.value ?? "—"}
            </div>

            <TrendIndicator
              level={systolic?.levels}
            />
          </div>

          <div className="pressure-divider" />

          <div className="pressure-stat">
            <div className="pressure-label">
              <span className="dot diastolic-dot" />
              <strong>Diastolic</strong>
            </div>

            <div className="pressure-value">
              {diastolic?.value ?? "—"}
            </div>

            <TrendIndicator
              level={diastolic?.levels}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodPressureChart;
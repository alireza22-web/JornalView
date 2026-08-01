import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  BarElement,
  Filler
} from "chart.js";

import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  LineElement,
  PointElement,
  Filler,
  Legend
);
export function WinRateChart({ winTrade, lossTrade }) {
  const data = {
    labels: ["سود", "ضرر"],
    datasets: [
      {
        data: [winTrade, lossTrade],
        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],
        borderWidth: 0,
      },
    ],
  };
  
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels:{
          font:{
            family:'laleh'
          }
        }
      },
    },
    cutout: "65%",
  };
  return (
    <div className="border px-3 py-1 border-zinc-300 col-span-4 shadow-xl rounded-2xl h-67.5">
      <h3 className="mb-4 text-xl text-center">
        نرخ موفقیت
      </h3>
      <div className="h-50 flex items-center justify-center">
        <Pie
          className=""
          data={data}
          options={options}
          
        />
      </div>
    </div>
  );
}

export function MonthlyProfit({ labels, values }) {
  const data = {
    labels,
    datasets: [
    {
        label: "سود ماهانه",
        data: values,
        borderRadius: 10,
        backgroundColor: values.map(item =>
          item >= 0
              ? "#22c55e"
              : "#ef4444"
        )
    }
    ]
  };
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              display: false
          }
      }

  };
  return (

      <div className="card h-67.5 overflow-hidden border border-zinc-300">
          <h2 className="text-lg text-center mb-4">
              عملکرد ماهانه
          </h2>
          <div className="h-50 flex items-center justify-center">
            <Bar
                data={data}
                options={options}
            />
          </div>
      </div>

  )


  
}
export function SessionProfitChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderRadius: 8,
        backgroundColor: values.map(v =>
          v >= 0 ? "#22c55e" : "#ef4444"
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card border border-zinc-300 h-67.5">
      <h2 className="text-lg text-center mb-4">
        سود هر Session
      </h2>
      <div className="h-50 flex items-center justify-center">
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export function EquityCurve({ labels, values }) {

  const data = {
      labels,
      datasets: [
          {
              label: "Equity",
              data: values,
              fill: true,
              tension: 0.35,
              borderWidth: 3,
              borderColor: "#2563eb",
              backgroundColor: "rgba(37,99,235,.12)",
              pointRadius: 4,
              pointHoverRadius: 6,
          },
      ],
  };

  const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              display: false,
          },
      },
      scales: {
          y: {
              beginAtZero: false,
          },
      },
  };
  return (
      <div className="card border border-zinc-300 h-67.5">
          <h2 className="text-lg text-center mb-4">
              رشد سرمایه
          </h2>
          <div className="h-50 flex items-center justify-center">
            <Line
                data={data}
                options={options}
            />
          </div>
      </div>
  );
}
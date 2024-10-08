import BarChartComponent from './BarChartComponent';
import DonutChart from "./DonutChart";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Tables from "./Tables";
import SearchPanel from "./SearchPanel";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinancialOverview = () => {
  const doughnutData = {
    datasets: [
      {
        data: [60000, 5600, 1000],
        backgroundColor: ["#4ade80", "#3b82f6", "#f97316"],
      },
    ],
    labels: ["KFC", "Lorem Ipsum", "Lorem Ipsum"],
  };

  const barData = {
    labels: [
      "Abu Dhabi",
      "Dubai",
      "Sharjah",
      "Ajman",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    datasets: [
      {
        label: "Sales",
        data: [6000, 5000, 3000, 2000, 2000, 1000],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Royalty",
        data: [500, 400, 300, 200, 200, 100],
        backgroundColor: "#f97316",
      },
    ],
  };

  const tableData = [
    {
      id: "A101",
      franchiseName: "Lorem ipsum dolor sim",
      franchisorName: "Lorem ipsum dolor sim",
      city: "Riyadh",
      sales: 6000,
      royalty: 500,
    },
    {
      id: "A101",
      franchiseName: "KFC",
      franchisorName: "Collins Esther",
      city: "Jeddah",
      sales: 5000,
      royalty: 400,
    },
    {
      id: "A101",
      franchiseName: "Lorem ipsum dolor sim",
      franchisorName: "Lorem ipsum dolor",
      city: "Jeddah",
      sales: 5000,
      royalty: 400,
    },
    {
      id: "A101",
      franchiseName: "Lorem ipsum dolor sim",
      franchisorName: "Lorem ipsum dolor",
      city: "Jeddah",
      sales: 5000,
      royalty: 400,
    },
  ];

  return (
    <div className="p-6 bg-[#FAFBFA] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Overview</h1>
        <select className="p-2 border rounded">
          <option>Yearly</option>
          <option>Monthly</option>
          <option>Daily</option>
        </select>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white px-4 pb-9 pt-4 rounded shadow">
          <h2 className="text-sm text-gray-500 pb-2">Total Franchise</h2>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-2xl font-bold">$90,000</p>
        </div>
        <div className="bg-white px-4 pb-9 pt-4  rounded shadow">
          <h2 className="text-sm text-gray-500">Total Royalty</h2>
          <p className="text-2xl font-bold">$6000</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-3 mb-6 "  >

        <div className="bg-white p-4 rounded shadow">
          <DonutChart />
        </div>

        <div className="bg-white pb-12 px-2 pt-3 rounded shadow h-full max-w-full  overflow-hidden">
          <BarChartComponent />
        </div>

      </div>
      <div className="bg-white p-2 rounded-lg">
        <SearchPanel />
        <Tables />
      </div>
    </div>
  );
};

export default FinancialOverview;

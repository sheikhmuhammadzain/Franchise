  import { Doughnut, Bar } from "react-chartjs-2";
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
    <div className="p-6 bg-[#FAFBFA] min-h-screen w-[80%] ml-auto mt-[80px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Overview</h1>
        <select className="p-2 border rounded">
          <option>Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
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

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Top Franchise</h2>
          <Doughnut data={doughnutData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Top Sales Location</h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded"
          />
          <div>
            <button className="mr-2 p-2 border rounded">Filter</button>
            <button className="p-2 border rounded">Export</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Franchise Name</th>
              <th className="p-2 text-left">Franchisor Name</th>
              <th className="p-2 text-left">City</th>
              <th className="p-2 text-left">Sales</th>
              <th className="p-2 text-left">Royalty</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.franchiseName}</td>
                <td className="p-2">{row.franchisorName}</td>
                <td className="p-2">{row.city}</td>
                <td className="p-2">${row.sales}</td>
                <td className="p-2">${row.royalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialOverview;

import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'KFC', value: 60000, color: '#4ade80' },
    { name: 'Lorem ipsum...', value: 6000, color: '#3b82f6' },
    { name: 'Lorem ipsum...', value: 500, color: '#e5e7eb' },
  ];

  const totalSales = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Top Franchise</h2>
      <div className="relative">
        <PieChart width={400} height={390}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value, entry) => (
              <span className="text-gray-700">{entry.payload.name}</span>
            )}
          />
        </PieChart>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-2xl font-bold">${totalSales.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Abu Dhabi', Sales: 56000, Royalty: 5600 },
  { name: 'Dubai', Sales: 56000, Royalty: 5600 },
  { name: 'Sharjah', Sales: 56000, Royalty: 5600 },
  { name: 'Ajman', Sales: 56000, Royalty: 5600 },
  { name: 'Lorem ipsum', Sales: 56000, Royalty: 5600 },
  { name: 'Lorem ipsum', Sales: 56000, Royalty: 5600 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Top Sales Location</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" stackId="a" fill="#91d5ff" />
          <Bar dataKey="Royalty" stackId="a" fill="#ffd591" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
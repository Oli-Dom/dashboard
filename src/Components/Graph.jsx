import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// const data = [
//   { price: 0.1, year: 1961 },
//   { price: 0.15, year: 1971 },
//   { price: 0.5, year: 1981 },
//   { price: 1.75, year: 1991 },
//   { price: 2.95, year: 2001 },
//   { price: 2.99, year: 2011 },
//   { price: 3.99, year: 2023 },z
// ];

const data = [
  { year: 1961, price: 0.01 },
  { year: 1971, price: 0.15 },
  { year: 1981, price: 0.5 },
  { year: 1991, price: 1.75 },
  { year: 2001, price: 2.95 },
  { year: 2011, price: 2.99 },
  { year: 2023, price: 3.99 },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="50%" aspect={4}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;

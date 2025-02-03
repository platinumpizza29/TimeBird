"use client"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from '~/components/ui/card';

const DonutChart = () => {
  const data = [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 25 },
    { name: 'Mar', value: 40 },
    { name: 'Apr', value: 30 },
    { name: 'May', value: 50 },
    { name: 'Jun', value: 60 }
  ];

  // Custom colors that look good together
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Card className="w-full aspect-video p-4 bg-muted/50">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DonutChart;


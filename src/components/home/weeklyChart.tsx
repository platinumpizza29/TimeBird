"use client";
import { type TimeLog } from "@prisma/client";
import { BarChart as LucideBarChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

const WeeklyChartComp = ({ props }: { props: TimeLog[] }) => {
  const chartData = props.map((log) => ({
    date: log.date.toLocaleDateString(),
    value: log.hours,
  }));

  // Custom colors that look good together
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  return (
    <Card className="h-96 w-full bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LucideBarChart className="h-6 w-6" />
          Weekly Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-60px)] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey={"value"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyChartComp;

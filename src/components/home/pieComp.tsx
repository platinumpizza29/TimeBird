"use client";

import { type TimeLog } from "@prisma/client";
import * as React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { Card, CardContent } from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

interface ChartData {
  type: string;
  hours: number;
  fill: string;
}

export function PieChartComp() {
  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  const [loading, setLoading] = React.useState(true);

  const chartConfig: ChartConfig = {
    overtime: {
      label: "Overtime",
      color: "rgb(239 68 68)", // red-500
    },
    vacation: {
      label: "Vacation",
      color: "rgb(34 197 94)", // green-500
    },
    sick: {
      label: "Sick",
      color: "rgb(59 130 246)", // blue-500
    },
    holiday: {
      label: "Holiday",
      color: "rgb(168 85 247)", // purple-500
    },
    contract: {
      label: "Contract",
      color: "rgb(245 158 11)", // amber-500
    },
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/timelogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const timeLogs = (await response.json()) as TimeLog[];

        // Initialize the data map with explicit typing
        const dataMap: Record<string, number> = {};

        // Process the time logs
        timeLogs.forEach((log) => {
          const type = log.type;
          const hours = Number(log.hours) ?? 0; // Ensure hours is a number
          dataMap[type] = (dataMap[type] ?? 0) + hours;
        });

        // Transform with explicit type checking
        const transformedData: ChartData[] = Object.entries(dataMap).map(
          ([type, hours]): ChartData => ({
            type,
            hours: hours,
            fill:
              chartConfig[type as keyof typeof chartConfig]?.color ??
              "rgb(203 213 225)",
          }),
        );

        setChartData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().catch((e) => {
      console.error(e);
    });
  }, []);

  const totalHours = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.hours, 0);
  }, [chartData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="flex aspect-video flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="hours"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
              stroke="rgb(255 255 255)"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox as { cx: number; cy: number };

                  if (typeof cx === "number" && typeof cy === "number") {
                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={cx}
                          y={cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalHours.toLocaleString()}
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 24}
                          className="fill-muted-foreground"
                        >
                          Hours
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

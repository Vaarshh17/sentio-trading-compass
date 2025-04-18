
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const data = [
  { date: "Jan", equity: 1000, drawdown: 0, benchmark: 1000 },
  { date: "Feb", equity: 1150, drawdown: 0, benchmark: 1050 },
  { date: "Mar", equity: 1050, drawdown: -100, benchmark: 1070 },
  { date: "Apr", equity: 1200, drawdown: 0, benchmark: 1090 },
  { date: "May", equity: 1300, drawdown: 0, benchmark: 1120 },
  { date: "Jun", equity: 1200, drawdown: -100, benchmark: 1140 },
  { date: "Jul", equity: 1400, drawdown: 0, benchmark: 1160 },
  { date: "Aug", equity: 1500, drawdown: 0, benchmark: 1190 },
  { date: "Sep", equity: 1450, drawdown: -50, benchmark: 1210 },
  { date: "Oct", equity: 1600, drawdown: 0, benchmark: 1220 },
  { date: "Nov", equity: 1750, drawdown: 0, benchmark: 1240 },
  { date: "Dec", equity: 1900, drawdown: 0, benchmark: 1260 },
];

export default function PortfolioChart() {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Portfolio Performance</CardTitle>
      </CardHeader>
      <CardContent className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDrawdown" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(23, 23, 23, 0.8)', 
                borderColor: '#374151',
                borderRadius: '0.375rem',
                color: '#f8f9fa'
              }} 
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="equity"
              stroke="#F97316"
              fillOpacity={1}
              fill="url(#colorEquity)"
              name="Equity"
            />
            <Area
              type="monotone"
              dataKey="drawdown"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorDrawdown)"
              name="Drawdown"
            />
            <Area
              type="monotone"
              dataKey="benchmark"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorBenchmark)"
              name="Benchmark"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

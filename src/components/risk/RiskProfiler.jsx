
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const data = [
  {
    subject: "VaR",
    strategy: 65,
    benchmark: 80,
    fullMark: 150,
  },
  {
    subject: "CVaR",
    strategy: 50,
    benchmark: 70,
    fullMark: 150,
  },
  {
    subject: "Volatility",
    strategy: 60,
    benchmark: 85,
    fullMark: 150,
  },
  {
    subject: "Drawdown",
    strategy: 40,
    benchmark: 60,
    fullMark: 150,
  },
  {
    subject: "Sharpe",
    strategy: 90,
    benchmark: 65,
    fullMark: 150,
  },
  {
    subject: "Sortino",
    strategy: 80,
    benchmark: 60,
    fullMark: 150,
  },
];

export default function RiskProfiler() {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Risk Profile</CardTitle>
      </CardHeader>
      <CardContent className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid stroke="#525252" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(23, 23, 23, 0.8)', 
                borderColor: '#374151',
                borderRadius: '0.375rem',
                color: '#f8f9fa'
              }} 
            />
            <Legend />
            <Radar
              name="Strategy"
              dataKey="strategy"
              stroke="#F97316"
              fill="#F97316"
              fillOpacity={0.6}
            />
            <Radar
              name="Benchmark"
              dataKey="benchmark"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const data = [
  { id: 1, profit: 120, emotion: 0.8, date: "01/03" },
  { id: 2, profit: 85, emotion: 0.6, date: "03/03" },
  { id: 3, profit: -50, emotion: -0.4, date: "05/03" },
  { id: 4, profit: -70, emotion: -0.5, date: "08/03" },
  { id: 5, profit: 100, emotion: 0.7, date: "10/03" },
  { id: 6, profit: 65, emotion: 0.5, date: "12/03" },
  { id: 7, profit: -40, emotion: -0.3, date: "15/03" },
  { id: 8, profit: 95, emotion: 0.7, date: "18/03" },
  { id: 9, profit: 75, emotion: 0.6, date: "21/03" },
  { id: 10, profit: -60, emotion: -0.5, date: "25/03" },
  { id: 11, profit: 110, emotion: 0.8, date: "28/03" },
  { id: 12, profit: -55, emotion: -0.4, date: "30/03" },
];

export default function TradeHistoryChart() {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Trade History with Emotional Analysis</CardTitle>
      </CardHeader>
      <CardContent className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(23, 23, 23, 0.8)', 
                borderColor: '#374151',
                borderRadius: '0.375rem',
                color: '#f8f9fa'
              }} 
            />
            <Legend />
            <ReferenceLine y={0} stroke="#525252" />
            <Bar
              dataKey="profit"
              name="Profit/Loss"
              fill={(entry) => (entry.profit > 0 ? "#22c55e" : "#ef4444")}
            />
            <Bar
              dataKey="emotion"
              name="Emotional Index"
              fill={(entry) => {
                if (entry.emotion > 0.5) return "#F97316";
                if (entry.emotion > 0) return "#FDBA74";
                if (entry.emotion > -0.5) return "#93c5fd";
                return "#3b82f6";
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

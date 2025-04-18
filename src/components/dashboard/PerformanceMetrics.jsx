
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Percent, DollarSign } from "lucide-react";

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Sharpe Ratio"
        value="1.82"
        trend="up"
        trendValue="+0.24"
        icon={<TrendingUp className="h-4 w-4 text-green-500" />}
      />
      <MetricCard
        title="Max Drawdown"
        value="-12.5%"
        trend="down"
        trendValue="-2.3%"
        icon={<TrendingDown className="h-4 w-4 text-red-500" />}
      />
      <MetricCard
        title="Win Rate"
        value="68.2%"
        trend="up"
        trendValue="+1.5%"
        icon={<Percent className="h-4 w-4 text-sentio-orange" />}
      />
      <MetricCard
        title="Profit Factor"
        value="2.14"
        trend="up"
        trendValue="+0.18"
        icon={<DollarSign className="h-4 w-4 text-green-500" />}
      />
    </div>
  );
}

function MetricCard({ title, value, trend, trendValue, icon }) {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-1">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{value}</div>
          <div
            className={`flex items-center text-xs ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {icon} <span className="ml-1">{trendValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

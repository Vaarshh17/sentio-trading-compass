
import React from "react";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import TradeHistoryChart from "@/components/dashboard/TradeHistoryChart";
import ParameterAdjustmentPanel from "@/components/dashboard/ParameterAdjustmentPanel";
import RiskProfiler from "@/components/risk/RiskProfiler";

export default function Dashboard() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: April 18, 2025 09:45 AM
        </div>
      </div>

      <PerformanceMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div>
          <ParameterAdjustmentPanel />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TradeHistoryChart />
        <RiskProfiler />
      </div>
    </div>
  );
}

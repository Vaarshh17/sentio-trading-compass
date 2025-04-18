
import React from "react";
import RiskProfiler from "@/components/risk/RiskProfiler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Risk() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Risk Profiler</h1>
        <div className="text-sm text-muted-foreground">
          Analyze and manage risk exposure
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RiskProfiler />
        
        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Risk Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="exposure">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exposure">Exposure</TabsTrigger>
                <TabsTrigger value="drawdown">Drawdown Analysis</TabsTrigger>
                <TabsTrigger value="allocation">Allocation</TabsTrigger>
              </TabsList>
              <TabsContent value="exposure" className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Risk exposure by asset class and sector
                  </div>
                  <div className="flex justify-center py-8">
                    <PieChart className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Risk exposure visualization will be available here
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="drawdown" className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Historical drawdown analysis with emotional correlation
                  </div>
                  <div className="flex justify-center py-8">
                    <LineChart className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Drawdown analysis will be available here
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="allocation" className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Portfolio allocation and risk budget
                  </div>
                  <div className="flex justify-center py-8">
                    <BarChart className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Allocation visualization will be available here
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

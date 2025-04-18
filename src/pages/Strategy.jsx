
import React from "react";
import StrategySelector from "@/components/strategy/StrategySelector";
import ParameterAdjustmentPanel from "@/components/dashboard/ParameterAdjustmentPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Strategy() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Strategy Configuration</h1>
        <div className="text-sm text-muted-foreground">
          Configure and optimize your trading strategies
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StrategySelector />
        
        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Strategy Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="parameters">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="parameters">Parameters</TabsTrigger>
                <TabsTrigger value="emotional">Emotional Analysis</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              <TabsContent value="parameters" className="pt-4">
                <ParameterAdjustmentPanel />
              </TabsContent>
              <TabsContent value="emotional" className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Configure emotional analysis parameters for your strategy
                  </div>
                  <p className="text-center py-12 text-muted-foreground">
                    Emotional analysis configuration will be available here
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Advanced configuration options
                  </div>
                  <p className="text-center py-12 text-muted-foreground">
                    Advanced configuration options will be available here
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

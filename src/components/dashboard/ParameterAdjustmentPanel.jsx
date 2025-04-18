
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function ParameterAdjustmentPanel() {
  const [params, setParams] = useState({
    fastMA: 10,
    slowMA: 30,
    riskLevel: 0.2,
    emotionalWeight: 0.5,
  });

  const handleChange = (name, value) => {
    setParams((prev) => ({ ...prev, [name]: value[0] }));
  };

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Strategy Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Fast MA Period</span>
              <span className="text-sm text-muted-foreground">{params.fastMA}</span>
            </div>
            <Slider
              value={[params.fastMA]}
              min={5}
              max={50}
              step={1}
              className="parameter-slider"
              onValueChange={(value) => handleChange("fastMA", value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Slow MA Period</span>
              <span className="text-sm text-muted-foreground">{params.slowMA}</span>
            </div>
            <Slider
              value={[params.slowMA]}
              min={20}
              max={200}
              step={1}
              className="parameter-slider"
              onValueChange={(value) => handleChange("slowMA", value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Risk Level</span>
              <span className="text-sm text-muted-foreground">{(params.riskLevel * 100).toFixed(0)}%</span>
            </div>
            <Slider
              value={[params.riskLevel]}
              min={0.05}
              max={0.5}
              step={0.01}
              className="parameter-slider"
              onValueChange={(value) => handleChange("riskLevel", value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Emotional Weight</span>
              <span className="text-sm text-muted-foreground">{(params.emotionalWeight * 100).toFixed(0)}%</span>
            </div>
            <Slider
              value={[params.emotionalWeight]}
              min={0}
              max={1}
              step={0.05}
              className="parameter-slider"
              onValueChange={(value) => handleChange("emotionalWeight", value)}
            />
          </div>

          <Button variant="default" className="w-full bg-sentio-orange hover:bg-sentio-dark-orange">
            <RefreshCw className="h-4 w-4 mr-2" />
            Run Backtest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Broker() {
  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Broker Simulation Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Cost Model</CardTitle>
            <CardDescription>Configure transaction cost models</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Define how transaction costs are calculated in your simulations.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Slippage Model</CardTitle>
            <CardDescription>Settings with visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Configure slippage models for realistic backtesting.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Execution</CardTitle>
            <CardDescription>Simulation parameters for order execution</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Set up how orders are executed in your simulations.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Impact</CardTitle>
            <CardDescription>Model settings for market impact</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Configure how your orders impact the market in simulations.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

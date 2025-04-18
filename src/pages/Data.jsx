
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Data() {
  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Data Source Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Providers</CardTitle>
            <CardDescription>Connect and manage your data providers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Configure your data source connections here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Quality</CardTitle>
            <CardDescription>Visualization and verification tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Verify the quality and integrity of your data.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alternative Data</CardTitle>
            <CardDescription>Integration controls for alternative data sources</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Add and manage alternative data sources.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Overlay</CardTitle>
            <CardDescription>Fundamental and technical data overlay options</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Configure data overlay options for your charts.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

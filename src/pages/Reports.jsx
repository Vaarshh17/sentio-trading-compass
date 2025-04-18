
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Reporting & Visualization</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Report Builder</CardTitle>
            <CardDescription>Build custom reports with templates</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Create and customize your trading reports.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>Export in various formats (PDF, Excel, HTML)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Choose your preferred export format.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chart Editor</CardTitle>
            <CardDescription>Visual chart editor with annotation capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Create and edit custom charts for your reports.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
            <CardDescription>Compare against benchmarks or other strategies</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Analyze your strategy performance against benchmarks.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

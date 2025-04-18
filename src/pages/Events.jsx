
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Events() {
  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Event Handler & Notifications</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Condition Alerts</CardTitle>
            <CardDescription>Configure alerts for specific market conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Configure your event triggers and notification settings here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Set your notification delivery preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Choose how and when you receive notifications.</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Event Timeline</CardTitle>
            <CardDescription>View and filter your event history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-md">
              <p className="text-muted-foreground">Event history will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


import React from "react";
import InteractiveConsole from "@/components/console/InteractiveConsole";

export default function Console() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interactive Console</h1>
        <div className="text-sm text-muted-foreground">
          Access advanced backtesting commands
        </div>
      </div>

      <div className="h-[calc(100vh-12rem)]">
        <InteractiveConsole />
      </div>
    </div>
  );
}

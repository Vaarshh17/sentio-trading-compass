
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Send, Terminal } from "lucide-react";

export default function InteractiveConsole() {
  const [commandHistory, setCommandHistory] = useState([
    { type: "system", content: "Sentio Interactive Console v1.0.0", timestamp: "09:30:00" },
    { type: "system", content: "Type 'help' for a list of commands", timestamp: "09:30:00" },
    { type: "command", content: "load data.csv", timestamp: "09:35:12" },
    { type: "response", content: "Loaded 2,350 rows of data", timestamp: "09:35:13" },
    { type: "command", content: "set strategy MovingAverageCrossover", timestamp: "09:36:45" },
    { type: "response", content: "Strategy set to MovingAverageCrossover", timestamp: "09:36:46" },
    { type: "command", content: "set param fastMA 12", timestamp: "09:37:22" },
    { type: "response", content: "Parameter fastMA set to 12", timestamp: "09:37:23" },
    { type: "command", content: "set param slowMA 26", timestamp: "09:37:30" },
    { type: "response", content: "Parameter slowMA set to 26", timestamp: "09:37:31" },
    { type: "command", content: "run backtest", timestamp: "09:38:02" },
    { type: "response", content: "Backtest completed. Results: Sharpe: 1.82, Win Rate: 68.2%, Profit Factor: 2.14", timestamp: "09:38:10" },
  ]);
  
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    if (currentCommand.trim() === "") return;

    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    setCommandHistory((prev) => [
      ...prev,
      { type: "command", content: currentCommand, timestamp },
    ]);

    // Simple response logic - in a real app, this would process the command
    let response;
    if (currentCommand.toLowerCase() === "help") {
      response = "Available commands: load <file>, set strategy <name>, set param <name> <value>, run backtest, show results";
    } else if (currentCommand.toLowerCase().startsWith("load")) {
      response = `Loaded data from ${currentCommand.split(" ")[1]}`;
    } else if (currentCommand.toLowerCase().startsWith("set strategy")) {
      response = `Strategy set to ${currentCommand.split(" ")[2]}`;
    } else if (currentCommand.toLowerCase().startsWith("set param")) {
      const parts = currentCommand.split(" ");
      response = `Parameter ${parts[2]} set to ${parts[3]}`;
    } else if (currentCommand.toLowerCase() === "run backtest") {
      response = "Running backtest...";
      setTimeout(() => {
        setCommandHistory((prev) => [
          ...prev,
          { type: "response", content: "Backtest completed. Results: Sharpe: 1.85, Win Rate: 69.1%, Profit Factor: 2.21", timestamp: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${(now.getSeconds() + 2).toString().padStart(2, '0')}` },
        ]);
      }, 1500);
    } else {
      response = `Command not recognized: ${currentCommand}`;
    }

    if (response) {
      setCommandHistory((prev) => [
        ...prev,
        { type: "response", content: response, timestamp },
      ]);
    }

    setCurrentCommand("");
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Terminal className="h-5 w-5 mr-2" />
            Interactive Console
          </CardTitle>
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-4rem)]">
        <div className="console-container bg-gray-900 dark:bg-gray-900 text-gray-200 h-full">
          {commandHistory.map((entry, index) => (
            <div
              key={index}
              className={`mb-1 ${
                entry.type === "system"
                  ? "text-blue-400"
                  : entry.type === "command"
                  ? "text-sentio-orange"
                  : "text-gray-200"
              }`}
            >
              <span className="text-gray-500 mr-2">[{entry.timestamp}]</span>
              {entry.type === "command" && <span className="text-green-400">$ </span>}
              {entry.content}
            </div>
          ))}
          <form onSubmit={handleCommand} className="mt-2 flex">
            <span className="text-green-400 mr-2">$</span>
            <Input
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              className="console-input flex-1"
              placeholder="Enter command..."
            />
            <Button type="submit" variant="ghost" size="icon" className="ml-2">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}

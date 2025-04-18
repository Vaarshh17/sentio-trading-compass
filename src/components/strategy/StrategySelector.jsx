
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Check, Star } from "lucide-react";

// Mock strategy data
const strategies = [
  {
    id: 1,
    name: "Moving Average Crossover",
    description: "Classic strategy using fast and slow moving averages",
    category: "Technical",
    emotionalFactor: "Low",
    favorite: true,
  },
  {
    id: 2,
    name: "LSTM Neural Network",
    description: "Deep learning model for price prediction",
    category: "Machine Learning",
    emotionalFactor: "Medium",
    favorite: false,
  },
  {
    id: 3,
    name: "RSI with Emotional Filter",
    description: "RSI with additional emotional analysis overlay",
    category: "Technical + Emotional",
    emotionalFactor: "High",
    favorite: true,
  },
  {
    id: 4,
    name: "Sentiment Analysis",
    description: "Trading based on market sentiment indicators",
    category: "Emotional",
    emotionalFactor: "Very High",
    favorite: false,
  },
  {
    id: 5,
    name: "Multi-factor Model",
    description: "Blend of technical, fundamental and emotional factors",
    category: "Mixed",
    emotionalFactor: "Medium",
    favorite: false,
  },
];

export default function StrategySelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  
  const filteredStrategies = strategies.filter(
    (strategy) =>
      strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strategy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strategy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Strategy Selection</CardTitle>
        <CardDescription>Choose a trading strategy to configure and test</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search strategies..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
          {filteredStrategies.map((strategy) => (
            <div
              key={strategy.id}
              className={`p-3 border rounded-md cursor-pointer transition-colors ${
                selectedStrategy === strategy.id
                  ? "border-sentio-orange bg-sentio-orange/10"
                  : "hover:border-border hover:bg-secondary/50"
              }`}
              onClick={() => setSelectedStrategy(strategy.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium flex items-center">
                    {strategy.name}
                    {strategy.favorite && (
                      <Star className="h-3 w-3 ml-2 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {strategy.description}
                  </p>
                </div>
                {selectedStrategy === strategy.id && (
                  <Check className="h-5 w-5 text-sentio-orange" />
                )}
              </div>
              <div className="flex mt-2 gap-2">
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                  {strategy.category}
                </span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                  Emotional: {strategy.emotionalFactor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

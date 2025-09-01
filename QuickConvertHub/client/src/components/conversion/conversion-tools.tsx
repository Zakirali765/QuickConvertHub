import { useState } from "react";
import { Button } from "@/components/ui/button";
import UnitConverter from "./unit-converter";
import CurrencyConverter from "./currency-converter";
import TimezoneConverter from "./timezone-converter";
import CustomUnits from "./custom-units";
import ConversionHistory from "./conversion-history";
import { Ruler, DollarSign, Clock, Plus } from "lucide-react";

type ToolType = "units" | "currency" | "timezone" | "custom";

export default function ConversionTools() {
  const [activeTool, setActiveTool] = useState<ToolType>("units");

  const tools = [
    { id: "units" as const, label: "Units", icon: Ruler },
    { id: "currency" as const, label: "Currency", icon: DollarSign },
    { id: "timezone" as const, label: "Time Zone", icon: Clock },
    { id: "custom" as const, label: "Custom", icon: Plus },
  ];

  const renderTool = () => {
    switch (activeTool) {
      case "units":
        return <UnitConverter />;
      case "currency":
        return <CurrencyConverter />;
      case "timezone":
        return <TimezoneConverter />;
      case "custom":
        return <CustomUnits />;
      default:
        return <UnitConverter />;
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Conversion Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive collection of conversion tools designed for accuracy and speed.
          </p>
        </div>
        
        {/* Tool Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                variant={activeTool === tool.id ? "default" : "secondary"}
                className="gap-2"
                data-testid={`tab-${tool.id}`}
              >
                <Icon className="h-4 w-4" />
                {tool.label}
              </Button>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main conversion interface */}
          <div className="lg:col-span-2">
            {renderTool()}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <ConversionHistory />
            
            {/* AdSense - Sidebar Ad */}
            <div className="ad-placeholder h-64 flex items-center justify-center rounded-lg">
              <span className="text-muted-foreground text-sm">{/* AdSense Rectangle 300x250 */}</span>
            </div>
            
            {/* Common Conversions */}
            <div className="bg-card rounded-xl shadow-lg border border-border p-6">
              <h4 className="font-semibold text-foreground mb-4">Common Conversions</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 meter</span>
                  <span className="text-foreground font-medium">3.28 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 kilometer</span>
                  <span className="text-foreground font-medium">0.62 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 pound</span>
                  <span className="text-foreground font-medium">0.45 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">0°C</span>
                  <span className="text-foreground font-medium">32°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

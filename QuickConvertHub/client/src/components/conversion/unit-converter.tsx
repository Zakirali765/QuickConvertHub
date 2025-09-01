import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, Copy, History } from "lucide-react";
import { convertUnits, UNIT_CATEGORIES } from "@/lib/conversion-utils";
import { useConversions } from "@/hooks/use-conversions";
import { useToast } from "@/hooks/use-toast";

export default function UnitConverter() {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const { createConversion } = useConversions();
  const { toast } = useToast();

  useEffect(() => {
    if (fromValue && !isNaN(parseFloat(fromValue))) {
      try {
        const result = convertUnits(parseFloat(fromValue), fromUnit, toUnit, category);
        setToValue(result.toString());
      } catch (error) {
        setToValue("Error");
      }
    } else {
      setToValue("");
    }
  }, [fromValue, fromUnit, toUnit, category]);

  useEffect(() => {
    // Reset units when category changes
    const units = UNIT_CATEGORIES[category as keyof typeof UNIT_CATEGORIES]?.units || [];
    if (units.length >= 2) {
      setFromUnit(units[0]);
      setToUnit(units[1]);
    }
  }, [category]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  const handleCopy = async () => {
    if (toValue && toValue !== "Error") {
      try {
        await navigator.clipboard.writeText(`${fromValue} ${fromUnit} = ${toValue} ${toUnit}`);
        toast({
          title: "Copied to clipboard",
          description: "Conversion result copied successfully",
        });
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Unable to copy to clipboard",
          variant: "destructive",
        });
      }
    }
  };

  const handleSaveToHistory = () => {
    if (fromValue && toValue && toValue !== "Error") {
      createConversion({
        type: "unit",
        fromValue,
        fromUnit,
        toValue,
        toUnit,
      });
      toast({
        title: "Saved to history",
        description: "Conversion saved to your history",
      });
    }
  };

  const currentCategory = UNIT_CATEGORIES[category as keyof typeof UNIT_CATEGORIES];

  return (
    <Card className="shadow-lg border border-border">
      <CardHeader>
        <CardTitle className="text-xl">Unit Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Selection */}
        <div>
          <Label className="text-sm font-medium">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger data-testid="select-category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(UNIT_CATEGORIES).map(([key, cat]) => (
                <SelectItem key={key} value={key}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Conversion Interface */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger data-testid="select-from-unit">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentCategory?.units.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Enter value"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              data-testid="input-from-value"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger data-testid="select-to-unit">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentCategory?.units.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              readOnly
              value={toValue}
              className="font-medium bg-muted"
              data-testid="input-to-value"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleSwap}
            variant="default"
            size="sm"
            className="gap-2"
            data-testid="button-swap"
          >
            <ArrowRightLeft className="h-4 w-4" />
            Swap
          </Button>
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="sm"
            className="gap-2"
            disabled={!toValue || toValue === "Error"}
            data-testid="button-copy"
          >
            <Copy className="h-4 w-4" />
            Copy Result
          </Button>
          <Button
            onClick={handleSaveToHistory}
            variant="outline"
            size="sm"
            className="gap-2"
            disabled={!toValue || toValue === "Error"}
            data-testid="button-save-history"
          >
            <History className="h-4 w-4" />
            Save to History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

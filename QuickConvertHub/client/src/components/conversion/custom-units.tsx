import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { useCustomUnits } from "@/hooks/use-conversions";
import { useToast } from "@/hooks/use-toast";

const BASE_UNITS = [
  { value: "meter", label: "Meter (Length)" },
  { value: "kilogram", label: "Kilogram (Weight)" },
  { value: "second", label: "Second (Time)" },
  { value: "liter", label: "Liter (Volume)" },
];

export default function CustomUnits() {
  const [unitName, setUnitName] = useState("");
  const [baseUnit, setBaseUnit] = useState("meter");
  const [conversionFactor, setConversionFactor] = useState("");
  const { customUnits, createCustomUnit, isCreating } = useCustomUnits();
  const { toast } = useToast();

  const handleCreate = () => {
    if (!unitName || !conversionFactor || isNaN(parseFloat(conversionFactor))) {
      toast({
        title: "Invalid input",
        description: "Please fill in all fields with valid values",
        variant: "destructive",
      });
      return;
    }

    createCustomUnit({
      name: unitName,
      baseUnit,
      conversionFactor,
    });

    // Reset form
    setUnitName("");
    setConversionFactor("");
    
    toast({
      title: "Custom unit created",
      description: `${unitName} has been added to your custom units`,
    });
  };

  return (
    <Card className="shadow-lg border border-border">
      <CardHeader>
        <CardTitle className="text-xl">Custom Unit Creator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Unit Name</Label>
              <Input
                type="text"
                placeholder="e.g., Football Field"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                data-testid="input-unit-name"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium">Base Unit</Label>
              <Select value={baseUnit} onValueChange={setBaseUnit}>
                <SelectTrigger data-testid="select-base-unit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BASE_UNITS.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium">Conversion Factor</Label>
              <Input
                type="number"
                placeholder="e.g., 91.44"
                value={conversionFactor}
                onChange={(e) => setConversionFactor(e.target.value)}
                data-testid="input-conversion-factor"
              />
              <p className="text-xs text-muted-foreground mt-1">
                How many base units equal one of your custom units
              </p>
            </div>

            <Button
              onClick={handleCreate}
              disabled={isCreating}
              className="w-full gap-2"
              data-testid="button-create-unit"
            >
              <Plus className="h-4 w-4" />
              {isCreating ? "Creating..." : "Create Custom Unit"}
            </Button>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Your Custom Units</h4>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {customUnits.length === 0 ? (
                <p className="text-muted-foreground text-sm">No custom units created yet</p>
              ) : (
                customUnits.map((unit) => (
                  <div
                    key={unit.id}
                    className="p-3 bg-muted rounded-lg"
                    data-testid={`custom-unit-${unit.id}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground">{unit.name}</div>
                        <div className="text-muted-foreground text-sm">
                          1 {unit.name} = {unit.conversionFactor} {unit.baseUnit}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive h-8 w-8 p-0"
                        data-testid={`button-delete-unit-${unit.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

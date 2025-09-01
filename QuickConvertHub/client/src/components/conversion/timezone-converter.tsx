import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, Copy, History } from "lucide-react";
import { convertTimezone, TIMEZONE_OFFSETS } from "@/lib/conversion-utils";
import { useConversions } from "@/hooks/use-conversions";
import { useToast } from "@/hooks/use-toast";

const TIMEZONES = Object.keys(TIMEZONE_OFFSETS).map(tz => ({
  code: tz,
  name: `${tz} (GMT${TIMEZONE_OFFSETS[tz as keyof typeof TIMEZONE_OFFSETS] >= 0 ? '+' : ''}${TIMEZONE_OFFSETS[tz as keyof typeof TIMEZONE_OFFSETS]})`
}));

export default function TimezoneConverter() {
  const [fromTimezone, setFromTimezone] = useState("UTC");
  const [toTimezone, setToTimezone] = useState("PST");
  const [inputDateTime, setInputDateTime] = useState("");
  const [outputDateTime, setOutputDateTime] = useState("");
  const { createConversion } = useConversions();
  const { toast } = useToast();

  useEffect(() => {
    // Set default to current time in local timezone
    const now = new Date();
    const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    setInputDateTime(localDateTime);
  }, []);

  useEffect(() => {
    if (inputDateTime) {
      try {
        const inputDate = new Date(inputDateTime);
        const convertedDate = convertTimezone(inputDate, fromTimezone, toTimezone);
        const outputString = convertedDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        });
        setOutputDateTime(outputString);
      } catch (error) {
        setOutputDateTime("Invalid date");
      }
    } else {
      setOutputDateTime("");
    }
  }, [inputDateTime, fromTimezone, toTimezone]);

  const handleSwap = () => {
    setFromTimezone(toTimezone);
    setToTimezone(fromTimezone);
  };

  const handleCopy = async () => {
    if (outputDateTime && outputDateTime !== "Invalid date") {
      try {
        await navigator.clipboard.writeText(`${inputDateTime} ${fromTimezone} = ${outputDateTime}`);
        toast({
          title: "Copied to clipboard",
          description: "Time conversion result copied successfully",
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
    if (inputDateTime && outputDateTime && outputDateTime !== "Invalid date") {
      createConversion({
        type: "timezone",
        fromValue: inputDateTime,
        fromUnit: fromTimezone,
        toValue: outputDateTime,
        toUnit: toTimezone,
      });
      toast({
        title: "Saved to history",
        description: "Time conversion saved to your history",
      });
    }
  };

  return (
    <Card className="shadow-lg border border-border">
      <CardHeader>
        <CardTitle className="text-xl">Time Zone Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">From Time Zone</Label>
            <Select value={fromTimezone} onValueChange={setFromTimezone}>
              <SelectTrigger data-testid="select-from-timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz.code} value={tz.code}>
                    {tz.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="datetime-local"
              value={inputDateTime}
              onChange={(e) => setInputDateTime(e.target.value)}
              data-testid="input-datetime"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">To Time Zone</Label>
            <Select value={toTimezone} onValueChange={setToTimezone}>
              <SelectTrigger data-testid="select-to-timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz.code} value={tz.code}>
                    {tz.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              readOnly
              value={outputDateTime}
              className="font-medium bg-muted"
              data-testid="output-datetime"
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
            data-testid="button-swap-timezone"
          >
            <ArrowRightLeft className="h-4 w-4" />
            Swap
          </Button>
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="sm"
            className="gap-2"
            disabled={!outputDateTime || outputDateTime === "Invalid date"}
            data-testid="button-copy-timezone"
          >
            <Copy className="h-4 w-4" />
            Copy Result
          </Button>
          <Button
            onClick={handleSaveToHistory}
            variant="outline"
            size="sm"
            className="gap-2"
            disabled={!outputDateTime || outputDateTime === "Invalid date"}
            data-testid="button-save-timezone-history"
          >
            <History className="h-4 w-4" />
            Save to History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

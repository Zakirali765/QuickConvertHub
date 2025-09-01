import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, Copy, History } from "lucide-react";
import { useExchangeRates, useConversions } from "@/hooks/use-conversions";
import { useToast } from "@/hooks/use-toast";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "INR", name: "Indian Rupee" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "KRW", name: "South Korean Won" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "ZAR", name: "South African Rand" },
  { code: "TRY", name: "Turkish Lira" },
];

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const { rates, isLoading } = useExchangeRates();
  const { createConversion } = useConversions();
  const { toast } = useToast();

  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount)) && rates) {
      const fromRates = (rates as any)[fromCurrency];
      if (fromRates && typeof fromRates[toCurrency] === 'number') {
        const rate = fromRates[toCurrency];
        const result = parseFloat(fromAmount) * rate;
        setToAmount(result.toFixed(4));
      } else {
        setToAmount("");
      }
    } else {
      setToAmount("");
    }
  }, [fromAmount, fromCurrency, toCurrency, rates]);

  const handleSwap = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleCopy = async () => {
    if (toAmount) {
      try {
        await navigator.clipboard.writeText(`${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`);
        toast({
          title: "Copied to clipboard",
          description: "Currency conversion result copied successfully",
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
    if (fromAmount && toAmount) {
      createConversion({
        type: "currency",
        fromValue: fromAmount,
        fromUnit: fromCurrency,
        toValue: toAmount,
        toUnit: toCurrency,
      });
      toast({
        title: "Saved to history",
        description: "Currency conversion saved to your history",
      });
    }
  };

  const exchangeRate = rates ? (rates as any)[fromCurrency]?.[toCurrency] : null;

  return (
    <Card className="shadow-lg border border-border">
      <CardHeader>
        <CardTitle className="text-xl">Currency Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">From</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger data-testid="select-from-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Enter amount"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              data-testid="input-from-amount"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">To</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger data-testid="select-to-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              readOnly
              value={toAmount}
              className="font-medium bg-muted"
              data-testid="input-to-amount"
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        {exchangeRate && (
          <div className="bg-muted rounded-lg p-4">
            <div className="text-sm text-muted-foreground">
              Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Last updated: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleSwap}
            variant="default"
            size="sm"
            className="gap-2"
            data-testid="button-swap-currency"
          >
            <ArrowRightLeft className="h-4 w-4" />
            Swap
          </Button>
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="sm"
            className="gap-2"
            disabled={!toAmount}
            data-testid="button-copy-currency"
          >
            <Copy className="h-4 w-4" />
            Copy Result
          </Button>
          <Button
            onClick={handleSaveToHistory}
            variant="outline"
            size="sm"
            className="gap-2"
            disabled={!toAmount}
            data-testid="button-save-currency-history"
          >
            <History className="h-4 w-4" />
            Save to History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

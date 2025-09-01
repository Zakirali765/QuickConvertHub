import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConversions } from "@/hooks/use-conversions";
import { formatDistanceToNow } from "date-fns";

export default function ConversionHistory() {
  const { conversions, isLoading } = useConversions();

  if (isLoading) {
    return (
      <Card className="shadow-lg border border-border">
        <CardHeader>
          <CardTitle className="text-lg">Recent Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-3 bg-muted rounded-lg animate-pulse">
                <div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border border-border">
      <CardHeader>
        <CardTitle className="text-lg">Recent Conversions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {conversions.length === 0 ? (
            <p className="text-muted-foreground text-sm">No conversions yet</p>
          ) : (
            conversions.slice(0, 5).map((conversion) => (
              <div
                key={conversion.id}
                className="p-3 bg-muted rounded-lg text-sm"
                data-testid={`history-item-${conversion.id}`}
              >
                <div className="font-medium text-foreground">
                  {conversion.fromValue} {conversion.fromUnit} → {conversion.toValue} {conversion.toUnit}
                </div>
                <div className="text-muted-foreground text-xs">
                  {conversion.createdAt 
                    ? formatDistanceToNow(new Date(conversion.createdAt), { addSuffix: true })
                    : "Just now"
                  }
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

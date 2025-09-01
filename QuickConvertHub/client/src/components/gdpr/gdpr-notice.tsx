import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GDPRNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("gdprAccepted");
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
    // Implement cookie-free experience if needed
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 z-50 transform transition-transform duration-300"
      data-testid="gdpr-notice"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience and for analytics. By continuing to use our site, you agree to our Privacy Policy.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button
            onClick={handleAccept}
            variant="secondary"
            size="sm"
            className="bg-white dark:bg-white text-primary hover:bg-gray-100 dark:hover:bg-gray-100"
            data-testid="gdpr-accept"
          >
            Accept
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-primary"
            data-testid="gdpr-decline"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}

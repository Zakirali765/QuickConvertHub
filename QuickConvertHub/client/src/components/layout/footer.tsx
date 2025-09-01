import { Link } from "wouter";
import { ArrowRightLeft, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ArrowRightLeft className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">QuickConvert</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional conversion tools for units, currencies, and time zones. Fast, accurate, and always free.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tools</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/#tools" className="hover:text-primary transition-colors">
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link href="/#tools" className="hover:text-primary transition-colors">
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link href="/#tools" className="hover:text-primary transition-colors">
                  Time Zone Converter
                </Link>
              </li>
              <li>
                <Link href="/#tools" className="hover:text-primary transition-colors">
                  Custom Units
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} QuickConvert. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for accurate conversions
          </p>
        </div>
      </div>
    </footer>
  );
}

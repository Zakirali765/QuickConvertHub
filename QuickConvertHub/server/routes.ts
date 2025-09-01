import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConversionSchema, insertCustomUnitSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Conversion endpoints
  app.post("/api/conversions", async (req, res) => {
    try {
      const conversion = insertConversionSchema.parse(req.body);
      const result = await storage.createConversion(conversion);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid conversion data" });
    }
  });

  app.get("/api/conversions", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      const conversions = await storage.getConversions(userId);
      res.json(conversions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch conversions" });
    }
  });

  app.get("/api/conversions/recent", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const conversions = await storage.getRecentConversions(limit);
      res.json(conversions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent conversions" });
    }
  });

  // Custom units endpoints
  app.post("/api/custom-units", async (req, res) => {
    try {
      const unit = insertCustomUnitSchema.parse(req.body);
      const result = await storage.createCustomUnit(unit);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid custom unit data" });
    }
  });

  app.get("/api/custom-units", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      const units = await storage.getCustomUnits(userId);
      res.json(units);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch custom units" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertContactMessageSchema.parse(req.body);
      const result = await storage.createContactMessage(message);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  // Currency exchange rates (mock endpoint for demo)
  app.get("/api/exchange-rates", async (req, res) => {
    try {
      // In production, this would fetch from a real API
      const rates = {
        USD: { 
          EUR: 0.8523, GBP: 0.7845, JPY: 151.23, CAD: 1.3456, AUD: 1.5234, CHF: 0.8876, CNY: 7.2345,
          PKR: 278.50, INR: 83.25, SGD: 1.3456, HKD: 7.8234, KRW: 1342.50, MXN: 17.25, BRL: 5.12, RUB: 95.50, ZAR: 18.75, TRY: 32.10
        },
        EUR: { 
          USD: 1.1734, GBP: 0.9204, JPY: 177.45, CAD: 1.5789, AUD: 1.7876, CHF: 1.0414, CNY: 8.4876,
          PKR: 326.80, INR: 97.65, SGD: 1.5789, HKD: 9.1789, KRW: 1575.20, MXN: 20.23, BRL: 6.01, RUB: 112.10, ZAR: 22.00, TRY: 37.67
        },
        GBP: { 
          USD: 1.2748, EUR: 1.0865, JPY: 192.87, CAD: 1.7156, AUD: 1.9432, CHF: 1.1318, CNY: 9.2234,
          PKR: 355.20, INR: 106.15, SGD: 1.7156, HKD: 9.9756, KRW: 1711.80, MXN: 21.99, BRL: 6.53, RUB: 121.80, ZAR: 23.91, TRY: 40.95
        },
        JPY: { 
          USD: 0.0066, EUR: 0.0056, GBP: 0.0052, CAD: 0.0089, AUD: 0.0101, CHF: 0.0059, CNY: 0.0478,
          PKR: 1.8420, INR: 0.5503, SGD: 0.0089, HKD: 0.0517, KRW: 8.8756, MXN: 0.1140, BRL: 0.0338, RUB: 0.6315, ZAR: 0.1240, TRY: 0.2123
        },
        CAD: { 
          USD: 0.7432, EUR: 0.6334, GBP: 0.5827, JPY: 112.43, AUD: 1.1324, CHF: 0.6598, CNY: 5.3756,
          PKR: 206.90, INR: 61.86, SGD: 1.0001, HKD: 5.8134, KRW: 997.80, MXN: 12.82, BRL: 3.80, RUB: 70.98, ZAR: 13.93, TRY: 23.85
        },
        AUD: { 
          USD: 0.6564, EUR: 0.5593, GBP: 0.5146, JPY: 99.24, CAD: 0.8831, CHF: 0.5826, CNY: 4.7456,
          PKR: 182.70, INR: 54.62, SGD: 0.8831, HKD: 5.1324, KRW: 881.20, MXN: 11.32, BRL: 3.36, RUB: 62.65, ZAR: 12.30, TRY: 21.05
        },
        CHF: { 
          USD: 1.1267, EUR: 0.9602, GBP: 0.8835, JPY: 170.34, CAD: 1.5156, AUD: 1.7168, CNY: 8.1456,
          PKR: 313.70, INR: 93.78, SGD: 1.5156, HKD: 8.8134, KRW: 1512.30, MXN: 19.44, BRL: 5.77, RUB: 107.56, ZAR: 21.11, TRY: 36.15
        },
        CNY: { 
          USD: 0.1382, EUR: 0.1178, GBP: 0.1084, JPY: 20.90, CAD: 0.1861, AUD: 0.2107, CHF: 0.1228,
          PKR: 38.48, INR: 11.51, SGD: 0.1861, HKD: 1.0815, KRW: 185.60, MXN: 2.38, BRL: 0.708, RUB: 13.20, ZAR: 2.59, TRY: 4.44
        },
        PKR: { 
          USD: 0.0036, EUR: 0.0031, GBP: 0.0028, JPY: 0.5430, CAD: 0.0048, AUD: 0.0055, CHF: 0.0032, CNY: 0.0260,
          INR: 0.2990, SGD: 0.0048, HKD: 0.0281, KRW: 4.82, MXN: 0.0619, BRL: 0.0184, RUB: 0.3430, ZAR: 0.0673, TRY: 0.1153
        },
        INR: { 
          USD: 0.0120, EUR: 0.0102, GBP: 0.0094, JPY: 1.8157, CAD: 0.0162, AUD: 0.0183, CHF: 0.0107, CNY: 0.0869,
          PKR: 3.3456, SGD: 0.0162, HKD: 0.0940, KRW: 16.12, MXN: 0.2071, BRL: 0.0615, RUB: 1.1470, ZAR: 0.2252, TRY: 0.3856
        },
        SGD: { 
          USD: 0.7432, EUR: 0.6334, GBP: 0.5827, JPY: 112.43, CAD: 0.9999, AUD: 1.1324, CHF: 0.6598, CNY: 5.3756,
          PKR: 206.90, INR: 61.86, HKD: 5.8134, KRW: 997.80, MXN: 12.82, BRL: 3.80, RUB: 70.98, ZAR: 13.93, TRY: 23.85
        },
        HKD: { 
          USD: 0.1278, EUR: 0.1089, GBP: 0.1002, JPY: 19.33, CAD: 0.1721, AUD: 0.1949, CHF: 0.1135, CNY: 0.9246,
          PKR: 35.59, INR: 10.64, SGD: 0.1721, KRW: 171.65, MXN: 2.21, BRL: 0.655, RUB: 12.21, ZAR: 2.40, TRY: 4.10
        },
        KRW: { 
          USD: 0.00074, EUR: 0.00063, GBP: 0.00058, JPY: 0.1127, CAD: 0.0010, AUD: 0.0011, CHF: 0.00066, CNY: 0.0054,
          PKR: 0.207, INR: 0.062, SGD: 0.0010, HKD: 0.0058, MXN: 0.0129, BRL: 0.0038, RUB: 0.0711, ZAR: 0.0140, TRY: 0.0239
        },
        MXN: { 
          USD: 0.0580, EUR: 0.0494, GBP: 0.0455, JPY: 8.77, CAD: 0.0780, AUD: 0.0883, CHF: 0.0514, CNY: 0.4189,
          PKR: 16.14, INR: 4.83, SGD: 0.0780, HKD: 0.4534, KRW: 77.81, BRL: 0.297, RUB: 5.54, ZAR: 1.09, TRY: 1.86
        },
        BRL: { 
          USD: 0.1953, EUR: 0.1664, GBP: 0.1531, JPY: 29.54, CAD: 0.2632, AUD: 0.2976, CHF: 0.1733, CNY: 1.4115,
          PKR: 54.39, INR: 16.26, SGD: 0.2632, HKD: 1.5278, KRW: 262.11, MXN: 3.37, RUB: 18.65, ZAR: 3.66, TRY: 6.27
        },
        RUB: { 
          USD: 0.0105, EUR: 0.0089, GBP: 0.0082, JPY: 1.58, CAD: 0.0141, AUD: 0.0160, CHF: 0.0093, CNY: 0.0758,
          PKR: 2.92, INR: 0.872, SGD: 0.0141, HKD: 0.0819, KRW: 14.05, MXN: 0.181, BRL: 0.0536, ZAR: 0.196, TRY: 0.336
        },
        ZAR: { 
          USD: 0.0533, EUR: 0.0455, GBP: 0.0418, JPY: 8.07, CAD: 0.0718, AUD: 0.0813, CHF: 0.0474, CNY: 0.3862,
          PKR: 14.86, INR: 4.44, SGD: 0.0718, HKD: 0.4171, KRW: 71.58, MXN: 0.920, BRL: 0.273, RUB: 5.09, TRY: 1.71
        },
        TRY: { 
          USD: 0.0311, EUR: 0.0265, GBP: 0.0244, JPY: 4.71, CAD: 0.0419, AUD: 0.0475, CHF: 0.0277, CNY: 0.2252,
          PKR: 8.67, INR: 2.59, SGD: 0.0419, HKD: 0.2438, KRW: 41.82, MXN: 0.537, BRL: 0.160, RUB: 2.98, ZAR: 0.585
        },
        lastUpdated: new Date().toISOString()
      };
      res.json(rates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch exchange rates" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

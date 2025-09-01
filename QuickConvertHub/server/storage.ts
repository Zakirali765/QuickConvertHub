import { 
  type User, 
  type InsertUser, 
  type Conversion, 
  type InsertConversion,
  type CustomUnit,
  type InsertCustomUnit,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createConversion(conversion: InsertConversion): Promise<Conversion>;
  getConversions(userId?: string): Promise<Conversion[]>;
  getRecentConversions(limit?: number): Promise<Conversion[]>;
  
  createCustomUnit(unit: InsertCustomUnit): Promise<CustomUnit>;
  getCustomUnits(userId?: string): Promise<CustomUnit[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private conversions: Map<string, Conversion>;
  private customUnits: Map<string, CustomUnit>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.conversions = new Map();
    this.customUnits = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConversion(insertConversion: InsertConversion): Promise<Conversion> {
    const id = randomUUID();
    const conversion: Conversion = { 
      ...insertConversion, 
      id, 
      userId: insertConversion.userId || null,
      createdAt: new Date() 
    };
    this.conversions.set(id, conversion);
    return conversion;
  }

  async getConversions(userId?: string): Promise<Conversion[]> {
    const conversions = Array.from(this.conversions.values());
    if (userId) {
      return conversions.filter(c => c.userId === userId);
    }
    return conversions;
  }

  async getRecentConversions(limit: number = 10): Promise<Conversion[]> {
    const conversions = Array.from(this.conversions.values());
    return conversions
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async createCustomUnit(insertUnit: InsertCustomUnit): Promise<CustomUnit> {
    const id = randomUUID();
    const unit: CustomUnit = { 
      ...insertUnit, 
      id, 
      userId: insertUnit.userId || null,
      createdAt: new Date() 
    };
    this.customUnits.set(id, unit);
    return unit;
  }

  async getCustomUnits(userId?: string): Promise<CustomUnit[]> {
    const units = Array.from(this.customUnits.values());
    if (userId) {
      return units.filter(u => u.userId === userId);
    }
    return units;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();

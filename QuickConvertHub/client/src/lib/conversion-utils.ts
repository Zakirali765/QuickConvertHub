// Unit conversion factors (to meters)
const LENGTH_UNITS = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
};

// Weight conversion factors (to grams)
const WEIGHT_UNITS = {
  gram: 1,
  kilogram: 1000,
  pound: 453.592,
  ounce: 28.3495,
  ton: 1000000,
};

// Volume conversion factors (to liters)
const VOLUME_UNITS = {
  liter: 1,
  milliliter: 0.001,
  gallon: 3.78541,
  quart: 0.946353,
  pint: 0.473176,
  cup: 0.236588,
  fluid_ounce: 0.0295735,
};

// Temperature conversions
export function convertTemperature(value: number, from: string, to: string): number {
  let celsius: number;
  
  // Convert to Celsius first
  switch (from.toLowerCase()) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      throw new Error(`Unknown temperature unit: ${from}`);
  }
  
  // Convert from Celsius to target unit
  switch (to.toLowerCase()) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return celsius * 9/5 + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      throw new Error(`Unknown temperature unit: ${to}`);
  }
}

export function convertUnits(value: number, from: string, to: string, category: string): number {
  const val = parseFloat(value.toString());
  
  if (isNaN(val)) {
    return 0;
  }

  if (category === 'temperature') {
    return convertTemperature(val, from, to);
  }

  let conversionTable: Record<string, number>;
  
  switch (category) {
    case 'length':
      conversionTable = LENGTH_UNITS;
      break;
    case 'weight':
      conversionTable = WEIGHT_UNITS;
      break;
    case 'volume':
      conversionTable = VOLUME_UNITS;
      break;
    default:
      throw new Error(`Unknown category: ${category}`);
  }

  const fromFactor = conversionTable[from];
  const toFactor = conversionTable[to];
  
  if (!fromFactor || !toFactor) {
    throw new Error(`Unknown unit conversion: ${from} to ${to}`);
  }
  
  // Convert to base unit, then to target unit
  const baseValue = val * fromFactor;
  const result = baseValue / toFactor;
  
  return Math.round(result * 100000) / 100000; // Round to 5 decimal places
}

export const UNIT_CATEGORIES = {
  length: {
    name: 'Length',
    units: Object.keys(LENGTH_UNITS),
  },
  weight: {
    name: 'Weight',
    units: Object.keys(WEIGHT_UNITS),
  },
  volume: {
    name: 'Volume', 
    units: Object.keys(VOLUME_UNITS),
  },
  temperature: {
    name: 'Temperature',
    units: ['celsius', 'fahrenheit', 'kelvin'],
  },
};

export const TIMEZONE_OFFSETS = {
  'UTC': 0,
  'EST': -5,
  'PST': -8,
  'CET': 1,
  'JST': 9,
  'IST': 5.5,
  'CST': -6,
  'MST': -7,
  'AST': -4,
  'HST': -10,
};

export function convertTimezone(date: Date, fromTz: string, toTz: string): Date {
  const fromOffset = TIMEZONE_OFFSETS[fromTz as keyof typeof TIMEZONE_OFFSETS] || 0;
  const toOffset = TIMEZONE_OFFSETS[toTz as keyof typeof TIMEZONE_OFFSETS] || 0;
  
  // Convert from source timezone to UTC: subtract the source offset
  const utcTime = date.getTime() - (fromOffset * 60 * 60 * 1000);
  // Convert from UTC to target timezone: add the target offset
  const targetTime = utcTime + (toOffset * 60 * 60 * 1000);
  
  return new Date(targetTime);
}

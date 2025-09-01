export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-unit-conversions",
    title: "Ultimate Guide to Unit Conversions: Master Length, Weight, and Temperature",
    description: "Master the art of unit conversions with our comprehensive guide covering length, weight, temperature, and more. Learn the fundamentals and avoid common mistakes.",
    date: "December 30, 2024",
    readTime: "8 min read",
    category: "Conversions",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "QuickConvert Team",
    content: `
# Ultimate Guide to Unit Conversions: Master Length, Weight, and Temperature

Converting units is a fundamental skill that we use in everyday life, from cooking recipes to international travel. Whether you're a student, professional, or just someone who wants to understand measurements better, this comprehensive guide will help you master unit conversions.

## Understanding the Basics of Unit Conversion

Unit conversion is the process of changing a measurement from one unit to another while maintaining the same quantity. For example, converting 1 meter to 3.28 feet doesn't change the actual distance – just how we express it.

### Why Unit Conversions Matter

In our globalized world, different countries and industries use different measurement systems. The United States primarily uses the Imperial system (feet, pounds, Fahrenheit), while most of the world uses the Metric system (meters, kilograms, Celsius). Being able to convert between these systems is essential for:

- International business and trade
- Scientific research and collaboration  
- Travel and navigation
- Cooking and recipes
- Engineering and construction projects

## Length Conversions: From Millimeters to Miles

Length is one of the most commonly converted measurements. Here are the key relationships you need to know:

### Metric System (Base: Meter)
- 1 kilometer = 1,000 meters
- 1 meter = 100 centimeters
- 1 centimeter = 10 millimeters

### Imperial System (Base: Foot)
- 1 mile = 5,280 feet
- 1 yard = 3 feet
- 1 foot = 12 inches

### Key Metric-Imperial Conversions
- 1 meter = 3.28084 feet
- 1 kilometer = 0.621371 miles
- 1 inch = 2.54 centimeters

### Practical Tips for Length Conversions

When converting lengths, remember these handy approximations:
- A meter is roughly a yard (actually 10% longer)
- A kilometer is about 5/8 of a mile
- An inch is approximately 2.5 centimeters

## Weight and Mass Conversions: Grams to Pounds

Weight conversions are crucial for cooking, shipping, and scientific applications.

### Metric System (Base: Gram)
- 1 kilogram = 1,000 grams
- 1 metric ton = 1,000 kilograms

### Imperial System (Base: Pound)
- 1 pound = 16 ounces
- 1 ton = 2,000 pounds

### Key Metric-Imperial Conversions
- 1 kilogram = 2.20462 pounds
- 1 pound = 453.592 grams
- 1 ounce = 28.3495 grams

### Memory Tricks for Weight Conversions

- A kilogram is about 2.2 pounds (remember "kilo = 2.2")
- An ounce is roughly 30 grams
- A pound is approximately 450 grams

## Temperature Conversions: Celsius, Fahrenheit, and Kelvin

Temperature conversions require formulas rather than simple multiplication factors.

### Celsius to Fahrenheit
°F = (°C × 9/5) + 32

### Fahrenheit to Celsius  
°C = (°F - 32) × 5/9

### Celsius to Kelvin
K = °C + 273.15

### Key Temperature Reference Points
- Water freezes: 0°C = 32°F = 273.15K
- Water boils: 100°C = 212°F = 373.15K
- Room temperature: ~20°C = ~68°F = ~293K
- Body temperature: 37°C = 98.6°F = 310K

## Common Conversion Mistakes to Avoid

### 1. Confusing Weight and Mass
In everyday language, we often use "weight" and "mass" interchangeably, but they're different in physics. Mass is constant, while weight varies with gravity.

### 2. Rounding Too Early
Always keep extra decimal places during intermediate calculations and round only at the end for better accuracy.

### 3. Forgetting Unit Labels
Always include units in your calculations and final answers. This helps catch errors and makes results clearer.

### 4. Using Outdated Conversion Factors
Conversion factors are periodically updated for greater accuracy. Use current, official values for precise work.

## Advanced Conversion Techniques

### Using Conversion Factors
Set up conversions so units cancel out:
- 5 miles × (5,280 feet/1 mile) = 26,400 feet

### Chain Conversions
For complex conversions, break them into steps:
- 100 km/h to mph: 100 km/h × (0.621 miles/1 km) = 62.1 mph

### Dimensional Analysis
This systematic approach ensures accuracy in multi-step conversions by tracking units throughout the calculation.

## Digital Tools and Resources

While understanding the principles is important, modern digital tools can help with quick, accurate conversions:

### Online Converters
- QuickConvert (our platform) for instant conversions
- Google's built-in converter
- Unit conversion mobile apps

### When to Use Manual vs. Digital Methods
- Use manual methods to understand concepts and check reasonableness
- Use digital tools for precision and speed in practical applications

## Practical Applications in Daily Life

### Cooking and Baking
Converting recipe measurements when scaling up or down, or when using ingredients from different countries.

### Travel
Understanding distances, weights for luggage, and temperatures in different countries.

### Home Improvement  
Converting measurements for materials, paint coverage, and room dimensions.

### Health and Fitness
Converting weight, height, and distance measurements for international standards.

## Building Your Conversion Intuition

The more you practice conversions, the better your intuition becomes. Start with these strategies:

1. **Learn key reference points** (like 0°C = 32°F)
2. **Practice with everyday objects** (a paperclip weighs about 1 gram)
3. **Use estimation** before calculating for reasonableness checks
4. **Memorize common factors** (1 kg ≈ 2.2 lbs, 1 mile ≈ 1.6 km)

## Conclusion

Mastering unit conversions is a valuable skill that improves with practice. Start with the basic relationships and gradually work up to more complex conversions. Remember that understanding the principles is just as important as getting the right numbers – this knowledge will serve you well in academic, professional, and personal situations.

Whether you're converting recipe measurements, planning international travel, or working on scientific projects, these fundamental conversion skills will make you more confident and capable in our interconnected world.

Keep practicing, use reliable tools when needed, and don't hesitate to double-check your work. With time and experience, unit conversions will become second nature.
    `
  },
  {
    slug: "currency-exchange-rates-fluctuate",
    title: "Why Currency Exchange Rates Fluctuate: Understanding the Global Economy",
    description: "Understand the factors that influence currency exchange rates and how to get the best conversion rates for your international transactions.",
    date: "December 29, 2024",
    readTime: "7 min read", 
    category: "Finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "QuickConvert Team",
    content: `
# Why Currency Exchange Rates Fluctuate: Understanding the Global Economy

Currency exchange rates are constantly changing, sometimes dramatically within a single day. Understanding why these fluctuations occur can help you make better financial decisions, whether you're traveling internationally, conducting business abroad, or simply trying to understand global economics.

## What Are Exchange Rates?

An exchange rate is the price of one currency in terms of another currency. For example, if the USD/EUR exchange rate is 0.85, it means 1 US dollar can be exchanged for 0.85 euros. These rates determine how much of one currency you can get when you exchange it for another.

### Types of Exchange Rate Systems

**Floating Exchange Rates**: Most major currencies today use floating rates, where the value is determined by market forces of supply and demand.

**Fixed Exchange Rates**: Some countries peg their currency to another currency (often the US dollar) or a basket of currencies.

**Managed Float**: A hybrid system where the currency mostly floats but the central bank occasionally intervenes.

## Key Factors That Influence Exchange Rates

### 1. Economic Indicators

**Gross Domestic Product (GDP)**: A growing economy typically strengthens its currency as investors seek opportunities in that market.

**Inflation Rates**: Countries with lower inflation rates generally see their currency appreciate compared to countries with higher inflation.

**Employment Data**: Low unemployment often indicates a strong economy, which can boost currency value.

**Manufacturing and Service Sector Data**: These indicators show the health of different parts of the economy.

### 2. Interest Rates and Monetary Policy

Central banks play a crucial role in currency valuation through their monetary policies:

**Interest Rate Changes**: Higher interest rates typically attract foreign investment, increasing demand for that currency.

**Quantitative Easing**: When central banks increase money supply, it can weaken the currency.

**Forward Guidance**: Central bank communications about future policy can move markets even before changes are implemented.

### 3. Political Stability and Economic Policies

**Government Stability**: Political uncertainty often leads to currency weakness as investors seek safer havens.

**Fiscal Policy**: Government spending, taxation, and debt levels affect investor confidence.

**Trade Policies**: Tariffs, trade agreements, and trade balances influence currency demand.

**Regulatory Environment**: Changes in business regulations can affect foreign investment flows.

## Market Forces in Currency Trading

### Supply and Demand Dynamics

Like any market, currency values are fundamentally driven by supply and demand:

**Increased Demand**: When more people want to buy a currency (for trade, investment, or tourism), its value rises.

**Increased Supply**: When a country prints more money or there's less demand, the currency's value typically falls.

### Major Market Participants

**Central Banks**: Can influence rates through policy decisions and market interventions.

**Commercial Banks**: Execute trades for clients and manage their own currency positions.

**Institutional Investors**: Pension funds, hedge funds, and multinational corporations moving large amounts of money.

**Retail Traders**: Individual investors and travelers, though their impact is smaller.

### Market Sentiment and Psychology

**Risk Appetite**: During uncertain times, investors often move to "safe haven" currencies like the US dollar, Swiss franc, or Japanese yen.

**Speculation**: Traders betting on future movements can create short-term volatility.

**Herd Behavior**: When many traders move in the same direction, it can amplify price movements.

## Global Events and Their Impact

### Economic Crises

**Financial Crises**: The 2008 financial crisis dramatically affected exchange rates as investors fled to safety.

**Sovereign Debt Issues**: Countries facing debt problems often see their currencies weaken significantly.

### Natural Disasters and Pandemics

**Natural Disasters**: Can disrupt economic activity and affect currency values.

**COVID-19 Impact**: The pandemic caused massive currency volatility as economies shut down and reopened at different times.

### Geopolitical Events

**Wars and Conflicts**: Often strengthen safe-haven currencies while weakening those of affected regions.

**Trade Wars**: Tariff disputes can significantly impact the currencies of involved countries.

**Brexit**: The UK's departure from the EU created years of pound volatility due to uncertainty.

## Central Bank Interventions

### How Central Banks Influence Rates

**Interest Rate Policy**: The primary tool for influencing currency values.

**Direct Market Intervention**: Buying or selling currency in the foreign exchange market.

**Verbal Intervention**: Public statements that can move markets without direct action.

**Reserve Requirements**: Changing bank reserve requirements affects money supply and currency value.

### Examples of Notable Interventions

**Swiss National Bank**: Removed the EUR/CHF floor in 2015, causing massive franc appreciation.

**Bank of Japan**: Regularly intervenes to prevent excessive yen strengthening.

**People's Bank of China**: Manages the yuan's value against a basket of currencies.

## How to Track and Understand Rate Changes

### Key Economic Calendars

**Federal Reserve Meetings**: US monetary policy decisions affect the world's reserve currency.

**European Central Bank Decisions**: Impact the euro and global markets.

**Employment Reports**: Monthly job data from major economies.

**GDP Releases**: Quarterly economic growth figures.

### Reading Market Indicators

**Currency Pairs**: Understanding how to read EUR/USD, GBP/JPY, etc.

**Percentage Changes**: Daily, weekly, and monthly movement patterns.

**Historical Context**: Comparing current rates to historical averages.

### Tools for Monitoring Rates

**Financial News Websites**: Reuters, Bloomberg, Financial Times.

**Central Bank Websites**: Direct access to policy announcements.

**Currency Converter Apps**: Real-time rate tracking for practical use.

**Economic Data Platforms**: Services that aggregate economic indicators.

## Practical Tips for Dealing with Rate Fluctuations

### For International Travelers

**Timing**: Monitor rates before your trip and exchange money when rates are favorable.

**Multiple Options**: Compare rates from banks, currency exchanges, and ATMs.

**Forward Contracts**: For large amounts, consider locking in rates in advance.

### For Businesses

**Hedging Strategies**: Use financial instruments to protect against adverse rate movements.

**Natural Hedging**: Structure operations to offset currency exposures.

**Regular Monitoring**: Keep track of rates that affect your business operations.

### For Investors

**Diversification**: Hold assets in multiple currencies to spread risk.

**Currency ETFs**: Invest in funds that track currency movements.

**Understanding Correlations**: Know how currency movements affect your investments.

## The Future of Exchange Rates

### Emerging Trends

**Digital Currencies**: How cryptocurrencies might affect traditional exchange rates.

**Central Bank Digital Currencies (CBDCs)**: Government-issued digital currencies could change the landscape.

**Artificial Intelligence**: AI-driven trading is becoming more prevalent in currency markets.

### Long-term Factors

**Demographics**: Aging populations in developed countries may affect long-term currency trends.

**Climate Change**: Environmental factors could influence economic patterns and currency values.

**Technology**: Advancements that change global trade patterns.

## Common Misconceptions About Exchange Rates

### "A Strong Currency is Always Good"

While a strong currency can indicate economic health, it can also hurt exports by making them more expensive for foreign buyers.

### "Exchange Rates Are Predictable"

Despite sophisticated models, exchange rates are notoriously difficult to predict accurately over short periods.

### "Government Can Fully Control Exchange Rates"

Even powerful central banks have limited ability to fight strong market forces over extended periods.

## Conclusion

Currency exchange rates fluctuate due to a complex interplay of economic fundamentals, market sentiment, and global events. While short-term movements can seem random, understanding the underlying factors can help you make more informed decisions about when to exchange money, how to protect against currency risk, and what these movements mean for the broader economy.

The key is to stay informed about major economic trends, understand your own exposure to currency risk, and use appropriate tools and strategies to manage that risk. Whether you're a casual traveler or a business owner dealing with international transactions, knowledge of currency markets can save you money and help you make better financial decisions.

Remember that while understanding these factors is valuable, predicting exact exchange rate movements is extremely difficult even for professionals. Focus on understanding the general principles and managing your currency exposure appropriately rather than trying to time the market perfectly.
    `
  },
  {
    slug: "time-zone-conversions-made-easy",
    title: "Time Zone Conversions Made Easy: Navigate Global Time Like a Pro",
    description: "Navigate global time zones with confidence. Learn about daylight saving time, UTC, and coordination across time zones for international business and travel.",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "QuickConvert Team",
    content: `
# Time Zone Conversions Made Easy: Navigate Global Time Like a Pro

In our interconnected world, understanding time zones is essential for international business, travel, and communication. Whether you're scheduling a video call with colleagues in different countries or planning your arrival time in a new destination, mastering time zone conversions will make your life significantly easier.

## Understanding Time Zones: The Basics

Time zones exist because the Earth rotates on its axis, creating day and night cycles. As our planet is roughly spherical, when it's noon in one location, it's midnight on the opposite side of the globe. To standardize time globally, the world is divided into 24 time zones, each representing roughly 15 degrees of longitude.

### The Foundation: Greenwich Mean Time (GMT) and UTC

**Greenwich Mean Time (GMT)** was historically the world's time standard, based on the mean solar time at the Royal Observatory in Greenwich, London.

**Coordinated Universal Time (UTC)** is the modern successor to GMT and serves as the primary time standard by which the world regulates clocks and time. UTC is based on atomic time and is more precise than GMT.

For practical purposes, GMT and UTC are often used interchangeably, though UTC is technically more accurate.

### How Time Zones Work

Time zones are typically expressed as offsets from UTC:
- **UTC+0**: Greenwich Mean Time (London, Dublin)
- **UTC-5**: Eastern Standard Time (New York, Toronto)
- **UTC+9**: Japan Standard Time (Tokyo, Seoul)
- **UTC+5:30**: India Standard Time (Mumbai, Delhi)

## Major Time Zones Around the World

### North America

**Eastern Time (ET)**: UTC-5 (EST) / UTC-4 (EDT)
- Major cities: New York, Boston, Atlanta, Miami
- Business hub for the East Coast

**Central Time (CT)**: UTC-6 (CST) / UTC-5 (CDT)  
- Major cities: Chicago, Dallas, Houston, Mexico City
- Important for Midwest business operations

**Mountain Time (MT)**: UTC-7 (MST) / UTC-6 (MDT)
- Major cities: Denver, Phoenix, Salt Lake City
- Note: Arizona doesn't observe daylight saving time

**Pacific Time (PT)**: UTC-8 (PST) / UTC-7 (PDT)
- Major cities: Los Angeles, San Francisco, Seattle, Vancouver
- Tech industry hub time zone

### Europe

**Greenwich Mean Time (GMT)**: UTC+0 / UTC+1 (BST)
- Major cities: London, Dublin, Lisbon
- Financial markets reference point

**Central European Time (CET)**: UTC+1 / UTC+2 (CEST)
- Major cities: Paris, Berlin, Rome, Madrid
- Most populous time zone in Europe

**Eastern European Time (EET)**: UTC+2 / UTC+3 (EEST)
- Major cities: Helsinki, Athens, Cairo, Istanbul

### Asia-Pacific

**China Standard Time (CST)**: UTC+8
- Major cities: Beijing, Shanghai, Hong Kong
- Entire China uses one time zone despite its size

**Japan Standard Time (JST)**: UTC+9
- Major cities: Tokyo, Osaka, Yokohama
- Important for Asian business hours

**Australian Eastern Time (AET)**: UTC+10 / UTC+11 (AEDT)
- Major cities: Sydney, Melbourne, Brisbane
- Australia spans multiple time zones

## Daylight Saving Time: The Complication

Daylight Saving Time (DST) adds complexity to time zone conversions. During DST, clocks are moved forward by one hour to make better use of daylight during longer summer days.

### Key DST Facts

**Not Universal**: Not all countries or regions observe DST.

**Different Dates**: Countries that do observe DST often change on different dates.

**Seasonal Variations**: This means time differences between locations can change throughout the year.

### DST Calendar for Major Regions

**United States & Canada**: 
- Spring forward: Second Sunday in March
- Fall back: First Sunday in November

**European Union**:
- Spring forward: Last Sunday in March  
- Fall back: Last Sunday in October

**Australia**:
- Spring forward: First Sunday in October
- Fall back: First Sunday in April

### Countries That Don't Observe DST

- Most of Asia (China, Japan, India)
- Most of Africa
- Most of South America
- Parts of Australia
- Arizona (except Navajo Nation) and Hawaii in the US

## Practical Time Zone Conversion Strategies

### The Mental Math Method

For quick conversions, learn the hour differences between your location and frequently contacted time zones:

**If you're in New York (UTC-5)**:
- London: Add 5 hours
- Los Angeles: Subtract 3 hours  
- Tokyo: Add 14 hours (or subtract 10 hours for next day)

### The 24-Hour Clock Advantage

Using 24-hour format (military time) reduces AM/PM confusion:
- 14:00 UTC = 2:00 PM UTC
- No ambiguity about morning or evening

### Digital Tools and Apps

**Smartphone World Clocks**: Most phones have built-in world clock features.

**Calendar Integration**: Google Calendar and Outlook automatically adjust meeting times for participants in different zones.

**Dedicated Apps**: TimeZone iOS/Android apps provide detailed conversion tools.

**Browser Extensions**: Add world clocks to your browser for quick reference.

## Business Applications: Scheduling Across Time Zones

### Finding the Sweet Spot

When scheduling international meetings, look for times that are reasonable for all participants:

**US-Europe Meetings**: 
- Early morning US time (8-10 AM ET) = afternoon Europe time (1-3 PM GMT)

**US-Asia Meetings**:
- Late evening US time (8-10 PM PT) = morning Asia time (11 AM-1 PM JST)

**Europe-Asia Meetings**:
- Early afternoon Europe time (1-3 PM CET) = evening Asia time (7-9 PM JST)

### Time Zone Etiquette

**Be Explicit**: Always specify the time zone when scheduling: "3 PM EST" not just "3 PM"

**Use UTC for Clarity**: For global events, reference UTC to avoid confusion

**Consider Local Business Hours**: Respect standard business hours in each region

**Account for Holidays**: Different countries have different holiday schedules

### Tools for Business Scheduling

**Calendly**: Automatically displays meeting times in invitees' local time zones

**Doodle**: Polls that account for different time zones

**World Clock Meeting Planner**: Websites that show optimal meeting times

**Microsoft Teams/Zoom**: Display meeting times in participants' local zones

## Travel and Time Zone Jet Lag

### Understanding Jet Lag

Jet lag occurs when your internal body clock (circadian rhythm) is disrupted by rapid travel across time zones. The more time zones you cross, the more severe the jet lag.

### Minimizing Jet Lag Effects

**Gradual Adjustment**: Start adjusting your sleep schedule a few days before travel

**Light Exposure**: Use natural light to help reset your internal clock

**Hydration**: Stay well-hydrated during and after travel

**Strategic Napping**: Short naps (20-30 minutes) can help without disrupting nighttime sleep

### Travel Planning Tips

**Arrival Time Planning**: Consider your destination's time zone when booking flights

**Meeting Schedules**: Don't schedule important meetings immediately after long-haul flights

**Buffer Days**: Allow time to adjust before important events

## Common Time Zone Mistakes and How to Avoid Them

### The AM/PM Confusion

**Problem**: Mixing up morning and evening times
**Solution**: Use 24-hour format or be very explicit about AM/PM

### Forgetting About DST

**Problem**: Not accounting for daylight saving time changes
**Solution**: Use tools that automatically account for DST

### Assuming All Countries Change DST on the Same Day

**Problem**: Time differences change when DST transitions happen on different dates
**Solution**: Check specific dates for each region

### Not Considering Date Changes

**Problem**: Forgetting that crossing time zones can change the date
**Solution**: Always specify both date and time for international scheduling

## Advanced Time Zone Concepts

### Half-Hour and Quarter-Hour Offsets

Not all time zones are on the hour:
- **India Standard Time**: UTC+5:30
- **Nepal Time**: UTC+5:45
- **Newfoundland Time**: UTC-3:30

### Political Time Zones

Some time zones exist for political rather than geographical reasons:
- **China**: Uses one time zone despite spanning five geographical zones
- **Spain**: Uses CET despite being geographically closer to GMT

### Maritime Time Zones

Ships at sea use nautical time zones, changing their clocks as they cross longitude lines.

## Technology and the Future of Time

### Precision Timing

Modern technology requires extremely precise timing:
- **GPS Systems**: Rely on atomic clocks and precise time coordination
- **Financial Trading**: Microsecond timing can affect trading outcomes
- **Internet Protocols**: Network synchronization depends on accurate timekeeping

### Proposed Changes

**Year-Round DST**: Some regions are considering eliminating the twice-yearly time changes

**Simplified Time Zones**: Proposals exist to reduce the number of global time zones

**Digital Timestamps**: Increasing use of UTC timestamps in digital systems

## Practical Exercises to Master Time Zones

### Daily Practice

1. **Set Multiple World Clocks**: Keep clocks for key time zones on your phone or computer
2. **Convert News Times**: When reading international news, convert times to your local zone
3. **Practice Mental Math**: Regularly calculate time differences without tools

### Business Scenarios

1. **Mock Scheduling**: Practice finding good meeting times for multiple time zones
2. **Travel Planning**: Calculate arrival times and jet lag for hypothetical trips
3. **Deadline Coordination**: Practice coordinating project deadlines across time zones

## Conclusion

Mastering time zone conversions is an invaluable skill in our globalized world. Whether you're conducting international business, maintaining relationships across continents, or simply traveling the world, understanding how time zones work will make your interactions smoother and more professional.

The key principles to remember are:
- Always specify time zones when communicating times
- Use reliable tools that account for daylight saving time
- Be mindful of the human impact of scheduling across zones
- Practice regularly to build intuitive understanding

Start by focusing on the time zones most relevant to your personal or professional life, then gradually expand your knowledge. With practice, time zone conversion will become second nature, allowing you to navigate our interconnected world with confidence and ease.

Remember, the goal isn't to memorize every time zone, but to understand the principles and know how to quickly find accurate information when you need it. In our digital age, the tools are readily available – the key is knowing how to use them effectively.
    `
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

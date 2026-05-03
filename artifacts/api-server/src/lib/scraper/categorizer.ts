import { GTA6_KEYWORDS } from "./sources-config.js";

const CATEGORY_RULES: { category: string; keywords: string[] }[] = [
  {
    category: "Vice City",
    keywords: [
      "vice city", "vice beach", "vice dale", "vci", "vice city international",
      "tourism", "luxury", "nightclub", "strip", "downtown vice", "miami",
      "jason", "lucia", "protagonist", "main character",
    ],
  },
  {
    category: "Markets",
    keywords: [
      "bawsaq", "lcn", "stock", "shares", "market", "invest", "price",
      "dividend", "bull", "bear", "trading", "economy", "financial",
      "ammu-nation", "legendary motorsport", "money", "revenue", "profit",
    ],
  },
  {
    category: "Vehicles",
    keywords: [
      "car", "vehicle", "supercar", "motorcycle", "bike", "truck", "boat",
      "helicopter", "aircraft", "speed", "handling", "acceleration", "braking",
      "grotti", "pegassi", "benefactor", "vapid", "karin", "annis", "ocelot",
      "brute", "declasse", "invetero", "lampadati", "zentorno", "oppressor",
      "garage", "mod", "customize", "performance",
    ],
  },
  {
    category: "Business",
    keywords: [
      "business", "roi", "bunker", "nightclub", "mc", "motorcycle club",
      "ceo", "cargo", "crates", "warehouse", "acid lab", "auto shop",
      "payout", "supply", "production", "sell", "profit", "heist",
      "passive income", "grind", "money making",
    ],
  },
  {
    category: "Counties",
    keywords: [
      "leonida", "county", "mariana", "kelly", "ambrosia", "leonard",
      "port gellhorn", "key lento", "watson bay", "kelly city",
      "allied crystal", "sugar refinery", "map", "region", "area",
      "location", "coordinates", "grassrivers", "wetlands", "coastline",
      "forgotten coastline",
    ],
  },
  {
    category: "Investigations",
    keywords: [
      "leak", "datamine", "source code", "insider", "anonymous", "rumor",
      "confirm", "unverified", "investigation", "evidence", "classified",
      "rockstar", "take-two", "corporate", "lawsuit", "legal", "hack",
      "breach", "footage", "trailer", "reveal",
    ],
  },
  {
    category: "Opinion",
    keywords: [
      "opinion", "analysis", "editorial", "think", "believe", "review",
      "compare", "versus", "best", "worst", "ranking", "tier list",
      "prediction", "theory", "speculation", "breakdown",
    ],
  },
];

export function categorizeArticle(title: string, content: string, defaultCategory: string): string {
  const text = `${title} ${content}`.toLowerCase();

  const isGTA6Related = GTA6_KEYWORDS.some((kw) => text.includes(kw));
  if (!isGTA6Related) return "filtered";

  const scores: Record<string, number> = {};
  for (const rule of CATEGORY_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      const matches = text.match(regex);
      if (matches) score += matches.length;
    }
    if (score > 0) scores[rule.category] = score;
  }

  if (Object.keys(scores).length === 0) return defaultCategory;

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

export function extractTags(title: string, content: string): string[] {
  const text = `${title} ${content}`.toLowerCase();
  const tags: string[] = [];

  const tagMap: Record<string, string[]> = {
    "#GTA6": ["gta 6", "gta vi", "gta6", "gtavi"],
    "#GTA6Leaks": ["leak", "datamine", "insider"],
    "#ViceCity": ["vice city", "vice beach"],
    "#Leonida": ["leonida"],
    "#BAWSAQ": ["bawsaq"],
    "#LCN": ["lcn"],
    "#RockstarGames": ["rockstar"],
    "#GTA6Vehicles": ["vehicle", "car", "supercar"],
    "#GTA6Economy": ["economy", "market", "stock", "business"],
    "#GTA6Map": ["map", "county", "region", "location"],
  };

  for (const [tag, keywords] of Object.entries(tagMap)) {
    if (keywords.some((kw) => text.includes(kw))) {
      tags.push(tag);
    }
  }

  return tags.slice(0, 5);
}

export function generateExcerpt(content: string, maxLength = 200): string {
  const cleaned = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "...";
}

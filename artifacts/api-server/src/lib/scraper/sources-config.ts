export interface SourceConfig {
  name: string;
  url: string;
  type: "rss" | "html" | "youtube-rss";
  defaultCategory: string;
  articleSelector?: string;
  titleSelector?: string;
  linkSelector?: string;
  imageSelector?: string;
  requiresJs?: boolean;
}

export const DEFAULT_SOURCES: SourceConfig[] = [
  {
    name: "Reddit r/GTA6",
    url: "https://www.reddit.com/r/GTA6.rss",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Reddit r/GTAVI",
    url: "https://www.reddit.com/r/GTAVI.rss",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Reddit r/GrandTheftAutoVI",
    url: "https://www.reddit.com/r/GrandTheftAutoVI.rss",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Kotaku GTA 6",
    url: "https://kotaku.com/rss",
    type: "rss",
    defaultCategory: "Vice City",
  },
  {
    name: "GamesRadar",
    url: "https://www.gamesradar.com/rss/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Eurogamer",
    url: "https://www.eurogamer.net/?format=rss",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "PC Gamer",
    url: "https://www.pcgamer.com/rss/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Game Rant GTA",
    url: "https://gamerant.com/feed/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Dexerto GTA",
    url: "https://www.dexerto.com/feed/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "VG247",
    url: "https://www.vg247.com/feed/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Rockstar Newswire",
    url: "https://www.rockstargames.com/newswire",
    type: "html",
    defaultCategory: "Vice City",
    articleSelector: "article, .newswire-article, .article-item",
    titleSelector: "h1, h2, h3, .article-title",
    linkSelector: "a",
    imageSelector: "img",
  },
  {
    name: "GTABase",
    url: "https://www.gtabase.com/grand-theft-auto-vi/",
    type: "html",
    defaultCategory: "Vehicles",
    articleSelector: ".article, .news-item, article",
    titleSelector: "h1, h2, h3",
    linkSelector: "a",
    imageSelector: "img",
  },
  {
    name: "VGC GTA 6",
    url: "https://www.videogameschronicle.com/tag/gta-6/feed/",
    type: "rss",
    defaultCategory: "Intel",
  },
  {
    name: "Push Square GTA",
    url: "https://www.pushsquare.com/feeds/latest",
    type: "rss",
    defaultCategory: "Intel",
  },
];

export const GTA6_KEYWORDS = [
  "gta 6", "gta vi", "gta6", "gtavi", "grand theft auto 6", "grand theft auto vi",
  "leonida", "vice city", "rockstar games", "bawsaq", "lcn",
  "jason", "lucia", "ambrosia", "mariana county", "vice dale",
  "port gellhorn", "allied crystal", "gta online", "gta6",
];

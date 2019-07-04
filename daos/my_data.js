/**
 * Static data used to our index. Source: https://api.publicapis.org/entries
 */
module.exports.data = [
  {
    API: "Cat Facts",
    Description: "Daily cat facts",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://alexwohlbruck.github.io/cat-facts/",
    Category: "Animals",
    id: 0
  },
  {
    API: "Cats",
    Description: "Pictures of cats from Tumblr",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://thecatapi.com/docs.html",
    Category: "Animals",
    id: 1
  },
  {
    API: "Dogs",
    Description: "Based on the Stanford Dogs Dataset",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://dog.ceo/dog-api/",
    Category: "Animals",
    id: 2
  },
  {
    API: "HTTPCat",
    Description: "Cat for every HTTP Status",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://http.cat/",
    Category: "Animals",
    id: 3
  },
  {
    API: "IUCN",
    Description: "IUCN Red List of Threatened Species",
    Auth: "apiKey",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://apiv3.iucnredlist.org/api/v3/docs",
    Category: "Animals",
    id: 4
  },
  {
    API: "Movebank",
    Description: "Movement and Migration data of animals",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://github.com/movebank/movebank-api-doc",
    Category: "Animals",
    id: 5
  },
  {
    API: "Petfinder",
    Description: "Adoption",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.petfinder.com/developers/api-docs/",
    Category: "Animals",
    id: 6
  },
  {
    API: "RandomCat",
    Description: "Random pictures of cats",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://aws.random.cat/meow",
    Category: "Animals",
    id: 7
  },
  {
    API: "RandomDog",
    Description: "Random pictures of dogs",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://random.dog/woof.json",
    Category: "Animals",
    id: 8
  },
  {
    API: "RandomFox",
    Description: "Random pictures of foxes",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://randomfox.ca/floof/",
    Category: "Animals",
    id: 9
  },
  {
    API: "RescueGroups",
    Description: "Adoption",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link:
      "https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home",
    Category: "Animals",
    id: 10
  },
  {
    API: "Shibe.Online",
    Description: "Random pictures of Shibu Inu, cats or birds",
    Auth: "",
    HTTPS: false,
    Cors: "no",
    Link: "http://shibe.online/",
    Category: "Animals",
    id: 11
  },
  {
    API: "AniList",
    Description: "Anime discovery & tracking",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://github.com/AniList/ApiV2-GraphQL-Docs",
    Category: "Anime",
    id: 12
  },
  {
    API: "AnimeNewsNetwork",
    Description: "Anime industry news",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.animenewsnetwork.com/encyclopedia/api.php",
    Category: "Anime",
    id: 13
  },
  {
    API: "Jikan",
    Description: "Unofficial MyAnimeList API",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://jikan.moe",
    Category: "Anime",
    id: 14
  },
  {
    API: "Kitsu",
    Description: "Anime discovery platform",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "http://docs.kitsu.apiary.io/",
    Category: "Anime",
    id: 15
  },
  {
    API: "Studio Ghibli",
    Description: "Resources from Studio Ghibli films",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://ghibliapi.herokuapp.com",
    Category: "Anime",
    id: 16
  },
  {
    API: "AlienVault Open Threat Exchange (OTX)",
    Description: "IP/domain/URL reputation",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://otx.alienvault.com/api/",
    Category: "Anti-Malware",
    id: 17
  },
  {
    API: "Google Safe Browsing",
    Description: "Google Link/Domain Flagging",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/safe-browsing/",
    Category: "Anti-Malware",
    id: 18
  },
  {
    API: "Metacert",
    Description: "Metacert Link Flagging",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://metacert.com/",
    Category: "Anti-Malware",
    id: 19
  },
  {
    API: "VirusTotal",
    Description: "VirusTotal File/URL Analysis",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.virustotal.com/en/documentation/public-api/",
    Category: "Anti-Malware",
    id: 20
  },
  {
    API: "Web Of Trust (WOT)",
    Description: "Website reputation",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.mywot.com/en/API",
    Category: "Anti-Malware",
    id: 21
  },
  {
    API: "Behance",
    Description: "Design",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.behance.net/dev",
    Category: "Art & Design",
    id: 22
  },
  {
    API: "Cooper Hewitt",
    Description: "Smithsonian Design Museum",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://collection.cooperhewitt.org/api",
    Category: "Art & Design",
    id: 23
  },
  {
    API: "Dribbble",
    Description: "Design",
    Auth: "OAuth",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://developer.dribbble.com/v1/",
    Category: "Art & Design",
    id: 24
  },
  {
    API: "Harvard Art Museums",
    Description: "Art",
    Auth: "apiKey",
    HTTPS: false,
    Cors: "unknown",
    Link: "https://github.com/harvardartmuseums/api-docs",
    Category: "Art & Design",
    id: 25
  },
  {
    API: "Iconfinder",
    Description: "Icons",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developer.iconfinder.com",
    Category: "Art & Design",
    id: 26
  },
  {
    API: "Icons8",
    Description: "Icons",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "http://docs.icons8.apiary.io/#reference/0/meta",
    Category: "Art & Design",
    id: 27
  },
  {
    API: "Noun Project",
    Description: "Icons",
    Auth: "OAuth",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://api.thenounproject.com/index.html",
    Category: "Art & Design",
    id: 28
  },
  {
    API: "Rijksmuseum",
    Description: "Art",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.rijksmuseum.nl/en/api",
    Category: "Art & Design",
    id: 29
  },
  {
    API: "Bhagavad Gita",
    Description: "Bhagavad Gita text",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "yes",
    Link: "https://bhagavadgita.io/api",
    Category: "Books",
    id: 30
  },
  {
    API: "BookNomads",
    Description:
      "Books published in the Netherlands and Flanders (about 2.5 million), book covers and related data",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.booknomads.com/dev",
    Category: "Books",
    id: 31
  },
  {
    API: "British National Bibliography",
    Description: "Books",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://bnb.data.bl.uk/",
    Category: "Books",
    id: 32
  },
  {
    API: "Goodreads",
    Description: "Books",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.goodreads.com/api",
    Category: "Books",
    id: 33
  },
  {
    API: "Google Books",
    Description: "Books",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/books/",
    Category: "Books",
    id: 34
  },
  {
    API: "LibGen",
    Description: "Library Genesis search engine",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://garbage.world/posts/libgen/",
    Category: "Books",
    id: 35
  },
  {
    API: "Open Library",
    Description: "Books, book covers and related data",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://openlibrary.org/developers/api",
    Category: "Books",
    id: 36
  },
  {
    API: "Penguin Publishing",
    Description: "Books, book covers and related data",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "http://www.penguinrandomhouse.biz/webservices/rest/",
    Category: "Books",
    id: 37
  },
  {
    API: "Charity Search",
    Description: "Non-profit charity data",
    Auth: "apiKey",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://charityapi.orghunter.com/",
    Category: "Business",
    id: 38
  },
  {
    API: "Clearbit Logo",
    Description: "Search for company logos and embed them in your projects",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://clearbit.com/docs#logo-api",
    Category: "Business",
    id: 39
  },
  {
    API: "Domainsdb.info",
    Description: "Registered Domain Names Search",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://domainsdb.info/",
    Category: "Business",
    id: 40
  },
  {
    API: "Freelancer",
    Description: "Hire freelancers to get work done",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.freelancer.com",
    Category: "Business",
    id: 41
  },
  {
    API: "Gmail",
    Description: "Flexible, RESTful access to the user's inbox",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/gmail/api/",
    Category: "Business",
    id: 42
  },
  {
    API: "Google Analytics",
    Description:
      "Collect, configure and analyze your data to reach the right audience",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/analytics/",
    Category: "Business",
    id: 43
  },
  {
    API: "mailgun",
    Description: "Email Service",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.mailgun.com/",
    Category: "Business",
    id: 44
  },
  {
    API: "markerapi",
    Description: "Trademark Search",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://www.markerapi.com/",
    Category: "Business",
    id: 45
  },
  {
    API: "Ticksel",
    Description: "Friendly website analytics made for humans",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://ticksel.com",
    Category: "Business",
    id: 46
  },
  {
    API: "Trello",
    Description:
      "Boards, lists and cards to help you organize and prioritize your projects",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.trello.com/",
    Category: "Business",
    id: 47
  },
  {
    API: "Calendar Index",
    Description: "Worldwide Holidays and Working Days",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.calendarindex.com/",
    Category: "Calendar",
    id: 48
  },
  {
    API: "Church Calendar",
    Description: "Catholic liturgical calendar",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://calapi.inadiutorium.cz/",
    Category: "Calendar",
    id: 49
  },
  {
    API: "Czech Namedays Calendar",
    Description: "Lookup for a name and returns nameday date",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://svatky.adresa.info/",
    Category: "Calendar",
    id: 50
  },
  {
    API: "Google Calendar",
    Description: "Display, create and modify Google calendar events",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/google-apps/calendar/",
    Category: "Calendar",
    id: 51
  },
  {
    API: "Hebrew Calendar",
    Description:
      "Convert between Gregarian and Hebrew, fetch Shabbat and Holiday times, etc",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "https://www.hebcal.com/home/developer-apis",
    Category: "Calendar",
    id: 52
  },
  {
    API: "Holidays",
    Description: "Historical data regarding holidays",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://holidayapi.com/",
    Category: "Calendar",
    id: 53
  },
  {
    API: "LectServe",
    Description: "Protestant liturgical calendar",
    Auth: "",
    HTTPS: false,
    Cors: "unknown",
    Link: "http://www.lectserve.com",
    Category: "Calendar",
    id: 54
  },
  {
    API: "Nager.Date",
    Description: "Public holidays for more than 90 countries",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://date.nager.at",
    Category: "Calendar",
    id: 55
  },
  {
    API: "Namedays Calendar",
    Description: "Provides namedays for multiple countries",
    Auth: "",
    HTTPS: true,
    Cors: "yes",
    Link: "https://api.abalin.net/",
    Category: "Calendar",
    id: 56
  },
  {
    API: "Non-Working Days",
    Description: "Database of ICS files for non working days",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://github.com/gadael/icsdb",
    Category: "Calendar",
    id: 57
  },
  {
    API: "Russian Calendar",
    Description: "Check if a date is a Russian holiday or not",
    Auth: "",
    HTTPS: true,
    Cors: "no",
    Link: "https://github.com/egno/work-calendar",
    Category: "Calendar",
    id: 58
  },
  {
    API: "Box",
    Description: "File Sharing and Storage",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developer.box.com/",
    Category: "Cloud Storage & File Sharing",
    id: 59
  },
  {
    API: "Dropbox",
    Description: "File Sharing and Storage",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.dropbox.com/developers",
    Category: "Cloud Storage & File Sharing",
    id: 60
  },
  {
    API: "Google Drive",
    Description: "File Sharing and Storage",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.google.com/drive/",
    Category: "Cloud Storage & File Sharing",
    id: 61
  },
  {
    API: "OneDrive",
    Description: "File Sharing and Storage",
    Auth: "OAuth",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://dev.onedrive.com/",
    Category: "Cloud Storage & File Sharing",
    id: 62
  },
  {
    API: "Pastebin",
    Description: "Plain Text Storage",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://pastebin.com/api/",
    Category: "Cloud Storage & File Sharing",
    id: 63
  },
  {
    API: "WeTransfer",
    Description: "File Sharing",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://developers.wetransfer.com",
    Category: "Cloud Storage & File Sharing",
    id: 64
  },
  {
    API: "CircleCI",
    Description:
      "Automate the software development process using continuous integration and continuous delivery",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://circleci.com/docs/api/v1-reference/",
    Category: "Continuous Integration",
    id: 65
  },
  {
    API: "Codeship",
    Description: "Codeship is a Continuous Integration Platform in the cloud",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://apidocs.codeship.com/",
    Category: "Continuous Integration",
    id: 66
  },
  {
    API: "Travis CI",
    Description:
      "Sync your GitHub projects with Travis CI to test your code in minutes",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://docs.travis-ci.com/api/",
    Category: "Continuous Integration",
    id: 67
  },
  {
    API: "Binance",
    Description: "Exchange for Trading Cryptocurrencies based in China",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://github.com/binance-exchange/binance-official-api-docs",
    Category: "Cryptocurrency",
    id: 68
  },
  {
    API: "BitcoinAverage",
    Description: "Digital Asset Price Data for the blockchain industry",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://apiv2.bitcoinaverage.com/",
    Category: "Cryptocurrency",
    id: 69
  },
  {
    API: "BitcoinCharts",
    Description: "Financial and Technical Data related to the Bitcoin Network",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://bitcoincharts.com/about/exchanges/",
    Category: "Cryptocurrency",
    id: 70
  },
  {
    API: "Bitfinex",
    Description: "Cryptocurrency Trading Platform",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://docs.bitfinex.com/docs/introduction",
    Category: "Cryptocurrency",
    id: 71
  },
  {
    API: "Bitmex",
    Description:
      "Real-Time Cryptocurrency derivatives trading platform based in Hong Kong",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.bitmex.com/app/apiOverview",
    Category: "Cryptocurrency",
    id: 72
  },
  {
    API: "Bittrex",
    Description: "Next Generation Crypto Trading Platform",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://bittrex.com/Home/Api",
    Category: "Cryptocurrency",
    id: 73
  },
  {
    API: "Block",
    Description: "Bitcoin Payment, Wallet & Transaction Data",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.block.io/docs/basic",
    Category: "Cryptocurrency",
    id: 74
  },
  {
    API: "Blockchain",
    Description: "Bitcoin Payment, Wallet & Transaction Data",
    Auth: "",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.blockchain.info/api",
    Category: "Cryptocurrency",
    id: 75
  },
  {
    API: "CoinAPI",
    Description: "All Currency Exchanges integrate under a single api",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "no",
    Link: "https://docs.coinapi.io/",
    Category: "Cryptocurrency",
    id: 76
  },
  {
    API: "Coinbase",
    Description: "Bitcoin, Bitcoin Cash, Litecoin and Ethereum Prices",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://developers.coinbase.com",
    Category: "Cryptocurrency",
    id: 77
  },
  {
    API: "Coinbase Pro",
    Description: "Cryptocurrency Trading Platform",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://docs.pro.coinbase.com/#api",
    Category: "Cryptocurrency",
    id: 78
  }
];

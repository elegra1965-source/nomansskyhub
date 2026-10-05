# No Man's Sky Hub

**Live:** [nomansskyhub.app](https://nomansskyhub.app)

The front door to a family of free, fan-made *No Man's Sky* tools. One cinematic page that links every tool, dials portal addresses, and tracks the live expedition. No account, no ads, and it installs as an app.

## What it does

- **Anomaly intro and cinematic hero** with a live clock and a status bar showing the current expedition, read live from the official Galactic Atlas feed.
- **Six nodes, one network.** Image cards for every tool in the family (see below).
- **Portal dialer.** Enter or tap a 12-glyph portal address, pick any of the 256 galaxies, and jump straight to that system on the Galactic Map.
- **Speak like the Atlas.** A built-in alien-alphabet translator.
- **Galactic Alliances.** A guide to alliances from the Cosmos update: founding one, joining one, the three-alliance limit, alliance teleporters and how the rankings work.
- **Short links.** `nomansskyhub.app/atlas`, `/weather`, `/theme`, `/translator` and `/map` jump to each tool.

## The family

| Tool | Link |
|---|---|
| ATLAS — voice AI companion | [atlas.nomansskyhub.app](https://atlas.nomansskyhub.app) |
| Weather as a planet scan | [weather.nomansskyhub.app](https://weather.nomansskyhub.app) |
| Galactic Map and portal decoder | [map.nomansskyhub.app](https://map.nomansskyhub.app) |
| Theme Pack — icons, wallpapers, font | [theme.nomansskyhub.app](https://theme.nomansskyhub.app) |
| Alphabet Translator | [translator.nomansskyhub.app](https://translator.nomansskyhub.app) |

## How it's built

Plain HTML, CSS and JavaScript with no build step and no framework. Deployed on Netlify straight from this repo: every push to `main` goes live.

| File | What it is |
|---|---|
| `index.html` | The whole page: layout, styles and logic |
| `alliances.css`, `alliances.js` | The Galactic Alliances section |
| `sw.js` | Service worker for install and offline use |
| `_redirects` | Short links, plus a same-origin proxy for the Galactic Atlas API (`/nms-api/*`) |
| `manifest.webmanifest` | App install details |
| `assets/` | Backgrounds, intro video, glyph masks, icons and the NMS alphabet font |

## Credits

- Live expedition data: the official Galactic Atlas API by Hello Games
- NMS Alphabet font by seontonppa (built with FontStruct), used with permission

## Licence

The code is MIT licensed (see `LICENSE`). Game names, glyphs and imagery belong to Hello Games and are not covered by that licence.

*An unofficial, fan-made project. Not affiliated with, sponsored by, or endorsed by Hello Games.*

Built by elegra1965.

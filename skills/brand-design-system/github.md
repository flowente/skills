repo: flowente/flowente-site
branch: main
path: flowente-site-clean/flowente-site

## Last sync
date: 2026-08-05T23:11:48Z
commit: d5647493a08abf7f6a6619a2bbd1dd5c5a84a5f4
### Updated in this project
- Tokens (colors, type, spacing, base CSS) from tailwind.config.ts + app/globals.css
- All 13 source components rebuilt as JSX in components/core + components/site
- Homepage UI kit recreation in ui_kits/website
- Logo/wordmark/favicon SVGs copied to assets/

## Screen map
| Project screen | Repo files |
| --- | --- |
| ui_kits/website/index.html | app/page.tsx, app/layout.tsx, app/template.tsx, components/*.tsx, lib/marks.tsx |
| components/core/* | components/{Button,Logo,FlowMark,AccentShape,MarkBadge,SvgFilters}.tsx, lib/marks.tsx |
| components/site/* | components/{Nav,Hero,FeatureSection,Card,CardGrid,QuoteRow,Footer}.tsx |
| tokens/* | tailwind.config.ts, app/globals.css |
| assets/* | public/logo.svg, public/wordmark.svg, app/icon.svg |

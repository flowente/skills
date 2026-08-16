# Piano — Brand toolkit distribuibile

Obiettivo: trasformare `brand-design-system` da skill interna Flowente in due
skill separate, di cui una vendibile ai clienti, versionate e distribuibili come
plugin.

## Punto di partenza (verificato)

`brand-design-system` è già molto costruita, più di quanto sembri dallo
`SKILL.md` da 49 righe:

- `tokens/` — colori, tipografia, spacing, grid, font, base CSS
- `components/core/` e `components/site/` — 13 componenti React, ciascuno con
  `.jsx`, `.d.ts` e un `.prompt.md`
- `ui_kits/website/index.html` — ricostruzione completa dell'homepage, light/dark
- `guidelines/*.html` — specimen visivi (13 card)
- `assets/` — logo, wordmark, icon in SVG
- `prompts/BRAND-SYSTEM-PROMPT.md` — Mode A, applica il brand Flowente
- `prompts/SKILL-BRAND-GENERATOR.md` — Mode B, genera un brand da una referenza
- `github.md` — sincronizzata da `flowente/flowente-site`, path
  `flowente-site-clean/flowente-site`, ultimo sync 5 agosto 2026

I design token quindi **ci sono già**. Il gap non è quello.

## Il gap reale — tutto nel Mode B

| # | Manca | Cosa fa Pika |
| --- | --- | --- |
| 1 | Fase divergente | Va da referenza a *un* brand, diretto. Nessuna esplorazione, niente da far scegliere al cliente. |
| 2 | Gate duri | Ci sono le domande di onboarding, poi corre fino in fondo. Servono stop alla scelta direzione e alla review guidelines. |
| 3 | Deliverable cliente | Esce una cartella che rispecchia il package. Un cliente si aspetta PDF + ZIP. |
| 4 | Logo | La nostra dichiara onestamente che non sa vettorializzare e si ferma. Serve generazione + validazione. |
| 5 | Spec unico | Token CSS sì, manifest JSON che li lega e export Tailwind no. |
| 6 | Enforcement | Regole scritte come aggettivi invece che come vincoli verificabili. |

## Fasi

### Fase 0 — Fondamenta
Repo dedicato come fonte di verità, materiale trasportato, packaging plugin
predisposto.

**Rischio da risolvere subito:** le skill vivono in
`~/.claude/skills/synced/`, sovrascritta dal sync claude.ai. Va deciso chi
comanda, o il lavoro sparisce al primo sync.

### Fase 1 — Split
`flowente-brand` (Mode A, invariato nella sostanza) e `brand-forge` (Mode B,
brand-agnostico). **Zero funzionalità nuove**: solo separazione, così il diff è
verificabile e non si mescola con il resto.

Da decidere qui: cosa è condiviso fra le due. I componenti React sono materiale
Flowente e restano in `flowente-brand`; `brand-forge` li referenzia come esempio
di profondità attesa, non li copia.

### Fase 2 — Innesto dei pattern
La fase che rende di più.

- Regola di divergenza sui 4 assi strutturali
- Gate di approvazione + override `cost_ack` per l'uso non interattivo
- Enforcement al posto degli aggettivi (foto, texture, contrasto)
- Routing negativo nelle description ("NOT for X — use Y")
- Progressive disclosure: spostare il materiale pesante in `references/`

### Fase 3 — Deliverable cliente
- Template `brand-pack` che `brand-forge` riempie, come **skill installabile**
- PDF guidelines (le skill `pdf` e `pptx` esistono già)
- ZIP portatile + spec JSON + export Tailwind
- Pipeline logo: generazione via image AI, PNG trasparente, 8 dimensioni,
  controllo a dimensione favicon, lockup SVG

### Fase 4 — Packaging
`.claude-plugin/` con `plugin.json` e `marketplace.json`, sul modello Pika.
Eventuale multi-target Codex/Cursor se serve.

### Fase 5 — Validazione
`brand-forge` girato end-to-end su un brand finto, più misura del triggering con
`skill-creator`.

## Ordine di lavoro

Fase 0 e 1 in un blocco, poi stop e review prima di toccare la sostanza. Le fasi
2 e 3 sono quelle dove si guadagna; la 4 e la 5 chiudono.

## Gap dichiarati nel materiale Flowente

Dallo `SKILL.md` attuale, da tenere presenti perché toccano il deliverable
cliente:

- Nessun `DESIGN.md` — il repo sorgente lo referenzia ma non è nel package
- Nessuna regola di clear-space, dimensione minima, versione reversed-on-dark
  del logo
- Nessuna mappatura colori per data-visualization
- Tone of voice solo in italiano
- Nessun boilerplate legale/contatti per footer e firme
- Contrasti colore non verificati contro WCAG AA

Il punto 2 e il 6 diventano bloccanti nel momento in cui si consegna a un
cliente: vanno risolti in Fase 3, non lasciati come "known gaps".

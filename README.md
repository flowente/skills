# Flowente Skills

Toolkit di skill Flowente, versionato in git e distribuibile come plugin.

Nasce da una constatazione: le skill vivevano solo nella cartella sincronizzata
da claude.ai (`~/.claude/skills/synced/`), dove ogni sync le sovrascrive. Niente
versioning, niente diff, niente modo di consegnarle a un cliente. Questo repo è
la fonte di verità.

## Contenuto

| Percorso | Cosa contiene |
| --- | --- |
| `skills/brand-design-system/` | Baseline attuale, copiata integralmente dal sync. Da qui parte lo split. |
| `docs/piano-brand-toolkit.md` | Il piano a 5 fasi: split, innesto dei pattern, deliverable cliente, packaging, validazione. |
| `docs/ricerca-pika.md` | Cosa fa il Pika MCP, quali pattern valgono la pena e cosa non è replicabile. |
| `.claude-plugin/` | Manifest per la distribuzione come plugin Claude Code. |

## Dove si sta andando

`brand-design-system` fa oggi due lavori in una skill sola: applica il brand
Flowente (Mode A) e genera brand nuovi da una referenza (Mode B). Finché resta
unita non è consegnabile a un cliente — nome, description e materiale parlano di
Flowente.

Lo split la separa in:

- **`flowente-brand`** — uso interno, applica il brand Flowente. Eredita token,
  componenti, UI kit e assets così come sono.
- **`brand-forge`** — generatore brand-agnostico, vendibile. Flowente resta il
  benchmark di qualità, mai l'estetica da copiare.

L'output di `brand-forge` non è una cartella di deliverable: è una **skill
installabile** (`brand-pack-<cliente>`). Il cliente la installa e da quel
momento il suo Claude produce on-brand da solo. È il pezzo che ci distingue dai
generatori di brand kit in PDF.

## Stato

Fase 0 — trasporto del materiale nel repo. Nessuno split ancora fatto:
`skills/brand-design-system/` è identica all'originale, di proposito, così il
primo diff dello split è leggibile.

## Installazione locale (durante lo sviluppo)

Le skill si testano copiandole (o linkandole) in `~/.claude/skills/`.
Attenzione: quella cartella è sincronizzata da claude.ai e può sovrascrivere.
Finché il sync non è disattivato o reindirizzato, questo repo vince sempre in
caso di conflitto.

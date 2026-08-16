# Flowente Skills

Toolkit di skill Flowente, versionato in git e distribuibile come plugin.

Nasce da una constatazione: le skill vivevano solo nella cartella sincronizzata
da claude.ai (`~/.claude/skills/synced/`), dove ogni sync le sovrascrive. Niente
versioning, niente diff, niente modo di consegnarle a un cliente. Questo repo è
la fonte di verità.

## Regola: comanda GitHub

Questo repo vince sempre. Se una skill diverge fra qui e
`~/.claude/skills/synced/`, la versione giusta è quella qui — la copia
sincronizzata va riallineata, mai il contrario.

In pratica: si modifica qui, si committa, e solo dopo si propaga altrove. Una
modifica fatta direttamente nella cartella sincronizzata è destinata a sparire e
non va considerata lavoro salvato.

## Contenuto

| Percorso | Cosa contiene |
| --- | --- |
| `skills/flowente-brand/` | Applica il brand Flowente. Uso interno: token, componenti, UI kit, assets. |
| `skills/brand-forge/` | Genera un brand nuovo da una referenza. Brand-agnostico, distribuibile. |
| `docs/piano-brand-toolkit.md` | Il piano a 5 fasi: split, innesto dei pattern, deliverable cliente, packaging, validazione. |
| `docs/ricerca-pika.md` | Cosa fa il Pika MCP, quali pattern valgono la pena e cosa non è replicabile. |
| `.claude-plugin/` | Manifest per la distribuzione come plugin Claude Code. |

## Le due skill

`brand-design-system` faceva due lavori in una skill sola: applicare il brand
Flowente (Mode A) e generare brand nuovi da una referenza (Mode B). Finché
restava unita non era consegnabile a un cliente — nome, description e materiale
parlavano di Flowente.

- **`flowente-brand`** — uso interno, applica il brand Flowente. Ha ereditato
  token, componenti, guidelines, UI kit e assets senza modifiche.
- **`brand-forge`** — generatore brand-agnostico, vendibile. Non contiene
  materiale Flowente: se `flowente-brand` è installata di fianco la usa come
  esempio di profondità attesa, altrimenti si regge da sola.

## Dove si sta andando

L'output di `brand-forge` non deve restare una cartella di deliverable: deve
diventare una **skill installabile** (`brand-pack-<cliente>`). Il cliente la
installa e da quel momento il suo Claude produce on-brand da solo. È il pezzo
che ci distingue dai generatori di brand kit in PDF.

## Stato

- **Fase 0** — materiale trasportato nel repo. ✅
- **Fase 1** — split in `flowente-brand` + `brand-forge`. ✅ Nessuna funzionalità
  nuova: solo separazione, così il diff resta leggibile.
- **Fase 2** — innesto dei pattern (divergenza, gate di approvazione,
  enforcement, routing negativo). Prossima.

Dettaglio e motivazioni in `docs/piano-brand-toolkit.md`.

## Installazione locale (durante lo sviluppo)

Le skill si testano copiandole (o linkandole) in `~/.claude/skills/`.
Attenzione: quella cartella è sincronizzata da claude.ai e può sovrascrivere —
vedi la regola in cima.

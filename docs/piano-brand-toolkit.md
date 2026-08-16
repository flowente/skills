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

| # | Manca | Perché è un problema |
| --- | --- | --- |
| 1 | Fase divergente | Va da referenza a *un* brand, diretto. Nessuna esplorazione, niente da far scegliere al cliente. |
| 2 | Gate duri | Ci sono le domande di onboarding, poi corre fino in fondo. Servono stop alla scelta direzione e alla review guidelines. |
| 3 | Deliverable cliente | Esce una cartella che rispecchia il package. Un cliente si aspetta PDF + ZIP. |
| 4 | Logo | Dichiara onestamente che non sa vettorializzare e si ferma. Serve generazione + validazione. |
| 5 | Spec unico | Token CSS sì, manifest JSON che li lega e export Tailwind no. |
| 6 | Enforcement | Regole scritte come aggettivi invece che come vincoli verificabili. |

## Regola di neutralità di `brand-forge`

Un cliente non deve vedere il nome di un altro brand nel pacchetto che compra.
`brand-forge` è quindi **brand-neutral per costruzione**: non spedisce l'identità
di nessuna azienda e non ne nomina nessuna, nemmeno come esempio.

Il meccanismo di calibrazione resta, ma senza nome: se un pacchetto di brand
completamente documentato è installato di fianco, viene letto come esempio di
profondità attesa. Se non c'è, la lista di deliverable dello Step 6 è la
specifica. In nessuno dei due casi il pacchetto porta con sé materiale altrui.

Vale anche per il futuro: gli esempi di specificità delle regole vanno scritti in
forma generica ("l'accento deve avere uno spazio negativo dichiarato"), mai
citando le scelte di un brand reale.

## Fasi

### Fase 0 — Fondamenta
Repo dedicato come fonte di verità, materiale trasportato, packaging plugin
predisposto.

**Rischio risolto:** le skill vivono anche in `~/.claude/skills/synced/`,
sovrascritta dal sync claude.ai. Deciso che **comanda GitHub**: questo repo è la
fonte di verità, la copia sincronizzata si riallinea. Regola scritta nel README.

Stato: ✅ fatta.

### Fase 1 — Split
`flowente-brand` (Mode A, invariato nella sostanza) e `brand-forge` (Mode B,
brand-agnostico). **Zero funzionalità nuove**: solo separazione, così il diff è
verificabile e non si mescola con il resto.

Deciso qui: cosa è condiviso fra le due. I componenti React, i token, le
guidelines, l'UI kit e gli assets sono materiale Flowente e restano in
`flowente-brand`. `brand-forge` **non li copia**: se `flowente-brand` è
installata di fianco la usa come esempio di profondità attesa, altrimenti si
regge sulla lista di deliverable dello Step 5 del suo metodo. È la condizione
per poterla consegnare a un cliente senza consegnargli anche il brand Flowente.

Fatto in aggiunta alla pura separazione, perché senza sarebbero rimasti
riferimenti rotti:

- rimosso il frontmatter da `references/brand-generator.md` — non è più un punto
  di ingresso di skill ma un documento letto da `brand-forge`, e un `name:`
  residuo confonderebbe la scoperta delle skill
- riscritti i rimandi ai file Flowente che `brand-forge` non spedisce più
- aggiunto routing negativo alle description di entrambe ("NOT for X — use Y"),
  che era già in programma per la Fase 2 ma qui serviva a evitare che le due
  skill si attivassero a vicenda

Le citazioni di Flowente rimaste dentro il metodo sono state poi tolte tutte —
vedi la regola qui sotto.

Stato: ✅ fatta.

### Fase 2 — Innesto dei pattern
La fase che rende di più. Tutta su `brand-forge`.

- **Regola di divergenza.** Tre direzioni obbligatorie, e due qualsiasi devono
  differire su almeno 4 assi strutturali su 6 (densità, saturazione, struttura
  del layout, energia tipografica, device grafico, temperatura). La verifica è a
  coppie e va mostrata in output come tabella: il cliente deve *vedere* la
  divergenza, non fidarsi. Previsto lo sblocco per assi vincolati dall'intake.
- **Due stop duri:** dopo le direzioni e dopo il sistema scritto. Override
  `--full` / `cost_ack=proceed` per l'uso non interattivo — che rinuncia alle
  review, mai alle domande di intake.
- **Enforcement al posto degli aggettivi:** fotografia (prodotto in uso, stand-in
  rappresentativi vietati), texture (ambient, mai pattern letterale), contrasto
  (WCAG AA calcolato sui hex reali e riportato, non assunto), accento (deve avere
  uno spazio negativo dichiarato), "never do" testabili.
- Routing negativo nelle description — anticipato in Fase 1.
- Progressive disclosure: `SKILL.md` tiene la forma della run, il metodo pesante
  sta in `references/brand-generator.md`.

Nota: il controllo contrasto WCAG era previsto in Fase 3 come chiusura di un gap
del materiale. È finito qui perché è una regola di enforcement sull'output
generato, e separarla dalle altre non aveva senso.

Stato: ✅ fatta.

### Fase 3 — Deliverable cliente

Il deliverable non è una cartella di documenti: è **una skill installabile**. Il
cliente la installa e il suo agente produce on-brand da solo. È la cosa che paga.

- `templates/brand-pack/` — scheletro da copiare e riempire: `SKILL.md` (il
  pacchetto è installabile, non solo leggibile), `README.md`, il system prompt
  autosufficiente, `guidelines.html` stampabile, `brand.json`, `assets/`.
  I file portano `.tmpl` così lo scheletro non viene scoperto come skill vera.
- `brand.json` è la fonte di verità unica; `tokens/*.css` e `tailwind.brand.js`
  sono generati e non si toccano a mano.
- `scripts/build_brand.py` — genera i derivati **e fa da gate**: calcola il
  contrasto WCAG AA su ogni coppia semantica ed esce in errore se una fallisce.
  Solo stdlib, così un cliente può rigenerare il proprio pack senza installare
  niente.
- `scripts/validate_logo.py` — rifiuta i modi tipici in cui un image model
  sbaglia un logo (sfondo opaco invece dell'alpha, canvas non quadrata, margini
  larghi, sorgente sotto 1024px) e verifica che a 16px resti qualcosa di
  leggibile. Poi scrive le otto taglie. Richiede Pillow.
- Consegna: PDF da `guidelines.html`, ZIP, riga di installazione.

Entrambi gli script sono gate, non report: escono non-zero quando il pack non è
in condizione di essere spedito. Testati su fixture buone e volutamente rotte.

Quello che gli script non giudicano — se il mark è bello, se è originale, se
legge come il brand — resta umano, ed è scritto nel metodo.

Stato: ✅ fatta.

### Fase 4 — Packaging
`.claude-plugin/` con `plugin.json` e `marketplace.json`. Eventuale multi-target
Codex/Cursor se serve.

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

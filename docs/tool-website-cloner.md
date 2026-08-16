# ai-website-cloner-template — valutazione

Repo: `JCodesMore/ai-website-cloner-template`, branch `master`. MIT, ~32k stelle, ~4.7k fork. Valutato il 16 agosto 2026 leggendo README e `.claude/skills/clone-website/SKILL.md`.

## Cos'è

Una skill per agenti (`/clone-website <url>`) più uno scaffold Next.js. Ricostruisce un sito da un URL in cinque fasi:

1. **Ricognizione** — screenshot a 1440 e 390, estrazione di font, colori, favicon, e uno *sweep di interazione* che testa scroll, hover e click per scoprire i comportamenti che uno screenshot nasconde.
2. **Fondazione** — font, CSS condiviso, interfacce TypeScript, download degli asset in cartelle namespaced.
3. **Spec per componente** — ogni sezione viene estratta, descritta in un file di specifica, e passata a un builder.
4. **Build in parallelo** — builder in worktree separati, merge con verifica di `npm run build` a ogni passo.
5. **QA visiva** — confronto affiancato desktop/mobile, test delle interazioni, e non è finito finché non combacia.

Estrae il CSS con `getComputedStyle()`: misura, non stima. Richiede un MCP browser (Chrome, Playwright, Browserbase, Puppeteer).

## Perché NON lo innestiamo su `brand-forge`

Fanno due lavori contrari.

Il cloner punta alla **replica fedele**, e il suo stesso testo lo dice: *"no mock content: all text and images extracted from live site"*. Contenuti e immagini originali sono il risultato voluto.

`brand-forge` fa l'opposto: prende la struttura e **sostituisce** palette, tipografia, segni e copy. Il contenuto originale è esattamente ciò che deve sparire.

Tre attriti pratici, oltre a quello di fondo:

- **Produce Next.js 16 + React 19 + shadcn + Tailwind v4.** I nostri pacchetti sono HTML e CSS statici, che il cliente apre con doppio click. Adottarlo lega ogni consegna a una toolchain Node.
- **Clona siti vivi.** I riferimenti grafici che usiamo sono screenshot da portali tipo Dribbble — che tra l'altro è bloccato dal proxy di rete. Su quel materiale non ha niente da fare.
- Serve un MCP browser dedicato; Playwright via shell funziona ma non è plug-and-play.

## Dove invece servirebbe

**Migrazioni.** *"Abbiamo il sito su Wix o WordPress, rifallo moderno"* è un servizio vendibile, ed è il caso in cui il cloner fa esattamente il lavoro giusto: sul sito del cliente, con il suo permesso.

Non su quello di un concorrente. La repo stessa vieta phishing, impersonificazione e furto di design, ed è il rischio reale se lo si usa come acceleratore creativo invece che come strumento di migrazione.

Se quel servizio ci interessa, va tenuto come **skill separata**, non fuso con la generazione di brand.

## Cosa abbiamo già preso

Tre pattern, portati in `brand-forge` senza il tool:

1. **Misurare invece di stimare.** Quando la referenza è un sito vivo si legge `getComputedStyle()` su un browser reale, si catturano entrambi i viewport e si fa lo sweep delle interazioni. Una spaziatura misurabile non si indovina.
2. **La spec prima del componente.** Un file corto per componente — struttura, valori esatti, stati, comportamento — prima di scrivere il markup. Rende il lavoro parallelizzabile, dà al revisore qualcosa contro cui verificare, e mette le regole per iscritto invece che dentro il codice.
3. **Il diff visivo come gate obbligatorio.** Render a 1440 e 390, si guardano gli screenshot, si corregge, si riguarda. Un deliverable visivo non si consegna senza averlo visto: contare le pagine non è una verifica.

Il terzo è quello che è costato di più impararlo, ed è ora una regola dura in `SKILL.md`.

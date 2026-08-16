# Impaginazione — spazi e proporzioni

Letto da `brand-forge` prima di costruire qualunque pagina o documento. Non è un capitolo di stile: è la ragione per cui un lavoro sembra fatto da un professionista o sembra un template riempito.

Un sistema può avere colori giusti, font giusti e regole giuste, e sembrare comunque dilettantesco. Quasi sempre il motivo è uno di questi cinque.

## 1. La scala tipografica è modulare, non arbitraria

Ogni dimensione discende da una base e da un rapporto. Niente valori inventati caso per caso.

- Base: 16px (1rem). Rapporto: **1.25** per interfacce dense, **1.333** per pagine editoriali.
- Si scrive la scala una volta e si usa solo quella: `0.8 · 0.9 · 1 · 1.25 · 1.563 · 1.953 · 2.441 · 3.052`.
- Una dimensione fuori scala va giustificata, non aggiunta di nascosto.

**Il difetto più comune è la scala piatta.** Se il titolo hero è grande il doppio del testo, la pagina sembra un documento Word. Un hero deve stare fra **4 e 6 volte** il corpo del testo: con base 16px significa 64–96px, non 32px. Il salto grande è ciò che dà gerarchia; i salti piccoli la uccidono.

Regola pratica: fra due livelli adiacenti (h2 → h3 → body) deve esserci una differenza **visibile a colpo d'occhio, senza confrontarli affiancati**. Se devi misurare per capire quale è più grande, sono lo stesso livello.

## 2. La lunghezza di riga è un vincolo, non un caso

- Testo corrente: **45–75 caratteri**. Sotto i 45 il ritmo si spezza, sopra i 75 l'occhio perde la riga.
- Titoli display: **15–30 caratteri**, così spezzano dove decidi tu e non dove capita.
- Occhiello e didascalie: sotto i 40.

Si impone in `ch`, non in pixel: `max-width: 62ch` continua a funzionare se cambi il carattere. **Un paragrafo che occupa tutta la larghezza del contenitore è quasi sempre un errore**, anche quando il contenitore è stretto.

## 3. La prossimità conta più della spaziatura

È la regola che fa la differenza maggiore, e quella che quasi tutti sbagliano.

Lo spazio **dentro** un gruppo deve essere nettamente minore dello spazio **fra** gruppi. Un titolo appartiene al paragrafo che lo segue: se il margine sotto il titolo è uguale a quello sopra, il titolo galleggia e la gerarchia sparisce.

Proporzione di riferimento:

| Relazione | Spazio |
| --- | --- |
| Titolo → suo paragrafo | 0.4× |
| Paragrafo → paragrafo | 0.7× |
| Fine gruppo → titolo successivo | 2× |
| Fra sezioni | 5–7× |

dove 1× è l'unità base (8px è una scelta comoda). **Gap uniformi ovunque sono il segno più riconoscibile di una pagina non progettata.**

## 4. Il ritmo verticale non è costante

Dare a ogni sezione lo stesso padding è comodo e sbagliato: appiattisce tutto sullo stesso livello di importanza.

- Hero e chiusura: il ritmo pieno, o di più.
- Sezioni portanti: ritmo pieno.
- Sezioni di servizio (FAQ, note, contatti secondari): 0.6–0.7×.

Chi legge percepisce l'importanza dallo spazio che le hai dato. Se sono tutte uguali, non ne hai dichiarata nessuna.

## 5. Il padding è proporzionale al componente

Un padding fisso di 24px su una card da 200px e su un pannello da 800px produce due densità diverse e un risultato incoerente.

- Componenti piccoli (tag, badge, bottoni): padding 0.6–1× l'altezza della riga di testo.
- Card medie: 1.5–2×.
- Pannelli grandi e sezioni piene: 3–4×.

Stessa logica per i raggi: un raggio da 28px su un bottone alto 40px lo trasforma in una pill, che magari non era l'intenzione. **Il raggio va scelto in rapporto all'altezza dell'elemento**, non copiato dal componente accanto.

## Controlli prima di dire che è finito

Da eseguire guardando il render, non il codice:

1. **Socchiudi gli occhi.** Devono restare visibili tre livelli di gerarchia. Se ne vedi uno solo, la scala è piatta.
2. **Misura la riga più lunga.** Oltre i 75 caratteri, si stringe.
3. **Guarda i titoli.** Ognuno è più vicino al testo che introduce che a quello che lo precede?
4. **Guarda i piedi di pagina e i margini.** Il testo tocca un bordo? Un elemento sborda? Un blocco finisce sotto il folio?
5. **Guarda le pagine di solo testo.** Se sono piene a metà, non è aria: è una scala troppo piccola per il formato. Si alza la scala, non si aggiunge testo a caso.
6. **Confronta due sezioni adiacenti.** Hanno lo stesso peso visivo? Se sì, era voluto?

## Perché queste regole esistono

Sono state scritte dopo aver consegnato un PDF con tipografia piatta, pagine mezze vuote e testo che toccava il bordo. Nessuna di quelle cose viola una regola di brand: violano le proporzioni, che è ciò che l'occhio giudica per primo e di cui nessun controllo automatico si accorge.

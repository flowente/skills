# assets/

Cosa deve esserci prima che il pacchetto si possa consegnare.

## Generati dallo script

```
python3 scripts/validate_logo.py assets/mark.png --out assets/
```

- `mark-16.png` · `mark-32.png` · `mark-48.png` · `mark-64.png`
- `mark-128.png` · `mark-256.png` · `mark-512.png` · `mark-1024.png`

Lo script rifiuta il sorgente se non è trasparente, se la canvas non è quadrata, se ha margini larghi, se è sotto i 1024px o se a 16px il mark diventa una macchia o un blocco pieno.

## Da produrre a mano — lo script non li può fare

- `mark.svg` — il solo simbolo, vettoriale
- `wordmark.svg` — il solo logotipo
- `lockup-horizontal.svg` — simbolo + logotipo affiancati
- `lockup-stacked.svg` — simbolo sopra, logotipo sotto
- `mark-reversed.svg` — versione per fondi scuri
- `favicon.svg` — versione semplificata se il mark completo non regge i 16px

## Da dichiarare, non indovinare

Clear-space e dimensione minima vanno scritti nel `README.md` del pacchetto. Se non sono stati definiti, si scrive che non lo sono: un valore inventato sembra preciso e non lo è.

Animated hand-drawn stroke (the brand's "Flow Marks") that boils between 3 pencil-filtered frames. Requires `<SvgFilters />` once on the page.

```jsx
<SvgFilters />
<FlowMark mark="coil" style={{ width: 340, height: 230 }} />
```

Marks: `coil` (hero loops), `onde` (3 waves), `flusso` (loop stroke), `onda` (single wave), `freccia` (arrow-ish swoosh). `animated={false}` for static (print/reduced motion). Stroke color follows `--text`, never the accent.

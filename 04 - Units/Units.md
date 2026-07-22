# CSS Units

CSS units define the size of elements, text, spacing, and layouts.

Units are divided into two categories:

- Absolute Units
- Relative Units

---

# Absolute Units

Absolute units always represent a fixed size.

## px (Pixels)

```css
width:200px;
```

Most commonly used unit.

---

## cm (Centimeters)

```css
width:5cm;
```

Mostly useful for printing.

---

## mm (Millimeters)

```css
width:20mm;
```

Printing purposes.

---

## in (Inches)

```css
width:2in;
```

Printing.

---

## pt (Points)

```css
font-size:18pt;
```

Commonly used for printed documents.

---

## pc (Picas)

```css
font-size:2pc;
```

Rarely used.

---

# Relative Units

Relative units depend on another value.

---

## %

```css
width:80%;
```

Relative to the parent element.

---

## em

```css
font-size:2em;
```

Relative to the parent's font size.

---

## rem

```css
font-size:2rem;
```

Relative to the root (`html`) font size.

Usually preferred over `em` for consistent sizing.

---

## vw

```css
width:50vw;
```

1vw = 1% of the viewport width.

---

## vh

```css
height:100vh;
```

1vh = 1% of the viewport height.

---

## vmin

```css
width:20vmin;
```

Based on the smaller viewport dimension.

---

## vmax

```css
width:20vmax;
```

Based on the larger viewport dimension.

---

## ch

```css
width:30ch;
```

Approximately the width of the "0" character.

Useful for readable text widths.

---

## ex

```css
font-size:2ex;
```

Based on the height of the lowercase "x".

Rarely used.

---

# Summary

| Unit | Type | Relative To |
|------|------|-------------|
| px | Absolute | Fixed pixels |
| cm | Absolute | Centimeters |
| mm | Absolute | Millimeters |
| in | Absolute | Inches |
| pt | Absolute | Points |
| pc | Absolute | Picas |
| % | Relative | Parent |
| em | Relative | Parent font size |
| rem | Relative | Root font size |
| vw | Relative | Viewport width |
| vh | Relative | Viewport height |
| vmin | Relative | Smaller viewport side |
| vmax | Relative | Larger viewport side |
| ch | Relative | Width of "0" |
| ex | Relative | Height of "x" |
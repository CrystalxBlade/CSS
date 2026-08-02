# CSS Tables

CSS allows you to customize the appearance of HTML tables.

---

# 1. border-collapse

Controls whether table borders are merged.

```css
border-collapse:collapse;
```

Values:

- collapse
- separate (default)

---

# 2. border-spacing

Sets space between table cells.

```css
border-spacing:10px;
```

Works only with:

```css
border-collapse:separate;
```

---

# 3. caption-side

Changes caption position.

```css
caption-side:top;
```

Values:

- top
- bottom

---

# 4. table-layout

Controls column sizing.

```css
table-layout:auto;
```

Values:

- auto
- fixed

---

# 5. text-align

Aligns table text.

```css
text-align:center;
```

---

# 6. Vertical Alignment

```css
vertical-align:middle;
```

Values:

- top
- middle
- bottom

---

# 7. Empty Cells

```css
empty-cells:hide;
```

Values:

- show
- hide

Works with:

```css
border-collapse:separate;
```

---

# 8. Zebra Striping

```css
tr:nth-child(even){
    background:#f2f2f2;
}
```

Improves readability.

---

# 9. Hover Effect

```css
tr:hover{
    background:#ddd;
}
```

Useful for data tables.

---

# Summary

| Property | Purpose |
|----------|---------|
| border-collapse | Merge borders |
| border-spacing | Space between cells |
| caption-side | Caption position |
| table-layout | Column sizing |
| text-align | Horizontal alignment |
| vertical-align | Vertical alignment |
| empty-cells | Hide/show empty cells |
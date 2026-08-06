# CSS Grid

CSS Grid is a **two-dimensional layout system** that arranges items into rows and columns.

Unlike Flexbox, Grid can control both directions at the same time.

---

# Enable Grid

```css
.container{
    display:grid;
}
```

---

# Grid Container Properties

## grid-template-columns

Creates columns.

```css
grid-template-columns:200px 200px 200px;
```

Using fractions:

```css
grid-template-columns:1fr 2fr 1fr;
```

Using repeat()

```css
grid-template-columns:repeat(3,1fr);
```

---

## grid-template-rows

Creates rows.

```css
grid-template-rows:100px 200px;
```

---

## gap

Space between rows and columns.

```css
gap:20px;
```

Also

```css
row-gap:20px;

column-gap:30px;
```

---

## justify-items

Aligns items horizontally inside each grid cell.

Values

- stretch
- start
- center
- end

---

## align-items

Aligns items vertically inside each grid cell.

Values

- stretch
- start
- center
- end

---

## place-items

Shorthand.

```css
place-items:center;
```

Equivalent

```css
justify-items:center;
align-items:center;
```

---

## justify-content

Aligns the entire grid horizontally.

---

## align-content

Aligns the entire grid vertically.

---

## place-content

Shorthand.

```css
place-content:center;
```

---

# Grid Item Properties

## grid-column

```css
grid-column:1 / 3;
```

Item spans columns.

---

## grid-row

```css
grid-row:1 / 3;
```

Item spans rows.

---

## grid-area

Named placement.

```css
grid-area:header;
```

---

## justify-self

Aligns one item horizontally.

---

## align-self

Aligns one item vertically.

---

## place-self

Shorthand.

```css
place-self:center;
```

---

# Auto Layout

## auto-fill

```css
grid-template-columns:
repeat(auto-fill,minmax(200px,1fr));
```

---

## auto-fit

```css
grid-template-columns:
repeat(auto-fit,minmax(200px,1fr));
```

---

## minmax()

```css
minmax(200px,1fr)
```

Defines minimum and maximum sizes.

---

## fr Unit

```css
1fr
2fr
3fr
```

Represents a fraction of available space.

---

# Named Grid Areas

```css
grid-template-areas:
"header header"
"sidebar main"
"footer footer";
```

---

# Summary

| Property | Purpose |
|----------|---------|
| display:grid | Enable Grid |
| grid-template-columns | Columns |
| grid-template-rows | Rows |
| gap | Space |
| justify-items | Horizontal item alignment |
| align-items | Vertical item alignment |
| place-items | Shorthand |
| justify-content | Horizontal grid alignment |
| align-content | Vertical grid alignment |
| place-content | Shorthand |
| grid-column | Span columns |
| grid-row | Span rows |
| grid-area | Named area |
| justify-self | One item horizontal |
| align-self | One item vertical |
| place-self | Shorthand |
| repeat() | Repeat values |
| minmax() | Flexible sizing |
| auto-fit | Responsive grid |
| auto-fill | Responsive grid |
| fr | Fraction unit |
# CSS Colors

CSS provides multiple ways to define colors.

---

## 1. Named Colors

```css
color: red;
color: blue;
color: green;
```

Uses predefined color names.

Example:

```css
h1{
    color:red;
}
```

---

## 2. HEX Colors

```css
color:#3498db;
```

Format:

```text
#RRGGBB
```

Example:

```css
color:#ff0000;
```

Red = FF

Green = 00

Blue = 00

---

## 3. RGB

```css
color:rgb(255,0,0);
```

Format:

```text
rgb(red, green, blue)
```

Each value ranges from **0 to 255**.

---

## 4. RGBA

```css
color:rgba(255,0,0,0.5);
```

The fourth value is **alpha (transparency)**.

Range:

```
0 = Fully Transparent

1 = Fully Visible
```

---

## 5. HSL

```css
color:hsl(240,100%,50%);
```

- Hue → 0–360°
- Saturation → 0–100%
- Lightness → 0–100%

---

## 6. HSLA

```css
color:hsla(240,100%,50%,0.4);
```

HSL with transparency.

---

## 7. currentColor

```css
border:2px solid currentColor;
```

Uses the current value of the `color` property.

---

## 8. Opacity

```css
opacity:0.5;
```

Changes the transparency of the **entire element**, including its text and children.

---

## Summary

| Method | Example |
|---------|---------|
| Named | `red` |
| HEX | `#ff0000` |
| RGB | `rgb(255,0,0)` |
| RGBA | `rgba(255,0,0,0.5)` |
| HSL | `hsl(0,100%,50%)` |
| HSLA | `hsla(0,100%,50%,0.5)` |
| currentColor | `border: currentColor` |
| Opacity | `opacity:0.5` |
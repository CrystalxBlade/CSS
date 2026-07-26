# CSS Text and Fonts

CSS provides many properties to control the appearance of text and typography.

---

# 1. font-family

Defines the font used by an element.

```css
font-family: Arial, sans-serif;
```

Example:

```css
p{
    font-family:"Poppins", sans-serif;
}
```

Always include a fallback font.

---

# 2. font-size

Sets the size of the text.

```css
font-size:20px;
```

Common units:

- px
- em
- rem
- %

---

# 3. font-weight

Controls how bold text appears.

```css
font-weight:normal;
font-weight:bold;
font-weight:700;
```

---

# 4. font-style

Changes the font style.

```css
font-style:italic;
```

Values:

- normal
- italic
- oblique

---

# 5. text-align

Aligns text horizontally.

```css
text-align:left;
text-align:center;
text-align:right;
text-align:justify;
```

---

# 6. text-transform

Changes letter casing.

```css
text-transform:uppercase;
```

Values:

- uppercase
- lowercase
- capitalize
- none

---

# 7. text-decoration

Decorates text.

```css
text-decoration:underline;
```

Common values:

- none
- underline
- overline
- line-through

---

# 8. letter-spacing

Adjusts space between characters.

```css
letter-spacing:2px;
```

---

# 9. word-spacing

Adjusts space between words.

```css
word-spacing:8px;
```

---

# 10. line-height

Controls spacing between lines.

```css
line-height:1.5;
```

---

# 11. text-shadow

Adds a shadow behind text.

```css
text-shadow:2px 2px 4px gray;
```

Syntax:

```css
text-shadow:
horizontal
vertical
blur
color;
```

---

# 12. Google Fonts

Example:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

Then use it:

```css
font-family:"Poppins", sans-serif;
```

---

# Summary

| Property | Purpose |
|----------|---------|
| font-family | Selects the font |
| font-size | Sets text size |
| font-weight | Controls boldness |
| font-style | Italic/Oblique |
| text-align | Aligns text |
| text-transform | Changes letter case |
| text-decoration | Underline, line-through, etc. |
| letter-spacing | Space between letters |
| word-spacing | Space between words |
| line-height | Space between lines |
| text-shadow | Adds text shadow |
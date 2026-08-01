# CSS Borders

Borders surround the padding and content of an element.

---

# 1. border-width

Defines border thickness.

```css
border-width:5px;
```

---

# 2. border-style

Defines border appearance.

```css
border-style:solid;
```

Common values:

- solid
- dashed
- dotted
- double
- groove
- ridge
- inset
- outset
- none
- hidden

---

# 3. border-color

Changes border color.

```css
border-color:red;
```

---

# 4. border (Shorthand)

Instead of writing:

```css
border-width:2px;
border-style:solid;
border-color:black;
```

Use:

```css
border:2px solid black;
```

---

# 5. Individual Borders

```css
border-top
border-right
border-bottom
border-left
```

Example:

```css
border-top:4px solid red;
```

---

# 6. border-radius

Rounds element corners.

```css
border-radius:10px;
```

Circle:

```css
border-radius:50%;
```

---

# 7. outline

Outline appears **outside** the border.

```css
outline:2px solid red;
```

Unlike borders:

- Doesn't affect element size
- Useful for keyboard focus styles

---

# 8. outline-offset

Moves the outline away from the border.

```css
outline-offset:5px;
```

---

# 9. border-image

Uses an image or gradient as the border.

Example:

```css
border:20px solid transparent;

border-image:
linear-gradient(red,blue) 1;
```

---

# Border vs Outline

| Border | Outline |
|---------|----------|
| Takes space | Doesn't take space |
| Part of Box Model | Outside Box Model |
| Can have radius | Doesn't follow border-radius perfectly in all cases |

---

# Summary

| Property | Purpose |
|----------|---------|
| border | Shorthand |
| border-width | Thickness |
| border-style | Style |
| border-color | Color |
| border-top/right/bottom/left | Individual sides |
| border-radius | Rounded corners |
| outline | Outside border |
| outline-offset | Gap between border and outline |
| border-image | Image/gradient border |
# CSS Shadows

CSS shadows create depth and visual separation between elements.

The two main shadow properties are:

```css
box-shadow
text-shadow
```

---

# 1. box-shadow

`box-shadow` adds a shadow around an element's box.

Basic syntax:

```css
box-shadow:
    offset-x
    offset-y
    blur-radius
    spread-radius
    color;
```

Example:

```css
box-shadow:
    10px
    10px
    10px
    0
    rgba(0,0,0,.2);
```

---

# 2. Offset X

Controls the horizontal position.

```css
box-shadow:10px 0;
```

Positive value:

```text
      BOX
       █
       █
         SHADOW →
```

Negative value:

```css
box-shadow:-10px 0;
```

Shadow moves to the left.

---

# 3. Offset Y

Controls the vertical position.

```css
box-shadow:0 10px;
```

Positive:

```text
BOX
███
 ↓
SHADOW
```

Negative:

```css
box-shadow:0 -10px;
```

Shadow moves upward.

---

# 4. Blur Radius

Controls how soft the shadow is.

```css
box-shadow:
    0
    10px
    30px
    rgba(0,0,0,.2);
```

Higher blur:

```text
Soft / Diffused
████████████
```

Lower blur:

```text
Sharper
████
```

---

# 5. Spread Radius

Controls how much the shadow expands.

```css
box-shadow:
    0
    10px
    20px
    5px
    rgba(0,0,0,.2);
```

The fourth value is the spread radius.

---

# 6. Color

You can use any valid CSS color.

```css
box-shadow:
    0 10px 20px red;
```

RGBA is commonly used:

```css
box-shadow:
    0 10px 20px rgba(0,0,0,.2);
```

Modern CSS can also use:

```css
box-shadow:
    0 10px 20px rgb(0 0 0 / 20%);
```

---

# 7. Inset Shadow

Normally the shadow appears outside the element.

Use `inset` to place it inside.

```css
box-shadow:
    inset
    0
    0
    20px
    rgba(0,0,0,.2);
```

Conceptually:

```text
+----------------+
| ██████████████ |
| ██          ██ |
| ██   BOX    ██ |
| ██          ██ |
| ██████████████ |
+----------------+
```

---

# 8. Multiple Shadows

Multiple shadows can be separated by commas.

```css
box-shadow:

    0 5px 10px rgba(0,0,0,.2),

    0 15px 30px rgba(0,0,0,.15);
```

Useful for creating more realistic depth.

---

# 9. No Shadow

Remove a shadow with:

```css
box-shadow:none;
```

---

# 10. Text Shadow

`text-shadow` adds a shadow behind text.

Syntax:

```css
text-shadow:
    offset-x
    offset-y
    blur-radius
    color;
```

Example:

```css
text-shadow:
    3px
    3px
    5px
    rgba(0,0,0,.4);
```

---

# 11. Multiple Text Shadows

```css
text-shadow:

    2px 2px 3px black,

    4px 4px 5px gray;
```

---

# 12. Glow Effect

Use a shadow with a large blur and little or no offset.

```css
.glow{

    box-shadow:
        0 0 20px cyan;
}
```

Text:

```css
.title{

    text-shadow:
        0 0 20px cyan;
}
```

---

# 13. Hover Shadow

Shadows are often changed when hovering.

```css
.card{

    box-shadow:
        0 5px 15px rgba(0,0,0,.15);

    transition:
        box-shadow .3s;
}

.card:hover{

    box-shadow:
        0 15px 30px rgba(0,0,0,.25);
}
```

---

# 14. Floating Card

```css
.card{

    box-shadow:
        0 10px 30px
        rgba(0,0,0,.15);
}
```

Large blur with a small downward offset creates a floating effect.

---

# 15. Neumorphism

Soft shadows can create a raised/sunken UI effect.

```css
.card{

    background:#e8e8e8;

    box-shadow:

        8px 8px 16px #c5c5c5,

        -8px -8px 16px #ffffff;
}
```

Use this effect carefully because excessive shadows can hurt readability.

---

# 16. Button Press Effect

```css
button{

    box-shadow:
        0 5px 10px rgba(0,0,0,.2);
}

button:active{

    box-shadow:
        0 2px 4px rgba(0,0,0,.2);
}
```

---

# 17. Shadow vs Border

Border:

```css
border:1px solid #ccc;
```

Shadow:

```css
box-shadow:
    0 5px 15px rgba(0,0,0,.2);
```

A border changes the element's visible boundary.

A shadow creates visual depth without changing the layout dimensions.

---

# 18. Shadow Does Not Normally Affect Layout

For example:

```css
.card{

    width:200px;

    height:100px;

    box-shadow:
        0 10px 20px black;
}
```

The shadow does not increase the element's layout width or height.

---

# 19. Common UI Uses

Shadows are commonly used for:

- Cards
- Buttons
- Navigation bars
- Dropdown menus
- Modals
- Tooltips
- Floating elements
- Text effects
- Glows
- Focus indicators

---

# 20. Shadow Design Tips

Avoid making every element heavily shadowed.

Instead:

```text
No shadow
    ↓
Small shadow
    ↓
Medium shadow
    ↓
Large shadow
```

Use stronger shadows to communicate greater elevation.

For example:

```text
Page
 ↓
Card
 ↓
Dropdown
 ↓
Modal
```

The modal can have a stronger shadow than the card.

---

# Summary

## box-shadow

```css
box-shadow:
    x
    y
    blur
    spread
    color;
```

## text-shadow

```css
text-shadow:
    x
    y
    blur
    color;
```

Remember:

```text
X       → horizontal position
Y       → vertical position
Blur    → softness
Spread  → size of shadow
Color   → shadow color
Inset   → shadow inside
```
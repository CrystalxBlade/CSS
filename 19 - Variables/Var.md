# CSS Variables (Custom Properties)

CSS Variables allow you to store reusable values and use them throughout your stylesheet.

---

# Syntax

Declare a variable:

```css
--primary-color: blue;
```

Use a variable:

```css
color: var(--primary-color);
```

---

# Global Variables

Variables are commonly declared inside `:root`.

```css
:root{
    --primary-color:#3498db;
}
```

Variables declared in `:root` are available throughout the document.

---

# Local Variables

Variables can also be declared inside a selector.

```css
.card{
    --card-color:orange;
}
```

Only that element and its descendants can use the variable.

---

# Using Variables

```css
button{
    background:var(--primary-color);
}
```

---

# Fallback Values

Provide a fallback if the variable doesn't exist.

```css
color:var(--text-color, black);
```

If `--text-color` isn't defined, `black` is used.

---

# Updating One Variable

Instead of changing many rules:

```css
background:#3498db;
border:#3498db;
color:#3498db;
```

Change just one variable:

```css
:root{
    --primary-color:#e74c3c;
}
```

Every place using `var(--primary-color)` updates automatically.

---

# Common Uses

## Theme Colors

```css
--primary-color
--secondary-color
```

---

## Font Sizes

```css
--font-small
--font-large
```

---

## Spacing

```css
--padding
--margin
```

---

## Border Radius

```css
--radius
```

---

## Dark Mode

```css
:root{
    --bg:white;
    --text:black;
}

.dark{
    --bg:#222;
    --text:white;
}
```

---

# Best Practices

✅ Store reusable values in `:root`.

✅ Use meaningful variable names.

✅ Group related variables together.

✅ Use variables for colors, spacing, typography, and sizing.

---

# Summary

| Feature | Example |
|---------|---------|
| Declare | `--color:red;` |
| Use | `var(--color)` |
| Global | `:root{}` |
| Local | `.card{}` |
| Fallback | `var(--color, black)` |
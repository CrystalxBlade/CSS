# CSS Lists

CSS provides several properties to style ordered and unordered lists.

---

# 1. list-style-type

Changes the marker style.

```css
list-style-type:circle;
```

### Common values

For unordered lists:

- disc (default)
- circle
- square
- none

For ordered lists:

- decimal
- decimal-leading-zero
- lower-alpha
- upper-alpha
- lower-roman
- upper-roman
- lower-greek

---

# 2. list-style-position

Controls where the marker appears.

```css
list-style-position:inside;
```

Values:

- inside
- outside (default)

---

# 3. list-style-image

Uses an image as the marker.

```css
list-style-image:url("images/check.png");
```

---

# 4. list-style (Shorthand)

Instead of writing:

```css
list-style-type:square;
list-style-position:inside;
```

Use:

```css
list-style:square inside;
```

---

# Removing List Markers

Useful for navigation menus.

```css
ul{
    list-style:none;
}
```

---

# Common Uses

## Navigation Menu

```css
ul{
    list-style:none;
    padding:0;
}
```

---

## Sidebar

```css
list-style:none;
```

---

## Checklist

```css
list-style-image:url(check.png);
```

---

# Summary

| Property | Purpose |
|----------|---------|
| list-style-type | Changes marker type |
| list-style-position | Marker inside or outside |
| list-style-image | Uses image as marker |
| list-style | Shorthand |
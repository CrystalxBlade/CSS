# CSS Transforms

The `transform` property changes an element's appearance without affecting the normal document flow.

---

# Syntax

```css
transform:function();
```

---

# translate()

Moves an element.

```css
transform:translate(50px,20px);
```

Also available:

```css
translateX()

translateY()
```

---

# rotate()

Rotates an element.

```css
transform:rotate(45deg);
```

Units:

- deg
- rad
- turn

---

# scale()

Changes size.

```css
transform:scale(1.2);
```

Also:

```css
scaleX()

scaleY()
```

---

# skew()

Tilts an element.

```css
transform:skew(20deg);
```

Also:

```css
skewX()

skewY()
```

---

# matrix()

Combines multiple transforms.

```css
transform:
matrix(a,b,c,d,e,f);
```

Rarely written manually.

---

# Multiple Transforms

```css
transform:
translateX(50px)
rotate(20deg)
scale(1.2);
```

Transforms execute **from right to left**.

---

# transform-origin

Changes the pivot point.

Default:

```css
center center
```

Example:

```css
transform-origin:left top;
```

---

# 3D Transforms

## rotateX()

```css
rotateX(45deg)
```

---

## rotateY()

```css
rotateY(45deg)
```

---

## rotateZ()

```css
rotateZ(45deg)
```

---

## perspective()

Adds depth.

```css
transform:
perspective(500px)
rotateY(45deg);
```

---

# Common Uses

- Hover cards
- Buttons
- Image zoom
- Flip cards
- Loading animations
- Navigation menus

---

# Best Practices

✅ Combine with `transition`.

✅ Use `transform` instead of changing `top` or `left` for animations.

✅ Avoid excessive 3D effects.

---

# Summary

| Function | Purpose |
|----------|---------|
| translate() | Move |
| translateX() | Horizontal move |
| translateY() | Vertical move |
| rotate() | Rotate |
| rotateX() | Rotate X-axis |
| rotateY() | Rotate Y-axis |
| rotateZ() | Rotate Z-axis |
| scale() | Resize |
| scaleX() | Horizontal resize |
| scaleY() | Vertical resize |
| skew() | Tilt |
| matrix() | Combined transform |
| perspective() | 3D depth |
| transform-origin | Pivot point |
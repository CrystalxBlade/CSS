# CSS Gradients Cheat Sheet

## Linear

```css
linear-gradient(red,blue);
```

### Direction

```css
linear-gradient(
    to right,
    red,
    blue
);
```

### Angle

```css
linear-gradient(
    90deg,
    red,
    blue
);
```

### Color Stops

```css
linear-gradient(
    red 0%,
    yellow 50%,
    blue 100%
);
```

---

## Radial

```css
radial-gradient(
    red,
    blue
);
```

### Circle

```css
radial-gradient(
    circle,
    red,
    blue
);
```

### Position

```css
radial-gradient(
    circle at top left,
    red,
    blue
);
```

---

## Conic

```css
conic-gradient(
    red,
    yellow,
    blue,
    red
);
```

### Starting Angle

```css
conic-gradient(
    from 45deg,
    red,
    blue,
    red
);
```

---

## Repeating Gradients

```css
repeating-linear-gradient(
    45deg,
    red 0 10px,
    blue 10px 20px
);
```

```css
repeating-radial-gradient(
    circle,
    red 0 10px,
    blue 10px 20px
);
```

```css
repeating-conic-gradient(
    red 0deg 30deg,
    blue 30deg 60deg
);
```

---

## Transparent Overlay

```css
background:
linear-gradient(
    rgba(0,0,0,.6),
    transparent
),
url("image.jpg");
```

---

## Gradient Text

```css
background:
linear-gradient(
    90deg,
    purple,
    orange
);

background-clip:text;

-webkit-background-clip:text;

color:transparent;
```

---

# Gradient Types

| Function | Use |
|---|---|
| `linear-gradient()` | Straight directional gradient |
| `radial-gradient()` | Circular/elliptical gradient |
| `conic-gradient()` | Rotational gradient |
| `repeating-linear-gradient()` | Repeating stripes |
| `repeating-radial-gradient()` | Repeating circular patterns |
| `repeating-conic-gradient()` | Repeating rotational patterns |

---

# Remember

`linear` → line

`radial` → center outward

`conic` → around a center

`repeating` → repeat the pattern

`color stops` → control where colors change
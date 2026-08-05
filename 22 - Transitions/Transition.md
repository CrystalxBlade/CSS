# CSS Transitions

Transitions allow CSS properties to change smoothly over time.

---

# Syntax

```css
transition: property duration timing-function delay;
```

Example:

```css
transition: background 0.5s ease;
```

---

# 1. transition-property

Specifies which property should animate.

```css
transition-property:background;
```

Multiple properties:

```css
transition-property:
background,
transform;
```

---

# 2. transition-duration

Animation speed.

```css
transition-duration:0.5s;
```

Values:

```css
0.2s

1s

500ms
```

---

# 3. transition-timing-function

Controls animation speed curve.

```css
transition-timing-function:ease;
```

Common values:

- ease
- linear
- ease-in
- ease-out
- ease-in-out

Custom:

```css
cubic-bezier()
```

---

# 4. transition-delay

Waits before animation starts.

```css
transition-delay:.5s;
```

---

# 5. transition (Shorthand)

```css
transition:
background .3s ease;
```

Multiple:

```css
transition:
background .3s,
transform .5s;
```

---

# What Can Be Transitioned?

✅ Color

```css
background
```

✅ Opacity

```css
opacity
```

✅ Size

```css
width
height
```

✅ Border Radius

```css
border-radius
```

✅ Transform

```css
transform
```

---

# Best Practices

✅ Animate `transform` and `opacity` whenever possible.

✅ Avoid animating expensive layout properties frequently.

✅ Keep transitions between 0.2s and 0.5s for most UI interactions.

---

# Summary

| Property | Purpose |
|----------|---------|
| transition-property | Property to animate |
| transition-duration | Animation length |
| transition-timing-function | Speed curve |
| transition-delay | Delay before animation |
| transition | Shorthand |
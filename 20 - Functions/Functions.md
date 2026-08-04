# CSS Functions

Functions generate or calculate CSS values.

Syntax:

```css
property:function(arguments);
```

Example:

```css
width:calc(100% - 20px);
```

---

# 1. rgb()

Creates colors.

```css
background:rgb(255,0,0);
```

---

# 2. rgba()

RGB with transparency.

```css
background:rgba(255,0,0,.5);
```

Alpha values:

- 0 = transparent
- 1 = opaque

---

# 3. hsl()

Hue, Saturation, Lightness.

```css
background:hsl(210,100%,50%);
```

---

# 4. calc()

Performs calculations.

```css
width:calc(100% - 50px);
```

Useful with:

- %
- px
- rem
- vw

---

# 5. min()

Uses the smaller value.

```css
width:min(500px,100%);
```

---

# 6. max()

Uses the larger value.

```css
width:max(300px,50%);
```

---

# 7. clamp()

Keeps a value between a minimum and maximum.

```css
font-size:clamp(16px,3vw,32px);
```

Syntax:

```css
clamp(min, preferred, max)
```

Perfect for responsive typography.

---

# 8. var()

Uses CSS Variables.

```css
color:var(--primary-color);
```

---

# 9. url()

Loads external resources.

```css
background-image:url("image.jpg");
```

Used for:

- Images
- Fonts
- Cursors

---

# Other Useful Functions

## linear-gradient()

```css
background:
linear-gradient(red,blue);
```

---

## radial-gradient()

```css
background:
radial-gradient(red,yellow);
```

---

## repeating-linear-gradient()

```css
background:
repeating-linear-gradient(
45deg,
red 0 10px,
blue 10px 20px
);
```

---

# Summary

| Function | Purpose |
|----------|---------|
| rgb() | RGB colors |
| rgba() | RGB + Alpha |
| hsl() | HSL colors |
| calc() | Math |
| min() | Smaller value |
| max() | Larger value |
| clamp() | Responsive values |
| var() | Variables |
| url() | Resource |
| linear-gradient() | Linear gradient |
| radial-gradient() | Circular gradient |
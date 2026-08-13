# CSS Gradients

CSS gradients allow smooth transitions between two or more colors.

Gradients are commonly used for:

- Backgrounds
- Buttons
- Cards
- Hero sections
- Overlays
- Borders
- Text effects
- Decorative elements

---

# 1. Linear Gradient

A linear gradient transitions colors along a straight line.

```css
background:linear-gradient(red,blue);
```

Result:

```text
RED
 ↓
 🟣
 ↓
BLUE
```

---

# 2. Direction

You can specify the direction.

```css
background:linear-gradient(
    to right,
    red,
    blue
);
```

Common directions:

```text
to right
to left
to top
to bottom
to top right
to top left
to bottom right
to bottom left
```

---

# 3. Angles

You can use degrees.

```css
background:linear-gradient(
    90deg,
    red,
    blue
);
```

Examples:

```css
0deg
45deg
90deg
180deg
270deg
```

---

# 4. Color Stops

You can control where colors appear.

```css
background:linear-gradient(
    red 0%,
    yellow 50%,
    blue 100%
);
```

---

# 5. Multiple Colors

```css
background:linear-gradient(
    red,
    orange,
    yellow,
    green,
    blue,
    purple
);
```

---

# 6. Hard Color Stops

You don't always need a smooth transition.

```css
background:linear-gradient(
    red 50%,
    blue 50%
);
```

This creates a sharp division.

---

# 7. Repeating Linear Gradient

```css
background:
repeating-linear-gradient(
    45deg,
    red 0px,
    red 10px,
    blue 10px,
    blue 20px
);
```

Useful for:

- Stripes
- Patterns
- Decorative backgrounds

---

# 8. Radial Gradient

A radial gradient spreads outward from a central point.

```css
background:
radial-gradient(
    red,
    blue
);
```

Conceptually:

```text
        BLUE
    BLUE     BLUE
  BLUE   RED   BLUE
    BLUE     BLUE
        BLUE
```

---

# 9. Radial Shape

You can specify:

```css
circle
ellipse
```

Example:

```css
background:
radial-gradient(
    circle,
    red,
    blue
);
```

---

# 10. Radial Position

You can change the starting position.

```css
background:
radial-gradient(
    circle at top left,
    red,
    blue
);
```

Other positions:

```text
center
top
bottom
left
right
top left
top right
bottom left
bottom right
```

---

# 11. Repeating Radial Gradient

```css
background:
repeating-radial-gradient(
    circle,
    red 0px,
    red 10px,
    blue 10px,
    blue 20px
);
```

---

# 12. Conic Gradient

A conic gradient rotates around a central point.

```css
background:
conic-gradient(
    red,
    yellow,
    blue,
    red
);
```

Useful for:

- Color wheels
- Pie charts
- Circular decorations
- Loading indicators

---

# 13. Conic Starting Angle

```css
background:
conic-gradient(
    from 45deg,
    red,
    blue,
    red
);
```

---

# 14. Conic Position

```css
background:
conic-gradient(
    at 30% 40%,
    red,
    blue,
    red
);
```

---

# 15. Repeating Conic Gradient

```css
background:
repeating-conic-gradient(
    red 0deg 20deg,
    blue 20deg 40deg
);
```

---

# 16. Transparent Gradients

Gradients can use transparency.

```css
background:
linear-gradient(
    rgba(0,0,0,0.7),
    transparent
);
```

This is commonly used for image overlays.

---

# 17. Gradient Overlay

```css
.hero{

    background:
    linear-gradient(
        rgba(0,0,0,.6),
        rgba(0,0,0,.2)
    ),
    url("image.jpg");

    background-size:cover;
}
```

The first layer creates the overlay.

---

# 18. Multiple Gradients

Multiple gradients can be layered.

```css
background:
linear-gradient(
    red,
    transparent
),
linear-gradient(
    blue,
    transparent
);
```

The first background layer is painted above the next one.

---

# 19. Gradient Text

A gradient can be applied to text.

```css
.title{

    background:
    linear-gradient(
        90deg,
        purple,
        orange
    );

    background-clip:text;

    -webkit-background-clip:text;

    color:transparent;
}
```

---

# 20. Gradient Border Effect

One approach is to use a pseudo-element or nested element.

Another simple technique is:

```css
.card{

    padding:3px;

    background:
    linear-gradient(
        90deg,
        purple,
        orange
    );

    border-radius:15px;
}
```

Then place the actual content inside an inner element.

---

# 21. Gradient Button

```css
button{

    padding:12px 25px;

    border:none;

    border-radius:8px;

    color:white;

    background:
    linear-gradient(
        90deg,
        purple,
        blue
    );
}
```

---

# 22. Gradient + Hover

```css
button{

    background:
    linear-gradient(
        90deg,
        purple,
        blue
    );

    transition:.3s;
}

button:hover{

    background:
    linear-gradient(
        90deg,
        blue,
        purple
    );
}
```

---

# 23. CSS Gradient Functions

There are three major gradient families:

```text
linear-gradient()
radial-gradient()
conic-gradient()
```

And their repeating versions:

```text
repeating-linear-gradient()
repeating-radial-gradient()
repeating-conic-gradient()
```

---

# 24. Gradient Syntax

## Linear

```css
linear-gradient(
    direction,
    color-stop,
    color-stop
);
```

## Radial

```css
radial-gradient(
    shape,
    color-stop,
    color-stop
);
```

## Conic

```css
conic-gradient(
    from angle,
    color-stop,
    color-stop
);
```

---

# 25. Gradients Are Images

CSS gradients are treated as images.

Therefore they can be used with:

```css
background-image
```

Example:

```css
background-image:
linear-gradient(
    red,
    blue
);
```

They can also be combined with other background images.

---

# Best Practices

- Use gradients to enhance a design rather than make text difficult to read.
- Maintain sufficient contrast.
- Use transparent gradients for image overlays.
- Use `repeating-*` gradients for patterns.
- Use `linear-gradient()` for directional effects.
- Use `radial-gradient()` for circular lighting effects.
- Use `conic-gradient()` for rotational effects.
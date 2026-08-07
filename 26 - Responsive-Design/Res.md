# Responsive Design

Responsive Design makes websites adapt to different screen sizes.

A responsive website should work well on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large Monitor

---

# Viewport

Always include:

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers won't render pages correctly.

---

# Mobile First

Recommended approach:

```css
/* Mobile */

.card{

    width:100%;
}

/* Tablet */

@media(min-width:768px){

}

/* Desktop */

@media(min-width:1024px){

}
```

---

# Desktop First

Another approach:

```css
/* Desktop */

.card{

    width:33%;
}

/* Tablet */

@media(max-width:768px){

}

/* Mobile */

@media(max-width:480px){

}
```

---

# Media Queries

Syntax

```css
@media(condition){

}
```

Example

```css
@media(max-width:768px){

    body{

        background:lightblue;
    }
}
```

---

# Common Breakpoints

| Device | Width |
|---------|------:|
| Mobile | 480px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1200px+ |

---

# Responsive Units

Use:

```
%
vw
vh
rem
em
fr
clamp()
min()
max()
```

Avoid fixed widths whenever possible.

---

# Responsive Images

```css
img{

    max-width:100%;

    height:auto;
}
```

---

# Responsive Typography

```css
font-size:

clamp(16px,2vw,32px);
```

---

# Flexbox + Responsive

```css
display:flex;

flex-wrap:wrap;
```

---

# Grid + Responsive

```css
grid-template-columns:

repeat(auto-fit,minmax(250px,1fr));
```

---

# Orientation

```css
@media(orientation:landscape){

}
```

```css
@media(orientation:portrait){

}
```

---

# Dark Mode

```css
@media(prefers-color-scheme:dark){

}
```

---

# Reduced Motion

```css
@media(prefers-reduced-motion:reduce){

}
```

Useful for accessibility.

---

# Best Practices

✅ Mobile First

✅ Flexible layouts

✅ Responsive images

✅ Relative units

✅ Test on multiple screen sizes

---

# Summary

| Feature | Purpose |
|----------|---------|
| viewport | Mobile rendering |
| @media | Responsive styles |
| min-width | Mobile-first |
| max-width | Desktop-first |
| clamp() | Responsive fonts |
| auto-fit | Responsive Grid |
| flex-wrap | Responsive Flexbox |
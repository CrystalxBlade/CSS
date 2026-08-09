# CSS Media Queries

Media Queries allow CSS to apply different styles depending on characteristics of the device or viewport.

The most common use is responsive web design.

---

# 1. Basic Syntax

```css
@media (condition){

    selector{
        property:value;
    }
}
```

Example:

```css
@media (max-width:600px){

    body{
        background:black;
    }
}
```

---

# 2. max-width

Applies styles when the viewport is at or below a certain width.

```css
@media (max-width:600px){

}
```

Meaning:

```text
0px ─────────────── 600px
       APPLY
```

---

# 3. min-width

Applies styles when the viewport is at or above a certain width.

```css
@media (min-width:768px){

}
```

Meaning:

```text
768px ───────────────────────>
          APPLY
```

---

# 4. Combining min-width and max-width

```css
@media (min-width:600px) and (max-width:900px){

}
```

The rules apply only between 600px and 900px.

---

# 5. and

Both conditions must be true.

```css
@media (min-width:600px) and (max-width:900px){

}
```

---

# 6. or

Use a comma.

```css
@media (max-width:600px),
       (orientation:portrait){

}
```

The rules apply when either condition is true.

---

# 7. not

Negates a media query.

```css
@media not (orientation:portrait){

}
```

---

# 8. Orientation

## Portrait

```css
@media (orientation:portrait){

}
```

## Landscape

```css
@media (orientation:landscape){

}
```

---

# 9. Aspect Ratio

```css
@media (min-aspect-ratio:16/9){

}
```

Useful when the viewport's width-to-height ratio matters.

---

# 10. Hover

Detects whether the user's primary input mechanism can hover.

```css
@media (hover:hover){

}
```

For example:

```css
@media (hover:hover){

    button:hover{
        transform:scale(1.1);
    }
}
```

---

# 11. Pointer

Detects pointer accuracy.

```css
@media (pointer:coarse){

}
```

Possible values:

```text
none
coarse
fine
```

---

# 12. prefers-color-scheme

Detects the user's preferred color scheme.

## Dark Mode

```css
@media (prefers-color-scheme:dark){

    body{
        background:#111;
        color:white;
    }
}
```

## Light Mode

```css
@media (prefers-color-scheme:light){

}
```

---

# 13. prefers-reduced-motion

Detects users who prefer reduced animation.

```css
@media (prefers-reduced-motion:reduce){

    *{
        animation:none;
        transition:none;
    }
}
```

This is important for accessibility.

---

# 14. Multiple Conditions

```css
@media
(min-width:768px)
and
(max-width:1200px){

}
```

---

# 15. Media Query for Print

CSS can change when the page is printed.

```css
@media print{

    nav{
        display:none;
    }

    body{
        color:black;
    }
}
```

---

# 16. Media Types

Common media types:

```css
screen
print
```

Example:

```css
@media screen and (max-width:600px){

}
```

Print:

```css
@media print{

}
```

---

# 17. Mobile-First Media Queries

Start with mobile styles.

```css
.card{
    width:100%;
}
```

Then progressively enhance:

```css
@media (min-width:768px){

    .card{
        width:50%;
    }
}
```

Then desktop:

```css
@media (min-width:1200px){

    .card{
        width:33.33%;
    }
}
```

---

# 18. Desktop-First Media Queries

Start with desktop styles.

```css
.card{
    width:33.33%;
}
```

Then override for smaller screens:

```css
@media (max-width:768px){

    .card{
        width:50%;
    }
}
```

---

# 19. Common Breakpoints

These are common starting points, not mandatory rules.

```text
Mobile
~ 480px

Tablet
~ 768px

Laptop
~ 1024px

Desktop
~ 1200px
```

Do not design only for these numbers.

Instead, add breakpoints when your actual layout needs them.

---

# 20. Responsive Navigation

```css
.nav-links{
    display:flex;
}

@media (max-width:700px){

    .nav-links{
        flex-direction:column;
    }
}
```

---

# 21. Responsive Grid

```css
.grid{
    display:grid;

    grid-template-columns:
    repeat(3,1fr);
}

@media (max-width:800px){

    .grid{
        grid-template-columns:
        repeat(2,1fr);
    }
}

@media (max-width:500px){

    .grid{
        grid-template-columns:1fr;
    }
}
```

---

# 22. Responsive Typography

```css
h1{
    font-size:48px;
}

@media (max-width:600px){

    h1{
        font-size:32px;
    }
}
```

Modern alternative:

```css
h1{
    font-size:clamp(2rem,5vw,4rem);
}
```

---

# 23. Debugging Media Queries

You can temporarily add:

```css
@media (max-width:600px){

    body{
        outline:10px solid red;
    }
}
```

Resize the browser to check whether the media query is active.

---

# Important Concepts

### max-width

Think:

> "Up to this width."

```css
@media (max-width:600px)
```

### min-width

Think:

> "From this width and above."

```css
@media (min-width:600px)
```

---

# Best Practices

- Prefer mobile-first development for many projects.
- Don't blindly use standard breakpoints.
- Add breakpoints when the layout actually needs one.
- Combine Media Queries with Flexbox and Grid.
- Use `clamp()`, `min()`, `max()`, and flexible units when appropriate.
- Test with real content.
- Test both portrait and landscape.
- Consider accessibility preferences such as reduced motion.

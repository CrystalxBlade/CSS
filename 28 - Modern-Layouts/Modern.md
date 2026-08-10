# Modern CSS Layouts

Modern layouts are created by combining multiple CSS features rather than relying on a single layout technique.

Common tools:

- Flexbox
- CSS Grid
- Media Queries
- Responsive Units
- CSS Functions
- Container Queries
- Logical Properties
- Aspect Ratio

---

# 1. Page Layout

A common modern page structure:

```text
+--------------------------------+
|             Header             |
+----------+---------------------+
|          |                     |
| Sidebar  |      Main Content   |
|          |                     |
|          |                     |
+----------+---------------------+
|             Footer             |
+--------------------------------+
```

CSS Grid is excellent for this type of layout.

---

# 2. Header Layout

Flexbox is commonly used for navigation.

```css
.header{

    display:flex;

    justify-content:space-between;

    align-items:center;
}
```

---

# 3. Sidebar Layout

Grid can define the major page structure.

```css
.layout{

    display:grid;

    grid-template-columns:
    240px 1fr;
}
```

---

# 4. Responsive Cards

A modern responsive grid:

```css
.cards{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:20px;
}
```

This allows the browser to automatically determine how many cards fit.

---

# 5. Full-Height Layout

```css
body{

    min-height:100vh;

    display:grid;

    grid-template-rows:auto 1fr auto;
}
```

This creates:

```text
Header
  ↓
Main
  ↓
Footer
```

The `1fr` allows the main section to consume remaining space.

---

# 6. Centering

Flexbox:

```css
.container{

    display:flex;

    justify-content:center;

    align-items:center;
}
```

Grid:

```css
.container{

    display:grid;

    place-items:center;
}
```

---

# 7. Holy Grail Layout

A classic website layout:

```text
+----------------------+
|       Header         |
+----+------------+----+
|    |            |    |
|Side|   Content  |Side|
|    |            |    |
+----+------------+----+
|       Footer         |
+----------------------+
```

Modern CSS Grid makes this straightforward.

---

# 8. Dashboard Layout

Typical dashboard:

```text
+--------------------------------+
| Header                         |
+----------+---------------------+
| Sidebar  | Dashboard            |
|          |                     |
|          | Cards               |
|          |                     |
+----------+---------------------+
```

Use:

- Grid for page structure
- Flexbox for navigation
- Grid for cards

---

# 9. Card Grid

```css
.cards{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:1rem;
}
```

This can often eliminate the need for several media queries.

---

# 10. Responsive Navigation

Desktop:

```text
Logo        Home About Projects Contact
```

Mobile:

```text
Logo

Home
About
Projects
Contact
```

Use Flexbox + Media Queries.

---

# 11. Fluid Spacing

Instead of:

```css
padding:20px;
```

You can use:

```css
padding:clamp(20px,4vw,60px);
```

The padding can grow with the viewport while staying within limits.

---

# 12. Fluid Typography

```css
h1{

    font-size:
    clamp(2rem,5vw,5rem);
}
```

Syntax:

```css
clamp(minimum,preferred,maximum);
```

---

# 13. Container Queries

Container Queries allow a component to respond to the size of its container rather than the viewport.

```css
.card-container{

    container-type:inline-size;
}
```

Then:

```css
@container (min-width:500px){

    .card{

        display:flex;
    }
}
```

This is particularly useful for reusable components.

---

# 14. Logical Properties

Instead of:

```css
margin-left:20px;
```

Use:

```css
margin-inline-start:20px;
```

Instead of:

```css
padding-top:20px;
```

Use:

```css
padding-block-start:20px;
```

Logical properties work better with different writing directions.

---

# 15. aspect-ratio

Maintain a consistent shape.

```css
.video{

    width:100%;

    aspect-ratio:16 / 9;
}
```

Useful for:

- Videos
- Images
- Cards
- Thumbnails

---

# 16. Modern Layout Strategy

A good approach is:

```text
Page
 ↓
CSS Grid
 ↓
Sections
 ↓
Flexbox
 ↓
Components
 ↓
Responsive rules
```

For example:

```css
.page{

    display:grid;
}

.navbar{

    display:flex;
}

.cards{

    display:grid;
}

.card{

    display:flex;
}
```

Different layout systems can be nested together.

---

# 17. Avoid Fixed Layouts

Avoid unnecessarily doing:

```css
width:1200px;
```

Prefer:

```css
width:min(1200px,100%);
```

or:

```css
width:90%;
max-width:1200px;
```

---

# 18. Common Modern Patterns

Learn to build:

- Navigation bars
- Hero sections
- Card grids
- Dashboards
- Sidebars
- Pricing sections
- Footers
- Image galleries
- Landing pages
- Blog layouts
- Portfolio layouts

---

# Key Idea

Modern CSS isn't about choosing between Flexbox and Grid.

You will often use:

```text
Grid
 +
Flexbox
 +
Media Queries
 +
CSS Functions
 +
Responsive Units
 +
Container Queries
```

together.
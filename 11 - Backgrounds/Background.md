# CSS Backgrounds

Background properties control the appearance of an element's background.

---

# 1. background-color

Adds a background color.

```css
background-color: skyblue;
```

---

# 2. background-image

Displays an image behind the content.

```css
background-image: url("image.jpg");
```

---

# 3. background-repeat

Controls image repetition.

```css
background-repeat: repeat;
```

Values:

- repeat
- repeat-x
- repeat-y
- no-repeat

---

# 4. background-position

Determines where the image appears.

```css
background-position: center;
```

Examples:

```css
top left
top center
top right

center

bottom left
bottom center
bottom right
```

---

# 5. background-size

Controls image scaling.

```css
background-size: cover;
```

Values:

- auto
- contain
- cover
- width height

Example:

```css
background-size:300px 200px;
```

---

# 6. background-attachment

Controls whether the image scrolls.

```css
background-attachment: fixed;
```

Values:

- scroll
- fixed
- local

---

# 7. Multiple Backgrounds

CSS allows multiple background images.

```css
background-image:
url(stars.png),
url(background.jpg);
```

The first image appears on top.

---

# 8. Background Shorthand

Instead of writing:

```css
background-color:white;
background-image:url(bg.jpg);
background-repeat:no-repeat;
background-position:center;
background-size:cover;
```

You can write:

```css
background:
white
url(bg.jpg)
no-repeat
center/cover;
```

---

# Summary

| Property | Purpose |
|----------|---------|
| background-color | Background color |
| background-image | Background image |
| background-repeat | Repeat behavior |
| background-position | Image position |
| background-size | Image scaling |
| background-attachment | Scroll behavior |
| background | Shorthand |
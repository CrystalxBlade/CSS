# CSS Overflow

The `overflow` property controls what happens when an element's content is larger than its available space.

---

# 1. overflow: visible

```css
overflow: visible;
```

Default value.

- Content is **not clipped**
- Extra content is displayed outside the element

---

# 2. overflow: hidden

```css
overflow: hidden;
```

- Extra content is clipped
- No scrollbars are shown

Useful for:

- Cropping images
- Hiding overflowing content
- Rounded corners

---

# 3. overflow: scroll

```css
overflow: scroll;
```

- Always displays scrollbars
- Even if there is no overflow

Useful when you always want scrolling available.

---

# 4. overflow: auto

```css
overflow: auto;
```

- Scrollbars appear **only when needed**
- Most commonly used value

---

# 5. overflow-x

Controls horizontal overflow.

```css
overflow-x: scroll;
```

Values:

- visible
- hidden
- scroll
- auto

---

# 6. overflow-y

Controls vertical overflow.

```css
overflow-y: auto;
```

Values:

- visible
- hidden
- scroll
- auto

---

# Common Uses

## Scrollable Chat Box

```css
.chat{
    height:300px;
    overflow-y:auto;
}
```

---

## Code Block

```css
pre{
    overflow-x:auto;
}
```

---

## Image Cropping

```css
overflow:hidden;
```

---

# Summary

| Property | Description |
|----------|-------------|
| overflow: visible | Default behavior |
| overflow: hidden | Hides extra content |
| overflow: scroll | Always shows scrollbars |
| overflow: auto | Shows scrollbars only when needed |
| overflow-x | Controls horizontal overflow |
| overflow-y | Controls vertical overflow |
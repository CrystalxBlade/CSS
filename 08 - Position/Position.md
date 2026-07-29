# CSS Position

The `position` property controls how an element is placed on a webpage.

---

# 1. position: static

```css
position: static;
```

- Default position for all elements.
- `top`, `right`, `bottom`, and `left` have **no effect**.

Example:

```css
.box{
    position:static;
}
```

---

# 2. position: relative

```css
position:relative;
```

Moves an element relative to its original position.

Example:

```css
position:relative;
top:20px;
left:30px;
```

The original space remains reserved.

---

# 3. position: absolute

```css
position:absolute;
```

Removes the element from the normal document flow.

It is positioned relative to the nearest positioned ancestor (`relative`, `absolute`, `fixed`, or `sticky`).

Example:

```css
.parent{
    position:relative;
}

.child{
    position:absolute;
    top:20px;
    right:20px;
}
```

---

# 4. position: fixed

```css
position:fixed;
```

The element is positioned relative to the browser viewport.

It stays in the same place even while scrolling.

Common uses:

- Floating Action Button (FAB)
- Back-to-top button
- Chat widget
- Cookie banner

---

# 5. position: sticky

```css
position:sticky;
top:0;
```

Acts like:

- `relative` until a scroll threshold is reached.
- Then behaves like `fixed`.

Common uses:

- Sticky navigation bars
- Table headers
- Sidebar menus

---

# Offset Properties

These properties work with positioned elements.

```css
top
right
bottom
left
```

Example:

```css
position:absolute;

top:20px;
left:40px;
```

---

# z-index

Controls which element appears on top.

```css
.box1{
    z-index:1;
}

.box2{
    z-index:10;
}
```

Higher values appear above lower values.

`z-index` works only on positioned elements.

---

# Comparison

| Position | In Normal Flow | Scrolls | Relative To |
|-----------|----------------|----------|-------------|
| static | ✅ | ✅ | Normal document flow |
| relative | ✅ | ✅ | Original position |
| absolute | ❌ | ✅ | Nearest positioned ancestor |
| fixed | ❌ | ❌ | Viewport |
| sticky | ✅ | Partially | Scroll container / viewport |

---

# Common Uses

## Relative

- Small adjustments
- Parent for absolutely positioned children

---

## Absolute

- Badges
- Tooltips
- Dropdown menus
- Icons

---

## Fixed

- Chat button
- Back-to-top button
- Floating navigation

---

## Sticky

- Navigation bars
- Sticky headers
- Sticky sidebars
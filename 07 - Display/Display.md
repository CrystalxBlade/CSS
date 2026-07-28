# CSS Display

The `display` property determines how an element is rendered and how it participates in the page layout.

---

# 1. display: block

A block element:

- Starts on a new line
- Takes up the full available width by default
- Can have width and height

Example:

```css
display:block;
```

Examples:

- `<div>`
- `<p>`
- `<h1>` to `<h6>`
- `<section>`

---

# 2. display: inline

An inline element:

- Does not start on a new line
- Takes only the width it needs
- Ignores width and height

Example:

```css
display:inline;
```

Examples:

- `<span>`
- `<a>`
- `<strong>`
- `<em>`

---

# 3. display: inline-block

Behaves like an inline element but accepts width and height.

```css
display:inline-block;
```

Useful for:

- Navigation menus
- Buttons
- Small cards

---

# 4. display: none

Completely removes the element from the layout.

```css
display:none;
```

The element:

- Is not visible
- Does not occupy space

---

# 5. display: contents

The element itself disappears, but its children remain in the layout.

```css
display:contents;
```

Useful in specific layout scenarios, though support and accessibility considerations should be kept in mind.

---

# 6. display: flow-root

Creates a new Block Formatting Context (BFC).

```css
display:flow-root;
```

Common use:

- Containing floated elements
- Preventing parent collapse caused by floats

---

# Block vs Inline

| Feature | Block | Inline |
|---------|-------|--------|
| New line | ✅ | ❌ |
| Width | Full | Content only |
| Height | ✅ | ❌ |
| Width property | ✅ | ❌ |

---

# Inline vs Inline-Block

| Feature | Inline | Inline-Block |
|---------|--------|--------------|
| Width | ❌ | ✅ |
| Height | ❌ | ✅ |
| Appears inline | ✅ | ✅ |

---

# Common Display Values

| Value | Description |
|--------|-------------|
| block | Starts on a new line |
| inline | Flows within text |
| inline-block | Inline with sizing support |
| none | Removes the element |
| contents | Removes the wrapper only |
| flow-root | Creates a new formatting context |
| flex | Creates a flex container |
| grid | Creates a grid container |

> **Note:** `flex` and `grid` are also `display` values, but they're large topics covered separately in their own folders.
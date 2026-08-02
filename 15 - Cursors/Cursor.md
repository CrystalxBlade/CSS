# CSS Cursor

The `cursor` property changes the appearance of the mouse pointer when it hovers over an element.

---

# Syntax

```css
cursor:value;
```

---

# Common Cursor Values

## default

```css
cursor:default;
```

Standard arrow cursor.

---

## pointer

```css
cursor:pointer;
```

Commonly used for buttons and links.

---

## text

```css
cursor:text;
```

Used for editable text.

---

## move

```css
cursor:move;
```

Indicates the element can be moved.

---

## wait

```css
cursor:wait;
```

Indicates the application is busy.

---

## progress

```css
cursor:progress;
```

Indicates work is in progress, but interaction is still possible.

---

## crosshair

```css
cursor:crosshair;
```

Often used in image editors and drawing applications.

---

## help

```css
cursor:help;
```

Shows that help is available.

---

## not-allowed

```css
cursor:not-allowed;
```

Indicates an action is not permitted.

---

## grab

```css
cursor:grab;
```

Indicates an element can be grabbed.

---

## grabbing

```css
cursor:grabbing;
```

Shown while dragging.

---

## zoom-in

```css
cursor:zoom-in;
```

Used for images that can be enlarged.

---

## zoom-out

```css
cursor:zoom-out;
```

Used when zooming out.

---

# Custom Cursor

```css
cursor:url("cursor.cur"), auto;
```

Supported formats include:

- `.cur`
- `.png` (browser support varies)
- `.svg` (limited support)

Always provide a fallback:

```css
cursor:url("cursor.cur"), pointer;
```

---

# Best Practices

✅ Use `pointer` for clickable elements.

✅ Use `not-allowed` for disabled controls.

✅ Don't change the cursor unnecessarily.

✅ Always provide a fallback for custom cursors.

---

# Summary

| Value | Purpose |
|--------|---------|
| default | Normal arrow |
| pointer | Clickable element |
| text | Text selection |
| move | Move element |
| wait | Busy |
| progress | Loading while usable |
| crosshair | Precision selection |
| help | Help available |
| not-allowed | Disabled action |
| grab | Draggable |
| grabbing | Dragging |
| zoom-in | Zoom image in |
| zoom-out | Zoom image out |
| url() | Custom cursor |
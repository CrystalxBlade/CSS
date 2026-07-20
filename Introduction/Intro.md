# CSS Introduction

## What is CSS?

CSS stands for Cascading Style Sheets.

It is used to style HTML elements by changing their colors, fonts, spacing, layouts, animations, and more.

---

## Why Use CSS?

- Makes web pages attractive
- Separates design from HTML structure
- Improves code maintainability
- Allows responsive design

---

## Types of CSS

### 1. Inline CSS

Applied directly inside an HTML element.

Example:

```html
<h1 style="color:red;">Hello</h1>
```

---

### 2. Internal CSS

Written inside the `<style>` tag.

Example:

```html
<style>
h1{
    color:red;
}
</style>
```

---

### 3. External CSS

Written in a separate `.css` file.

Example:

```html
<link rel="stylesheet" href="style.css">
```

---

## CSS Syntax

```css
selector{
    property: value;
}
```

Example:

```css
h1{
    color: blue;
}
```

- **Selector** → chooses the HTML element.
- **Property** → specifies what to style.
- **Value** → defines the style.

---

## CSS Comments

```css
/* This is a comment */
```
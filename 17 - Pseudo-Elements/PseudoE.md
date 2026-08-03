# CSS Pseudo Elements

Pseudo-elements style specific parts of an element or create virtual elements.

Syntax:

```css
selector::pseudo-element{
    property:value;
}
```

Modern CSS uses **double colons (`::`)**.

---

# 1. ::before

Creates content before an element.

```css
p::before{
    content:"👉 ";
}
```

The `content` property is required.

Common uses:

- Icons
- Labels
- Decorative elements
- Custom list bullets

---

# 2. ::after

Creates content after an element.

```css
p::after{
    content:" ✔";
}
```

Common uses:

- Badges
- Decorative lines
- Clearfix
- Labels

---

# 3. ::first-letter

Styles the first letter.

```css
p::first-letter{
    font-size:40px;
}
```

Commonly used in magazines and blogs.

---

# 4. ::first-line

Styles only the first line.

```css
p::first-line{
    color:blue;
}
```

Useful for articles.

---

# 5. ::selection

Styles highlighted text.

```css
::selection{
    background:black;
    color:white;
}
```

Works when the user selects text.

---

# 6. ::marker

Styles list markers.

```css
li::marker{
    color:red;
}
```

Useful for:

- Ordered lists
- Unordered lists

---

# 7. ::placeholder

Styles placeholder text.

```css
input::placeholder{
    color:gray;
}
```

---

# Common Uses

## Icon Before Text

```css
.download::before{
    content:"⬇ ";
}
```

---

## Badge

```css
.new::after{
    content:" NEW";
    color:red;
}
```

---

## Drop Cap

```css
p::first-letter{
    font-size:3rem;
}
```

---

# Difference Between Pseudo Classes and Pseudo Elements

| Pseudo Class | Pseudo Element |
|--------------|----------------|
| Changes an element's state | Styles part of an element |
| `:hover` | `::before` |
| `:focus` | `::after` |
| `:active` | `::first-letter` |

---

# Summary

| Pseudo Element | Purpose |
|----------------|---------|
| ::before | Insert content before |
| ::after | Insert content after |
| ::first-letter | Style first letter |
| ::first-line | Style first line |
| ::selection | Style selected text |
| ::marker | Style list markers |
| ::placeholder | Style placeholder text |
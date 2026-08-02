# CSS Pseudo Classes

Pseudo-classes select elements based on their state or position.

Syntax:

```css
selector:pseudo-class{
    property:value;
}
```

---

# User Interaction

## :hover

Applied when the mouse pointer is over an element.

```css
button:hover{
    background:blue;
}
```

---

## :active

Applied while the element is being clicked.

```css
button:active{
    transform:scale(.95);
}
```

---

## :focus

Applied when an element receives keyboard or mouse focus.

```css
input:focus{
    border-color:blue;
}
```

---

## :visited

Styles visited links.

```css
a:visited{
    color:purple;
}
```

---

## :link

Styles unvisited links.

```css
a:link{
    color:blue;
}
```

---

# Form States

## :checked

```css
input:checked{
    accent-color:green;
}
```

Used with:

- checkbox
- radio

---

## :disabled

```css
input:disabled{
    background:#ddd;
}
```

---

## :enabled

```css
input:enabled{
    border:2px solid green;
}
```

---

## :required

```css
input:required{
    border-color:red;
}
```

---

## :optional

```css
input:optional{
    background:#f8f8f8;
}
```

---

## :valid

```css
input:valid{
    border-color:green;
}
```

---

## :invalid

```css
input:invalid{
    border-color:red;
}
```

---

# Child Selectors

## :first-child

```css
li:first-child{
    color:red;
}
```

---

## :last-child

```css
li:last-child{
    color:blue;
}
```

---

## :nth-child()

```css
li:nth-child(2)
```

```css
li:nth-child(odd)
```

```css
li:nth-child(even)
```

```css
li:nth-child(3n)
```

---

## :nth-last-child()

Counts from the end.

```css
li:nth-last-child(2)
```

---

## :only-child

Matches an element that is the only child.

---

## :empty

Matches elements with no children.

---

# Structural Pseudo Classes

## :first-of-type

```css
p:first-of-type
```

---

## :last-of-type

```css
p:last-of-type
```

---

## :nth-of-type()

```css
p:nth-of-type(2)
```

---

# Negation

## :not()

```css
input:not(.active)
```

---

# Target

```css
:target
```

Styles an element whose `id` matches the URL fragment.

Example:

```html
<div id="about"></div>
```

```
example.com#about
```

---

# Summary

| Pseudo Class | Purpose |
|--------------|---------|
| :hover | Mouse hover |
| :active | Mouse click |
| :focus | Input focus |
| :visited | Visited links |
| :link | Unvisited links |
| :checked | Checked inputs |
| :disabled | Disabled controls |
| :enabled | Enabled controls |
| :required | Required fields |
| :optional | Optional fields |
| :valid | Valid form input |
| :invalid | Invalid form input |
| :first-child | First child |
| :last-child | Last child |
| :nth-child() | Child by position |
| :nth-last-child() | Count from end |
| :only-child | Only child |
| :empty | Empty element |
| :first-of-type | First of type |
| :last-of-type | Last of type |
| :nth-of-type() | Type-based position |
| :not() | Negation |
| :target | URL target |
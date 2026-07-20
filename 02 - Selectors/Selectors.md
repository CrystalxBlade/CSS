# CSS Selectors

Selectors tell CSS which HTML elements should receive a style.

---

## 1. Universal Selector

```css
*{
    margin:0;
}
```

Selects every element.

---

## 2. Element Selector

```css
p{
    color:red;
}
```

Selects all `<p>` elements.

---

## 3. Class Selector

```css
.note{
    color:blue;
}
```

Used with `class=""`.

---

## 4. ID Selector

```css
#header{
    color:green;
}
```

Used with `id=""`.

---

## 5. Group Selector

```css
h1,h2,p{
    color:red;
}
```

Styles multiple selectors together.

---

## 6. Descendant Selector

```css
.container p
```

Selects every `<p>` inside `.container`.

---

## 7. Child Selector

```css
.container > p
```

Selects only direct children.

---

## 8. Adjacent Sibling Selector

```css
h1 + p
```

Selects the first `<p>` immediately after an `<h1>`.

---

## 9. General Sibling Selector

```css
h1 ~ p
```

Selects every `<p>` after an `<h1>`.

---

## 10. Attribute Selector

```css
input[type="text"]
```

Selects elements based on attributes.
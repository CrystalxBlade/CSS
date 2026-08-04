# CSS Specificity

Specificity determines which CSS rule is applied when multiple rules target the same element.

---

# Specificity Priority

Lowest to Highest:

```
Element Selector
↓

Class Selector
↓

ID Selector
↓

Inline Style
↓

!important
```

---

# 1. Element Selector

```css
p{
    color:blue;
}
```

Specificity:

```
0-0-1
```

---

# 2. Class Selector

```css
.text{
    color:red;
}
```

Specificity:

```
0-1-0
```

---

# 3. ID Selector

```css
#message{
    color:green;
}
```

Specificity:

```
1-0-0
```

---

# 4. Inline Style

```html
<p style="color:red;">
```

Highest normal specificity.

---

# 5. !important

```css
color:red !important;
```

Overrides almost every other rule.

Avoid excessive use of `!important`.

---

# Specificity Examples

Example 1

```css
p{
    color:blue;
}

.text{
    color:red;
}
```

```html
<p class="text">
```

Winner:

```
.text
```

---

Example 2

```css
.text{
    color:red;
}

#message{
    color:green;
}
```

```html
<p id="message" class="text">
```

Winner:

```
#message
```

---

Example 3

```css
#message{
    color:blue;
}

<p style="color:red;">
```

Winner:

```
Inline Style
```

---

Example 4

```css
#message{
    color:blue;
}

.text{
    color:red !important;
}
```

Winner:

```
!important
```

---

# Same Specificity

If two selectors have the same specificity:

```css
p{
    color:red;
}

p{
    color:blue;
}
```

The later rule wins.

---

# Specificity Score

| Selector | Score |
|----------|--------|
| * | 0-0-0 |
| p | 0-0-1 |
| div p | 0-0-2 |
| .box | 0-1-0 |
| .box p | 0-1-1 |
| #header | 1-0-0 |
| Inline Style | 1-0-0-0 |
| !important | Highest Priority |

---

# Best Practices

✅ Prefer classes over IDs.

✅ Avoid `!important` unless absolutely necessary.

✅ Keep selectors simple.

✅ Write maintainable CSS.

---

# Summary

| Selector | Priority |
|----------|----------|
| Universal (`*`) | Lowest |
| Element | Low |
| Class / Attribute / Pseudo-class | Medium |
| ID | High |
| Inline Style | Very High |
| !important | Highest |
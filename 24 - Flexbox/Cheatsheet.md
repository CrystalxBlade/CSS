# CSS Flexbox Cheat Sheet

Flexbox is a **one-dimensional layout system** used to arrange items in a row or column.

---

# 1. Enable Flexbox

```css
.container{
    display:flex;
}
```

---

# 2. Main Axis vs Cross Axis

Default (`flex-direction: row`)

```
Main Axis →
+----------------------------+
| 1    2    3    4           |
+----------------------------+

Cross Axis
     ↓
```

When using:

```css
flex-direction: column;
```

```
Main Axis
↓

1
2
3
4

Cross Axis →
```

---

# 3. Flex Container Properties

## display

```css
display:flex;
```

Turns an element into a flex container.

---

## flex-direction

```css
row
row-reverse
column
column-reverse
```

---

## flex-wrap

```css
nowrap
wrap
wrap-reverse
```

---

## flex-flow

Shorthand

```css
flex-flow: row wrap;
```

---

## justify-content

Controls alignment on the **main axis**.

```css
flex-start
```

```
■■■---------
```

```css
center
```

```
---■■■---
```

```css
flex-end
```

```
---------■■■
```

```css
space-between
```

```
■-----■-----■
```

```css
space-around
```

```
--■----■----■--
```

```css
space-evenly
```

```
---■---■---■---
```

---

## align-items

Controls alignment on the **cross axis**.

```css
stretch
```

```
████
████
████
```

```css
center
```

```
   ███
```

```css
flex-start
```

```
███
```

```css
flex-end
```

```
      ███
```

```css
baseline
```

Aligns text baselines.

---

## align-content

Works only when:

✔ `flex-wrap: wrap`

AND

✔ Multiple rows exist.

---

## gap

```css
gap:20px;
```

```css
row-gap:20px;

column-gap:30px;
```

---

# 4. Flex Item Properties

## order

```css
order:1;
order:2;
order:-1;
```

Changes visual order.

---

## flex-grow

```css
flex-grow:1;
```

Available space is shared.

Example

```
1   2   3

↓

111111
222222
333333
```

---

## flex-shrink

```css
flex-shrink:1;
```

Allows shrinking when space is limited.

---

## flex-basis

```css
flex-basis:200px;
```

Initial size before growing or shrinking.

---

## flex

Shorthand

```css
flex:1;
```

Equivalent

```css
flex:1 1 0;
```

---

## align-self

Overrides `align-items`.

```css
align-self:flex-end;
```

Only affects one item.

---

# 5. Center Anything

The most common Flexbox interview question.

```css
.container{

    display:flex;

    justify-content:center;

    align-items:center;
}
```

Perfect horizontal and vertical centering.

---

# 6. Common Layouts

## Navbar

```
Logo                Menu
```

```css
justify-content:space-between;
align-items:center;
```

---

## Equal Cards

```css
display:flex;
gap:20px;
```

---

## Responsive Gallery

```css
display:flex;
flex-wrap:wrap;
gap:20px;
```

---

## Sidebar

```
+------+------------------+
| Menu |      Content     |
|      |                  |
+------+------------------+
```

---

## Sticky Footer

```css
body{

    display:flex;

    flex-direction:column;

    min-height:100vh;
}

main{
    flex:1;
}
```

---

# 7. Flexbox Interview Questions

✔ Difference between `justify-content` and `align-items`

✔ Difference between `align-items` and `align-content`

✔ Difference between `flex-grow`, `flex-shrink`, and `flex-basis`

✔ Difference between `gap` and `margin`

✔ Difference between `display:block` and `display:flex`

✔ When should you use Flexbox instead of Grid?

---

# 8. Flexbox vs Grid

| Flexbox | Grid |
|----------|------|
| One-dimensional | Two-dimensional |
| Row OR Column | Rows AND Columns |
| Great for components | Great for page layouts |
| Easy alignment | Complex layouts |

---

# 9. Property Summary

## Flex Container

| Property | Purpose |
|----------|---------|
| display | Enable Flexbox |
| flex-direction | Main axis direction |
| flex-wrap | Wrap items |
| flex-flow | Shorthand |
| justify-content | Main axis alignment |
| align-items | Cross axis alignment |
| align-content | Multi-row alignment |
| gap | Space between items |

---

## Flex Items

| Property | Purpose |
|----------|---------|
| order | Change order |
| flex-grow | Grow |
| flex-shrink | Shrink |
| flex-basis | Initial size |
| flex | Shorthand |
| align-self | Individual alignment |

---

# 10. Remember These

✅ `justify-content` → Main Axis

✅ `align-items` → Cross Axis

✅ `display:flex` creates a Flex Container

✅ `gap` is better than using margins for spacing

✅ Flexbox is best for **one-dimensional layouts**

✅ Grid is best for **two-dimensional layouts**
# CSS Flexbox

Flexbox is a one-dimensional layout system.

It arranges items in:

- Rows
- Columns

Flexbox consists of:

- Flex Container
- Flex Items

---

# Enable Flexbox

```css
.container{

    display:flex;
}
```

---

# Main Axis

Default direction:

```
→ → → →
```

Controlled by:

```css
flex-direction
```

---

# Cross Axis

Perpendicular to the main axis.

```
↓

↓

↓

```

---

# flex-direction

```css
flex-direction:row;
```

Values:

- row
- row-reverse
- column
- column-reverse

---

# flex-wrap

```css
flex-wrap:wrap;
```

Values:

- nowrap
- wrap
- wrap-reverse

---

# flex-flow

Shorthand:

```css
flex-flow:row wrap;
```

---

# justify-content

Controls alignment on the main axis.

```css
justify-content:center;
```

Values:

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

---

# align-items

Controls alignment on the cross axis.

```css
align-items:center;
```

Values:

- stretch
- flex-start
- flex-end
- center
- baseline

---

# align-content

Works when wrapping exists.

```css
align-content:center;
```

---

# gap

Adds space between items.

```css
gap:20px;
```

Also:

```css
row-gap

column-gap
```

---

# Order

Changes item order.

```css
order:2;
```

---

# flex-grow

Extra available space.

```css
flex-grow:1;
```

---

# flex-shrink

Shrink when needed.

```css
flex-shrink:1;
```

---

# flex-basis

Initial size.

```css
flex-basis:200px;
```

---

# flex

Shorthand:

```css
flex:1;
```

Equivalent:

```css
flex:1 1 0;
```

---

# align-self

Overrides align-items.

```css
align-self:flex-end;
```

---

# Summary

| Property | Purpose |
|----------|---------|
| display:flex | Enable Flexbox |
| flex-direction | Main axis direction |
| flex-wrap | Wrap items |
| flex-flow | Shorthand |
| justify-content | Main axis alignment |
| align-items | Cross axis alignment |
| align-content | Multiple row alignment |
| gap | Space between items |
| order | Item order |
| flex-grow | Grow item |
| flex-shrink | Shrink item |
| flex-basis | Initial size |
| flex | Shorthand |
| align-self | Individual alignment |
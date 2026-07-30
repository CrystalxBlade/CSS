# CSS Float and Clear

The `float` property was originally designed to wrap text around images.

Before Flexbox and Grid existed, developers also used it to create page layouts.

Today, float is mainly used for text wrapping.

---

# 1. float

Moves an element to one side of its container.

## Float Left

```css
float:left;
```

The element moves to the left.

Text flows around it.

---

## Float Right

```css
float:right;
```

The element moves to the right.

Text wraps around it.

---

## Float None

```css
float:none;
```

Default value.

---

# 2. clear

Stops an element from sitting beside floated elements.

```css
clear:left;
```

Avoids left floated elements.

```css
clear:right;
```

Avoids right floated elements.

```css
clear:both;
```

Avoids both left and right floats.

---

# 3. Clearfix

When every child inside a container is floated, the parent's height may collapse.

Solution:

```css
.container::after{
    content:"";
    display:block;
    clear:both;
}
```

This technique is called **clearfix**.

---

# Common Uses

## Float

- Wrapping text around images
- Legacy website layouts

---

## Clear

- Prevent overlapping
- Move content below floated elements

---

## Clearfix

- Prevent parent collapse
- Maintain container height

---

# Modern Alternatives

Today, use:

```css
display:flex;
```

or

```css
display:grid;
```

instead of float for layouts.

---

# Summary

| Property | Purpose |
|----------|---------|
| float:left | Float element left |
| float:right | Float element right |
| float:none | Default behavior |
| clear:left | Clear left float |
| clear:right | Clear right float |
| clear:both | Clear all floats |
| clearfix | Fix collapsed parent caused by floats |
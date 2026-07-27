# CSS Box Model

Every HTML element is considered a rectangular box.

The CSS Box Model consists of four parts:

```
+-------------------------+
|        Margin           |
|  +-------------------+  |
|  |      Border       |  |
|  |  +-------------+  |  |
|  |  |   Padding   |  |  |
|  |  | +---------+ |  |  |
|  |  | | Content | |  |  |
|  |  | +---------+ |  |  |
|  |  +-------------+  |  |
|  +-------------------+  |
+-------------------------+
```

---

# 1. Content

The actual content of the element.

```css
width:300px;
height:150px;
```

---

# 2. Padding

Space between the content and the border.

```css
padding:20px;
```

Individual sides:

```css
padding-top
padding-right
padding-bottom
padding-left
```

Shorthand:

```css
padding:20px;
padding:20px 40px;
padding:20px 30px 40px;
padding:20px 30px 40px 50px;
```

---

# 3. Border

The line surrounding the padding.

```css
border:5px solid blue;
```

Properties:

```css
border-width
border-style
border-color
```

Common styles:

- solid
- dashed
- dotted
- double
- groove
- ridge
- inset
- outset
- none

---

# 4. Margin

Space outside the border.

```css
margin:30px;
```

Individual sides:

```css
margin-top
margin-right
margin-bottom
margin-left
```

Center an element:

```css
margin:auto;
```

---

# 5. box-sizing

Controls how width and height are calculated.

## content-box (Default)

```css
box-sizing:content-box;
```

The declared width applies only to the content. Padding and border are added on top of it.

Example:

```
Width = 300px
Padding = 20px × 2
Border = 5px × 2

Total Width = 350px
```

---

## border-box

```css
box-sizing:border-box;
```

The declared width includes the content, padding, and border.

Example:

```
Width = 300px

Actual Width = 300px
```

---

# Common Shorthand

```css
margin:20px;
padding:15px;
border:2px solid black;
```

---

# Summary

| Property | Purpose |
|----------|---------|
| width | Sets content width |
| height | Sets content height |
| padding | Space inside the border |
| border | Surrounds the padding |
| margin | Space outside the border |
| box-sizing | Controls size calculation |
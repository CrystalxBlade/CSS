# CSS Forms Styling

CSS can be used to make HTML forms easier to use, more attractive, responsive, and accessible.

Common form elements:

- input
- textarea
- select
- option
- button
- label
- fieldset
- legend

---

# 1. Styling Inputs

```css
input{

    padding:10px;

    border:1px solid #ccc;

    border-radius:5px;
}
```

---

# 2. Input Types

The same CSS can style different input types.

```css
input[type="text"]{

}

input[type="email"]{

}

input[type="password"]{

}
```

---

# 3. Placeholder

Use the `::placeholder` pseudo-element.

```css
input::placeholder{

    color:gray;
}
```

---

# 4. Focus

Use `:focus` when the user selects an input.

```css
input:focus{

    border-color:blue;

    outline:none;
}
```

---

# 5. Focus Visible

Useful for keyboard navigation.

```css
button:focus-visible{

    outline:3px solid blue;
}
```

---

# 6. Hover

```css
button:hover{

    background:darkblue;
}
```

---

# 7. Active

Applies while an element is being activated.

```css
button:active{

    transform:scale(.98);
}
```

---

# 8. Disabled

```css
button:disabled{

    opacity:.5;

    cursor:not-allowed;
}
```

HTML:

```html
<button disabled>
    Submit
</button>
```

---

# 9. Checked

Useful for checkboxes and radio buttons.

```css
input:checked{

    accent-color:blue;
}
```

---

# 10. Required

Selects required inputs.

```css
input:required{

}
```

---

# 11. Valid

```css
input:valid{

    border-color:green;
}
```

---

# 12. Invalid

```css
input:invalid{

    border-color:red;
}
```

---

# 13. Select

```css
select{

    padding:10px;

    border-radius:5px;
}
```

---

# 14. Textarea

```css
textarea{

    resize:vertical;

    min-height:120px;
}
```

Resize options:

```css
resize:none;

resize:both;

resize:horizontal;

resize:vertical;
```

---

# 15. Button

```css
button{

    padding:12px 20px;

    border:none;

    cursor:pointer;
}
```

---

# 16. Form Layout With Flexbox

```css
.form-group{

    display:flex;

    flex-direction:column;

    gap:8px;
}
```

---

# 17. Form Layout With Grid

Useful for larger forms.

```css
.form{

    display:grid;

    grid-template-columns:
    1fr 1fr;

    gap:20px;
}
```

---

# 18. Full Width Field

```css
.full-width{

    grid-column:1 / -1;
}
```

---

# 19. Styling Required Fields

HTML:

```html
<input required>
```

CSS:

```css
input:required{

    border-left:4px solid blue;
}
```

---

# 20. Styling Disabled Fields

```css
input:disabled{

    background:#eee;

    cursor:not-allowed;
}
```

---

# 21. File Input

```css
input[type="file"]{

    padding:10px;
}
```

The file upload button can also be styled:

```css
input[type="file"]::file-selector-button{

    padding:8px;

    border:none;

    background:blue;

    color:white;

    cursor:pointer;
}
```

---

# 22. Range Input

```css
input[type="range"]{

    accent-color:blue;
}
```

---

# 23. Checkbox and Radio

```css
input[type="checkbox"],
input[type="radio"]{

    accent-color:blue;
}
```

---

# 24. Autofill

Browsers can automatically fill saved information.

You can target autofilled inputs:

```css
input:-webkit-autofill{

}
```

---

# 25. Form Accessibility

Always connect labels with inputs.

```html
<label for="email">
    Email
</label>

<input
    type="email"
    id="email"
>
```

The `for` value should match the input's `id`.

---

# 26. Avoid Removing Focus Without Replacement

Avoid:

```css
outline:none;
```

unless you provide another visible focus indicator.

Better:

```css
input:focus{

    outline:none;

    border-color:blue;

    box-shadow:
        0 0 0 3px rgba(0,0,255,.2);
}
```

---

# 27. Responsive Forms

Use flexible widths.

```css
form{

    width:min(600px,100%);
}
```

For mobile:

```css
@media(max-width:600px){

    .form{

        grid-template-columns:1fr;
    }
}
```

---

# Common Form Pseudo-Classes

| Selector | Purpose |
|---|---|
| `:focus` | Element is focused |
| `:focus-visible` | Visible keyboard focus |
| `:hover` | Pointer hovering |
| `:active` | Element being activated |
| `:checked` | Checkbox/radio selected |
| `:disabled` | Disabled element |
| `:enabled` | Enabled element |
| `:required` | Required field |
| `:optional` | Optional field |
| `:valid` | Valid input |
| `:invalid` | Invalid input |
| `:placeholder-shown` | Placeholder currently visible |

---

# Best Practices

- Keep labels visible.
- Make inputs large enough to interact with.
- Provide clear focus states.
- Don't rely only on color to communicate errors.
- Make forms responsive.
- Use semantic HTML.
- Connect labels to their inputs.
- Don't remove keyboard focus indicators.
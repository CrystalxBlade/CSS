# CSS Animations

Animations allow elements to change styles automatically over time.

Unlike transitions, animations don't require user interaction.

---

# Syntax

```css
animation:name duration timing-function delay iteration-count direction fill-mode;
```

---

# 1. @keyframes

Defines animation steps.

```css
@keyframes move{

    from{

        transform:translateX(0);
    }

    to{

        transform:translateX(200px);
    }
}
```

---

# 2. animation-name

```css
animation-name:move;
```

---

# 3. animation-duration

```css
animation-duration:2s;
```

---

# 4. animation-timing-function

```css
animation-timing-function:ease;
```

Common values:

- ease
- linear
- ease-in
- ease-out
- ease-in-out

---

# 5. animation-delay

```css
animation-delay:1s;
```

---

# 6. animation-iteration-count

```css
animation-iteration-count:infinite;
```

or

```css
animation-iteration-count:3;
```

---

# 7. animation-direction

```css
animation-direction:alternate;
```

Values:

- normal
- reverse
- alternate
- alternate-reverse

---

# 8. animation-fill-mode

Determines how styles apply before and after the animation.

```css
animation-fill-mode:forwards;
```

Values:

- none
- forwards
- backwards
- both

---

# 9. animation-play-state

Pause or resume an animation.

```css
animation-play-state:paused;
```

---

# 10. animation (Shorthand)

```css
animation:slide 2s ease infinite;
```

---

# Common Animation Properties

- transform
- opacity
- background
- color
- border-radius

---

# Best Practices

✅ Animate `transform` and `opacity` whenever possible.

✅ Keep animations smooth.

✅ Avoid excessive animations.

---

# Summary

| Property | Purpose |
|----------|---------|
| @keyframes | Defines animation |
| animation-name | Animation name |
| animation-duration | Animation speed |
| animation-delay | Delay |
| animation-timing-function | Speed curve |
| animation-iteration-count | Repeat count |
| animation-direction | Playback direction |
| animation-fill-mode | Final state |
| animation-play-state | Pause/Resume |
| animation | Shorthand |
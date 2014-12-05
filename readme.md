# Parallax Scrolling

Exploring ways to invoke or mimic [parallax scrolling](https://en.wikipedia.org/wiki/Parallax_scrolling) in the DOM.

## css-bg-attachment

A CSS [`background-attachment: fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment) rule is applied to a lower-stacked div, preventing its background image from moving with the user's scroll events.

Because the background is stationary (as opposed to scrolling at a different rate from the foreground), this isn't true parallax.

### Demo

[janaspage.com/parallax/css-bg-attachment](http://janaspage.com/parallax/css-bg-attachment/)

### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Great.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Great.
- Mac OS X Firefox 33.0.2 - Great.
- iOS Chrome 38.0.2125.67 - Fail: Background image moves in sync with the user's scrolling.
- iOS Safari 8.1 - Fail: Background image moves in sync with the user's scrolling.

## css-perspective

A CSS [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) is defined on the containing element, creating a perceptual distance between the user and the document's Z plane. The `perspective` property is akin to the *altitude* setting on a virtual map: the greater the `perspective` (altitude), the *farther* away the eye is from the Z plane (the ground), and the *flatter* any 3-D objects will appear. Defining a lesser value brings the eye *closer* and makes 3-D aspects more *pronounced*.

Also, the container's [`transform-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style) is set to preserve 3-D transformations (by default, Firefox will flatten them).

Separate CSS [`transform: translateZ()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) values are defined for midground, background, and foreground elements--pulling them before the Z plane (when positive) or pushing them behind the Z plane (when negative). Continuing the analogy of a virtual map: translating an element along the Z axis is like increasing the *height* of a building (when positive) or the *depth* of a basement (when negative).

[Stacking contexts](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context) trump `translateZ` values, so sections are grouped with compensatory [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) values assigned.

Finally, a CSS [`scale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) is applied to resize foreground and background elements to the window (closer planes are shrunk, farther planes are enlarged).

Adapted from [Keith Clark's blog post](http://keithclark.co.uk/articles/pure-css-parallax-websites/), with layer-structure simplified for clarity.

### Demo

[janaspage.com/parallax/css-perspective](http://janaspage.com/parallax/css-perspective/)

### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Great.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Great.
- Mac OS X Firefox 33.0.2 - Good: If a foreground or background layer is included in the final parallax group, it will extend the document's length, creating an unsightly block of empty space at the end.
- iOS Chrome 38.0.2125.67 - Poor: Parallax works, but inertial scrolling can't be activated without breaking parallax.
- iOS Safari 8.1 - Poor: Parallax works, but inertial scrolling can't be activated without breaking parallax.

## css-position-fixed

A CSS [`position: fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Fixed_positioning) rule is applied to a div, with the aim of preventing it from moving when the user scrolls the page.

Having a fixed position removes the element from the page flow and places it on a higher [stacking context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context); thus, a negative [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) is applied to push it into the background.

The div's `right`, `bottom`, and `left` values are set to zero, affixing it to three edges of the viewport. Setting its `top` also to zero would complete the solution for desktop browsers. However, mobile browsers tend to hide and show the address bar in response to scroll events, which changes the height of the viewport and hence causes the fixed background image to jump.

A small script is added instead, which sets the div's height to equal the viewport's initial height.

Inertial scrolling is not disrupted on desktop or mobile.

Because the background is stationary (as opposed to scrolling at a different rate from the foreground), this isn't true parallax.

### Demo

[janaspage.com/parallax/css-position-fixed](http://janaspage.com/parallax/css-position-fixed/)

### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Great.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Great.
- Mac OS X Firefox 33.0.2 - Great.
- iOS Chrome 38.0.2125.67 - Good: Upon the browser's hiding of its address bar, a white bar of is briefly visible before the repaint is complete.
- iOS Safari 8.1 - Poor: Because the browser adds an additional navigation bar to the bottom of the window, the background image still jumps (though fewer pixels that it would without the helper script). Also, upon the browser's hiding of its address bar, a white gap is briefly visible before the repaint is complete.

## js-request-animation-frame

Upon loading of all DOM content, references to parallax elements are cached, as are calculations of their sizes and initial positions. A rendering loop is initiated via [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame), which repeatedly (and relatively efficiently) applies a CSS [`transform`](http://devdocs.io/css/transform) to the parallax elements based on the user's scroll amount and on the difference in size between background and foreground elements.

Inertial scrolling is not disrupted on desktop or mobile.

Adapted from [Sean Clark's YouTube video](https://www.youtube.com/watch?v=2zpfWJCdNAI), with jQuery dependencies removed.

### Demo

[janaspage.com/parallax/js-request-animation-frame](http://janaspage.com/parallax/js-request-animation-frame/)

### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Great.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Great.
- Mac OS X Firefox 33.0.2 - Fail: No parallax, and below-the-fold content doesn't render.
- iOS Chrome 38.0.2125.67 - Poor: Parallax renders only upon completion of scroll events.
- iOS Safari 8.1 - Good: Gaps occasionally appear if scrolled too quickly.

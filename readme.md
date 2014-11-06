# Parallax Scrolling

Exploring different ways to invoke that oh-so slick and trendy parallax-scrolling effect.

## Techniques

### css-bg-attachment

Summary to come.

#### Demo

[janaspage.com/parallax/css-bg-attachment](http://janaspage.com/parallax/css-bg-attachment/)

#### Compatibility

Summary to come.

### css-perspective

A CSS [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) is defined on the containing element, creating a perceptual distance between the user and the document's Z plane. The `perspective` property is akin to the *altitude* setting on a virtual map: the greater the `perspective` (altitude), the *farther* away the eye is from the Z plane (the ground), and the *flatter* any 3-D objects will appear. Defining a lesser value brings the eye *closer* and makes 3-D aspects more *pronounced*.

Also, the container's [`transform-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style) is set to preserve 3-D transformations (by default, Firefox will flatten them).

Separate CSS [`transform: translateZ()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) values are defined for midground, background, and foreground elements--pulling them before the Z plane (when positive) or pushing them behind the Z plane (when negative). Continuing the analogy of a virtual map: translating an element along the Z axis is like increasing the *height* of a building (when positive) or the *depth* of a basement (when negative).

[Stacking contexts](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context) trump `translateZ` values, so sections are grouped with compensatory [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) values assigned.

Finally, a CSS [`scale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) is applied to resize foreground and background elements to the window (closer planes are shrunk, farther planes are enlarged).

Adapted from [Keith Clark's blog post](http://keithclark.co.uk/articles/pure-css-parallax-websites/), with layer-structure simplified for clarity.

#### Demo

[janaspage.com/parallax/css-perspective](http://janaspage.com/parallax/css-perspective/)

#### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Good.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Good.
- Mac OS X Firefox 33.0.2 - Fair: If a foreground or background layer is included in the final parallax group, it will extend the document's length, creating an unsightly block of empty space at the end.
- iOS Chrome 38.0.2125.67 - Poor: Parallax works, but inertial scrolling can't be activated without breaking parallax.
- iOS Safari 8.1 - Poor: Parallax works, but inertial scrolling can't be activated without breaking parallax.

### css-position-fixed

Summary to come.

#### Demo

[janaspage.com/parallax/css-position-fixed](http://janaspage.com/parallax/css-position-fixed/)

#### Compatibility

Summary to come.

### js-request-animation-frame

Upon loading of all DOM content, references to parallax elements are cached, as are calculations of their sizes and initial positions. A rendering loop is initiated via [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame), which repeatedly (and relatively efficiently) applies a CSS [`transform`](http://devdocs.io/css/transform) to the parallax elements based on the user's scroll amount.

Adapted from [Sean Clark's YouTube video](https://www.youtube.com/watch?v=2zpfWJCdNAI), with jQuery dependencies removed.

#### Demo

[janaspage.com/parallax/js-request-animation-frame](http://janaspage.com/parallax/js-request-animation-frame/)

#### Compatibility

- Mac OS X Chrome 38.0.2125.111 - Good.
- Mac OS X Safari 7.1 (9537.85.10.17.1) - Good.
- Mac OS X Firefox 33.0.2 - Fail: No parallax, and below-the-fold content doesn't render.
- iOS Chrome 38.0.2125.67 - Poor: Parallax renders only upon touchend.
- iOS Safari 8.1 - Good.

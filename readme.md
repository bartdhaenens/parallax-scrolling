# Parallax Scrolling

Exploring different ways to invoke that oh-so slick and trendy parallax-scrolling effect.

## Techniques

### requestAnimationFrame()

Upon loading of all DOM content, references to parallax elements are cached, as are calculations of their sizes and initial positions. A rendering loop is initiated via [requestAnimationFrame()](http://devdocs.io/dom/window.requestanimationframe), which repeatedly (and efficiently) applies a [CSS transform](http://devdocs.io/css/transform) to the parallax elements based on the user's scroll amount.

Mac OS X Chrome 38.0.2125.111 - Good.
Mac OS X Safari 7.1 (9537.85.10.17.1) - Good.
Mac OS X Firefox 33.0.2 - Fail: No parallax, and below-the-fold content doesn't render.
iOS Chrome 38.0.2125.67 - Fail: Parallax renders only upon touchend.
iOS Safari 8.1 - Good.

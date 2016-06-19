# Manila Mixins
A bunch of cool Sass Mixins in part made by me and others curated by me from various sources.

To override some settings just change the settings file or make a copy and import BEFORE Manila 😘

The provided examples are using `.sass` or the indented version of sass but you can use `.scss` as well I just don't like using it 🐶

## The Mixins
- [Align](#Align)
- Background
- BEM
- Breakpoints
- Clearfix
- Flex Columns
- Float Columns
- Google Font Importer
- Medium Underline
- Placeholder (Custom Color)
- Size
- Smart Underline

### Align
Use it to vertically or horizontally align an element to its parent without using Flexbox
The parent item must be with `position: relative` to work.

Example:
```sass
.aligned-both
  +align()

.aligned-vertical
  +align(vertical)

.aligned-horizontal
  +align(horizontal)
```

Output:
```css
.aligned-both {
  position: absolute;
  transform-style: preserve-3d;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); }

.aligned-vertical {
  position: absolute;
  transform-style: preserve-3d;
  top: 50%;
  transform: translateY(-50%); }

.aligned-horizontal {
  position: absolute;
  transform-style: preserve-3d;
  left: 50%;
  transform: translateX(-50%); }
```

### Background
Create a full width contained background with an optional overlay on top of it.

This one uses the `$image-path` variable to get to the img assets.

Example:
```sass
.background
  +background('a-background.jpg')

.background-with-overlay
  +background( 'a-background.jpg', rgba(0,0,0,0.5) )


.background-with-2-overlays
  +background( 'a-background.jpg', rgba(0,0,0,0.5), rgba(0,0,0, 0.8) )

```

Output:
```css
.background {
  background: url("../img/a-background.jpg") no-repeat center/cover; }

.background-with-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../img/a-background.jpg") no-repeat center/cover; }

.background-with-2-overlays {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../img/a-background.jpg") no-repeat center/cover; }

```

### BEM
Block, Element, Mofifier and JS trigger.

Example:
```sass
.block
  padding: 1em
  +e(element)
    font-size: 2em
    +m(modifier)
      color: red

  +is(active)
    opacity: 1
```

Output:
```css
.block {
  padding: 1em; }
  .block__element {
    font-size: 2em; }
    .block__element--modifier {
      color: red; }
  .block.is-active {
    opacity: 1; }
```
### Breakpoints
Never do `@media(min-width: xxx)` again, do it in a sensible way.

**This requires the breakpoints map on the settings** you can add remove and rename your breakpoints at will. BYOB (Bring your own Breakpoints)

Example:
```sass
.mobile-first
  font-size: 1em
  +breakpoint(laptop)
    font-size: 2em
  +breakpoint(desktop)
    font-size: 3em
```

Output:
```css
.mobile-first {
  font-size: 1em; }
  @media (min-width: 992px) {
    .mobile-first {
      font-size: 2em; } }
  @media (min-width: 1200px) {
    .mobile-first {
      font-size: 3em; } }
```
### Clearfix
Quickly give cleafix to an element

Example:
```sass
.clearfix
  +cf
```

Output:
```css
.clearfix {
  *zoom: 1; }
  .clearfix:before, .clearfix:after {
    content: '';
    display: table; }
  .clearfix:after {
    clear: both; }
```
### Flex Columns
Give some flex children some col-based widths

**This uses the `$columns--total` variable**

First arg is the number of cols, second optional arg is the total number of columns

Example:
```sass
.four-flex-cols
  +flex-cols(4)

.seven-flex-cols-of-15
  +flex-cols(7, 15)
```

Output:
```css
.four-flex-cols {
  max-width: 33.33333%;
  flex-basis: 33.33333%; }

.seven-flex-cols-of-15 {
  max-width: 46.66667%;
  flex-basis: 46.66667%; }
```
### Float Columns
Same idea as the flex-columns but with floats parent should be clearfixed.

Example:
```sass
.eight-cols
  +float-cols(8)

.nine-cols-of-20
  +float-cols(9, 20)
```

Output:
```css
.eight-cols {
  float: left;
  width: 66.66667%; }

.nine-cols-of-20 {
  float: left;
  width: 45%; }
```
### Google Font Importer
This just magically works, it looks for the `$font-url--google` and if it exists will import it. Simple!

Example:
```sass
$font-url--google       : "https://fonts.googleapis.com/css?family=Biryani:300,800"
```

Output:
```css
@import url("https://fonts.googleapis.com/css?family=Biryani:300,800");
```
### Medium Underline
A fancy thin underline like the ones you see on Medium.com

The first argument is the color of the line and the second one is the distance from the font. (Usually 1px less than the font size but experiment at will)

Example:
```sass
.medium-underline
  font-size: 22px
  +mediumUnderline(black, 21px)
```

Output:
```css
.medium-underline {
  font-size: 22px;
  text-decoration: none;
  background-image: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.6) 50%);
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 21px; }
```
### Placeholder (Custom Color)
Give an input a custom color for the placeholder to get something better than the boring gray

Example:
```sass
.custom-placeholder
  +placeholder(red)
```

Output:
```css
.custom-placeholder::-webkit-input-placeholder {
  color: red; }

.custom-placeholder::-moz-placeholder {
  color: red;
  opacity: 1; }

.custom-placeholder:-ms-input-placeholder {
  color: red; }

.custom-placeholder::-ms-input-placeholder {
  color: red; }

.custom-placeholder:placeholder-shown {
  color: red; }
```
### Size
A really simple mixin for setting width and height of an element

If only one is provided it will be a square.

Great for using with SVGs

Example:
```sass
.square
  +size(15px)

.rectangle
  +size(2em, 2.5em)
```

Output:
```css
.square {
  width: 15px;
  height: 15px; }

.rectangle {
  width: 2em;
  height: 2.5em; }
```
### Smart Underline
A better underline which can render like the ones on Photoshop or Sketch or Illustrator where the descenders don't get cut by the underline.

**Must be used on a solid color background** Also don't use it too much since is a bit resource heavy on the painting.

More of a vanity thing 💅

First argument is the background color, second is the font color.

Example:
```sass
.smart-underline
  +smartUnderline(#fff, #000)
```

Output:
```css
.smart-underline {
  color: #000;
  text-decoration: none;
  text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#000, #000);
  background-size: .05em 1px, .05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 90%, 100% 90%, 0% 90%; }
  .smart-underline::selection {
    text-shadow: 0.03em 0 #000, -0.03em 0 #000, 0 0.03em #000, 0 -0.03em #000, 0.06em 0 #000, -0.06em 0 #000, 0.09em 0 #000, -0.09em 0 #000, 0.12em 0 #000, -0.12em 0 #000, 0.15em 0 #000, -0.15em 0 #000;
    background: #fff; }
  .smart-underline:before, .smart-underline:after, .smart-underline *, .smart-underline *:before, .smart-underline *:after {
    text-shadow: none; }
  .smart-underline:visited {
    color: #000; }
```

## Testing
So far its manual just run `npm test`


## Resources
- Jeet.gs
- Medium.com
- Eager.io
- GetBEM.com

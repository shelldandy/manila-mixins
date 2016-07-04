# Manila Mixins
A bunch of cool Sass Mixins in part made by me and others curated by me from various sources.

To override some settings just change the settings file or make a copy and import BEFORE Manila 😘

The provided examples are using `.sass` or the indented version of sass but you can use `.scss` as well I just don't like using it 🐶

![Mixins Yo!](http://i.imgur.com/ao0WXBY.gif)

## The Mixins
- [Align](#align)
- [Background](#background)
- [BEM](#bem)
- [Breakpoints](#breakpoints)
- [Clearfix](#clearfix)
- [Flex Columns](#flex-columns)
- [Float Columns](#float-columns)
- [Grid Maker](#grid-maker)
- [Google Font Importer](#google-font-importer)
- [Medium Underline](#medium-underline)
- [Placeholder (Custom Color)](#placeholder)
- [Size](#size)
- [Smart Underline](#smart-underline)

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
### Grid Maker
This mixin is kind of inspired by Foundation + Basscss so its kind of complicated here it goes:

You can set some things by overriding some values as follows:

```scss
$breakpoints: (
  'phablet'     : 480px,
  'tablet'      : 768px,
  'laptop'      : 992px,
  'desktop'     : 1200px
) !default;

$breakpoint-classes: ( phablet tablet laptop desktop) !default;

$columns--total         : 12 !default;

$column-gutter          : 20px !default;
```

Then you can just use it in a really simple way:

```sass
+createGrid()
```

Output:

```css
.row {
  margin-left: -10px;
  margin-right: -10px; }
  .row:after {
    content: '';
    display: block;
    clear: both; }

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-phablet-1, .col-phablet-2, .col-phablet-3, .col-phablet-4, .col-phablet-5, .col-phablet-6, .col-phablet-7, .col-phablet-8, .col-phablet-9, .col-phablet-10, .col-phablet-11, .col-phablet-12, .col-tablet-1, .col-tablet-2, .col-tablet-3, .col-tablet-4, .col-tablet-5, .col-tablet-6, .col-tablet-7, .col-tablet-8, .col-tablet-9, .col-tablet-10, .col-tablet-11, .col-tablet-12, .col-laptop-1, .col-laptop-2, .col-laptop-3, .col-laptop-4, .col-laptop-5, .col-laptop-6, .col-laptop-7, .col-laptop-8, .col-laptop-9, .col-laptop-10, .col-laptop-11, .col-laptop-12, .col-desktop-1, .col-desktop-2, .col-desktop-3, .col-desktop-4, .col-desktop-5, .col-desktop-6, .col-desktop-7, .col-desktop-8, .col-desktop-9, .col-desktop-10, .col-desktop-11, .col-desktop-12 {
  float: left;
  padding-left: 10px;
  padding-right: 10px; }

.col-1 {
  width: 8.33333%; }

.col-2 {
  width: 16.66667%; }

.col-3 {
  width: 25%; }

.col-4 {
  width: 33.33333%; }

.col-5 {
  width: 41.66667%; }

.col-6 {
  width: 50%; }

.col-7 {
  width: 58.33333%; }

.col-8 {
  width: 66.66667%; }

.col-9 {
  width: 75%; }

.col-10 {
  width: 83.33333%; }

.col-11 {
  width: 91.66667%; }

.col-12 {
  width: 100%; }

@media (min-width: 480px) {
  .col-phablet-1 {
    width: 8.33333%; }
  .col-phablet-2 {
    width: 16.66667%; }
  .col-phablet-3 {
    width: 25%; }
  .col-phablet-4 {
    width: 33.33333%; }
  .col-phablet-5 {
    width: 41.66667%; }
  .col-phablet-6 {
    width: 50%; }
  .col-phablet-7 {
    width: 58.33333%; }
  .col-phablet-8 {
    width: 66.66667%; }
  .col-phablet-9 {
    width: 75%; }
  .col-phablet-10 {
    width: 83.33333%; }
  .col-phablet-11 {
    width: 91.66667%; }
  .col-phablet-12 {
    width: 100%; } }

@media (min-width: 768px) {
  .col-tablet-1 {
    width: 8.33333%; }
  .col-tablet-2 {
    width: 16.66667%; }
  .col-tablet-3 {
    width: 25%; }
  .col-tablet-4 {
    width: 33.33333%; }
  .col-tablet-5 {
    width: 41.66667%; }
  .col-tablet-6 {
    width: 50%; }
  .col-tablet-7 {
    width: 58.33333%; }
  .col-tablet-8 {
    width: 66.66667%; }
  .col-tablet-9 {
    width: 75%; }
  .col-tablet-10 {
    width: 83.33333%; }
  .col-tablet-11 {
    width: 91.66667%; }
  .col-tablet-12 {
    width: 100%; } }

@media (min-width: 992px) {
  .col-laptop-1 {
    width: 8.33333%; }
  .col-laptop-2 {
    width: 16.66667%; }
  .col-laptop-3 {
    width: 25%; }
  .col-laptop-4 {
    width: 33.33333%; }
  .col-laptop-5 {
    width: 41.66667%; }
  .col-laptop-6 {
    width: 50%; }
  .col-laptop-7 {
    width: 58.33333%; }
  .col-laptop-8 {
    width: 66.66667%; }
  .col-laptop-9 {
    width: 75%; }
  .col-laptop-10 {
    width: 83.33333%; }
  .col-laptop-11 {
    width: 91.66667%; }
  .col-laptop-12 {
    width: 100%; } }

@media (min-width: 1200px) {
  .col-desktop-1 {
    width: 8.33333%; }
  .col-desktop-2 {
    width: 16.66667%; }
  .col-desktop-3 {
    width: 25%; }
  .col-desktop-4 {
    width: 33.33333%; }
  .col-desktop-5 {
    width: 41.66667%; }
  .col-desktop-6 {
    width: 50%; }
  .col-desktop-7 {
    width: 58.33333%; }
  .col-desktop-8 {
    width: 66.66667%; }
  .col-desktop-9 {
    width: 75%; }
  .col-desktop-10 {
    width: 83.33333%; }
  .col-desktop-11 {
    width: 91.66667%; }
  .col-desktop-12 {
    width: 100%; } }
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

First argument is the background color, second is the font color, this argument is the selection background, defaults to the `$main-color` included on the settings.

Example:
```sass
.smart-underline
  +smartUnderline(#fff, #000, #bada55)
```

Output:
```css
.smart-underline {
  color: #000;
  text-decoration: none;
  text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#000, #000);
  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 90%, 100% 90%, 0% 90%; }
  .smart-underline::selection {
    text-shadow: 0.03em 0 #bada55, -0.03em 0 #bada55, 0 0.03em #bada55, 0 -0.03em #bada55, 0.06em 0 #bada55, -0.06em 0 #bada55, 0.09em 0 #bada55, -0.09em 0 #bada55, 0.12em 0 #bada55, -0.12em 0 #bada55, 0.15em 0 #bada55, -0.15em 0 #bada55;
    background: #bada55; }
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

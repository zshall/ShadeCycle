# ShadeCycle

Gradient text shadow functions and mixins in SASS.

## Getting Started

`npm install shade-cycle`

Import the SCSS file:

`@import 'path/to/node_modules/shade-cycle/dist/shadecycle.scss';`

## Use

You can use ShadeCycle anywhere you'd use a `text-shadow` or `box-shadow`.

<pre>
#basicExample {
  text-shadow: shade-cycle(15, 1, 1, cyan, hotpink);
}
</pre>

The SASS function for creating a ShadeCycle is as follows:

`shade-cycle(num_layers, offset_horizontal, offset_vertical, start_color, end_color, repeat?, offset?)`

* `num_layers`: number of layers to show
* `offset_horizontal`: relative offset of each layer (x axis)
* `offset_vertical`: relative offset of each layer (y axis)
* `start_color`: color to begin with (closest to text)
* `end_color`: color to end with (furthest from text)
* `repeat?`: optional number of times to repeat the color transition relative to the number of layers. If you set this value to 2 or 3 and the layers to 10 you'll see the transition repeat for example. Setting to zero or leaving out will transition smoothly between start and end colors without repeating.
* `offset?`: optional number of iterations to shift from the original color. This will start at a color in-between the start and end, and when the end is reached ShadeCycle will begin from the start color again. This is mainly used in animation.

## Animations

One SASS mixin is included right now to do animations: `shade-cycle-animation`. You can also write your own mixin that takes advantage of the `shade-cycle` function.

<pre>
#animatedExample {
  @include shade-cycle-animation(15, -1, 1, green, yellow, 14, 1000);
}
</pre>

SASS syntax:

`@include shade-cycle-animation(num_layers, offset_horizontal, offset_vertical, start_color, end_color, repeat, milliseconds)`

All parameters are required here. The one that differs is the `milliseconds` parameter:

* `milliseconds`: Length of the animation in milliseconds before the it repeats.

A known issue with the animation is that if the offset and layers aren't set close to each other the keyframes that are generated aren't very smooth.

## Contributing

Clone this repo. If you want to edit the documentation site, `npm install`. I'm using Aurelia for that. Otherwise, the `dist/shade-cycle.scss` file has all that you need.

## License

MIT License

Copyright (c) 2017 Zach Hall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
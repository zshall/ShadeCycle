export class Home {
    examples = [
        {
            id: 'ex0',
            text: 'Getting Started',
            code: `/* Simply include the SCSS file! You're now ready to go. */
@import 'dist/shadecycle.scss';`
        },
        {
            id: 'ex1',
            text: 'My cool title',
            code: `#ex1 {
  text-shadow: shade-cycle(15, 1, 1, cyan, hotpink);
}`
        },
        {
            id: 'ex2',
            text: 'My cool title',
            code: `#ex2 {
  text-shadow: shade-cycle(10, 5, 5, red, blue);
}`
        },
        {
            id: 'ex3',
            text: 'My cool title',
            code: `#ex3 {
  @include shade-cycle-animation(15, -1, 1, green, yellow, 14, 1000);
}`
        },
        {
            id: 'ex4',
            text: 'My cool title',
            code: `#ex4 {
  text-shadow: shade-cycle(10, 1, 1, purple, darken(purple, 10%)), shade-cycle(10, -1, -1, orangered, darken(orangered, 10%));
}`
        }
    ];
}
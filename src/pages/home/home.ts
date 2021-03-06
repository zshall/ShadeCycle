export class Home {
    examples = [
        {
            id: 'ex0',
            text: 'Getting Started',
            code: `npm install shade-cycle
/* Now simply include the SCSS file! You're now ready to go. */
@import 'path/to/node_modules/shade-cycle/dist/shadecycle.scss';`
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
  @include shade-cycle-animation(15, -1, 1, green, yellow, 10, 3000);
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
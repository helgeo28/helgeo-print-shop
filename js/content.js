import * as items from "./items.js";
import * as cartItems from "./cart.js";

// images
const uniform_A = [
  "Uniform/CategoryA/a1.jpg",
  "Uniform/CategoryA/a2.jpg",
  "Uniform/CategoryA/a3.jpg",
  "Uniform/CategoryA/a4.jpg",
  "Uniform/CategoryA/a5.jpg",
  "Uniform/CategoryA/a6.jpg",
  "Uniform/CategoryA/a7.jpg",
  "Uniform/CategoryA/a8.jpg",
];
const uniform_B = [
  "Uniform/CategoryB/b1.jpg",
  "Uniform/CategoryB/b2.jpg",
  "Uniform/CategoryB/b3.jpg",
  "Uniform/CategoryB/b4.jpg",
  "Uniform/CategoryB/b5.jpg",
  "Uniform/CategoryB/b6.webp",
  "Uniform/CategoryB/b7.jpg",
  "Uniform/CategoryB/b8.jpg",
];
const uniform_C = [
  "Uniform/CategoryC/c1.jpg",
  "Uniform/CategoryC/c2.jpg",
  "Uniform/CategoryC/c3.jpg",
  "Uniform/CategoryC/c4.jpg",
  "Uniform/CategoryC/c5.jpg",
  "Uniform/CategoryC/c6.jpg",
  "Uniform/CategoryC/c7.jpg",
  "Uniform/CategoryC/c8.jpg",
  "Uniform/CategoryC/c9.jpg",
];
const uniform_D = [
  "Uniform/CategoryD/d1.jpg",
  "Uniform/CategoryD/d2.jpg",
  "Uniform/CategoryD/d3.jpg",
  "Uniform/CategoryD/d4.jpg",
  "Uniform/CategoryD/d5.jpg",
  "Uniform/CategoryD/d6.jpg",
  "Uniform/CategoryD/d7.jpg",
  "Uniform/CategoryD/d8.jpg",
];
const uniform_E = [
  "Uniform/CategoryE/e1.jpg",
  "Uniform/CategoryE/e2.jpg",
  "Uniform/CategoryE/e3.jpg",
  "Uniform/CategoryE/e4.jpg",
  "Uniform/CategoryE/e5.jpg",
  "Uniform/CategoryE/e6.webp",
  "Uniform/CategoryE/e7.jpg",
  "Uniform/CategoryE/e8.jpg",
];
const uniform_F = [
  "Uniform/CategoryF/f1.jpg",
  "Uniform/CategoryF/f2.jpg",
  "Uniform/CategoryF/f3.jpg",
  "Uniform/CategoryF/f4.jpg",
  "Uniform/CategoryF/f5.jpg",
  "Uniform/CategoryF/f6.webp",
  "Uniform/CategoryF/f7.jpg",
  "Uniform/CategoryF/f8.jpg",
];
const uniform_G = [
  "Uniform/CategoryG/g1.jpg",
  "Uniform/CategoryG/g2.jpg",
  "Uniform/CategoryG/g3.jpg",
  "Uniform/CategoryG/g4.jpg",
  "Uniform/CategoryG/g5.jpg",
  "Uniform/CategoryG/g6.jpg",
  "Uniform/CategoryG/g7.jpg",
  "Uniform/CategoryG/g8.jpg",
  "Uniform/CategoryG/g9.jpg",
];
const uniform_H = [
  "Uniform/CategoryH/h1.jpg",
  "Uniform/CategoryH/h2.jpg",
  "Uniform/CategoryH/h3.jpg",
  "Uniform/CategoryH/h4.jpg",
  "Uniform/CategoryH/h5.jpg",
  "Uniform/CategoryH/h6.jpg",
  "Uniform/CategoryH/h7.jpg",
  "Uniform/CategoryH/h8.jpg",
  "Uniform/CategoryH/h9.jpg",
  "Uniform/CategoryH/h10.jpg",
];
const uniform_I = [
  "Uniform/CategoryI/i1.jpg",
  "Uniform/CategoryI/i2.jpg",
  "Uniform/CategoryI/i3.jpg",
  "Uniform/CategoryI/i4.jpg",
  "Uniform/CategoryI/i5.jpg",
  "Uniform/CategoryI/i6.jpg",
  "Uniform/CategoryI/i7.jpg",
  "Uniform/CategoryI/i8.jpg",
];
export { uniform_A, uniform_B, uniform_C, uniform_D, uniform_E, uniform_F, uniform_G, uniform_H, uniform_I };
// text
const itemTextA = [
  `<h3>Long sleeves</h3><p>Gold Shirt</p>`,
  `<h3>Short sleeves</h3><p>Gold Shirt</p>`,
  `<h3>Jersey</h3><p>Gold and black</p>`,
  `<h3>Pullover</h3><p>Gold and black</p>`,
  `<h3>Trouser</h3><p>Black</p>`,
  `<h3>Socks</h3><p>Gold and black</p>`,
  `<h3>School dress</h3><p>Gold</p>`,
  `<h3>Tracksuits</h3><p>Gold and black</p>`,
];
const itemTextB = [
  `<h3>Long sleeves</h3><p>Royal Purple shirt</p>`,
  `<h3>Short sleeves</h3><p>Royal Purple shirt</p>`,
  `<h3>Jersey</h3><p>Grey</p>`,
  `<h3>Pullover</h3><p>Grey</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Socks</h3><p>Grey</p>`,
  `<h3>Sports wear</h3><p>Blue and gold</p>`,
  `<h3>Skirt</h3><p>Dark blue</p>`,
];
const itemTextC = [
  `<h3>Long sleeves</h3><p>Grey shirt</p>`,
  `<h3>Short sleeves</h3><p>Grey shirt</p>`,
  `<h3>Jersey</h3><p>Maroon and gold</p>`,
  `<h3>Pullover</h3><p>Maroon and gold</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Socks</h3><p>Maroon and gold</p>`,
  `<h3>Drimack</h3><p>Maroon</p>`,
  `<h3>Sports wear</h3><p>Maroon and gold</p>`,
  `<h3>School dress</h3><p>Maroon and gold</p>`,
];

const itemTextD = [
  `<h3>Long sleeves</h3><p>Lightblue shirt</p>`,
  `<h3>Short sleeves</h3><p>Lightblue shirt</p>`,
  `<h3>Jersey</h3><p>Lightblue</p>`,
  `<h3>Pullover</h3><p>Lightblue</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Socks</h3><p>Lightblue</p>`,
  `<h3>Skirt</h3><p>Lightblue</p>`,
  `<h3>Tracksuits</h3><p>Lightblue</p>`,
];
const itemTextE = [
  `<h3>Long sleeves</h3><p>Gold shirt</p>`,
  `<h3>Short sleeves</h3><p>Gold shirt</p>`,
  `<h3>Jersey</h3><p>Green & yellow</p>`,
  `<h3>Pullover</h3><p>Green & yellow</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Socks</h3><p>Green</p>`,
  `<h3>Drimack</h3><p>Green</p>`,
  `<h3>Skirt</h3><p>Green</p>`,
];
const itemTextF = [
  `<h3>Long sleeves</h3><p>White</p>`,
  `<h3>Short sleeves</h3><p>White</p>`,
  `<h3>Jersey</h3><p>Naivyblue</p>`,
  `<h3>Pullover</h3><p>Naivyblue</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Socks</h3><p>Grey</p>`,
  `<h3>Skirt</h3><p>Naivyblue</p>`,
  `<h3>Skirt</h3><p>Check</p>`,
];
const itemTextG = [
  `<h3>T-shirt</h3><p>Green</p>`,
  `<h3>Jersey</h3><p>Green</p>`,
  `<h3>Pullover</h3><p>Green</p>`,
  `<h3>Sports wear</h3><p>Green & orange</p>`,
  `<h3>Shorts</h3><p>Green</p>`,
  `<h3>Drimack</h3><p>Green</p>`,
  `<h3>Trouser</h3><p>Grey</p>`,
  `<h3>Long socks</h3><p>Grey</p>`,
  `<h3>School dress</h3><p>Green & check</p>`,
];
const itemTextH = [
  `<h3>Long sleeves</h3><p>White shirt</p>`,
  `<h3>Short sleeves</h3><p>White shirt</p>`,
  `<h3>Golf shirt - Boys</h3><p>Red</p>`,
  `<h3>Golf shirt - Girls</h3><p>Red</p>`,
  `<h3>Jersey</h3><p>Naivyblue</p>`,
  `<h3>Pullover</h3><p>Naivyblue</p>`,
  `<h3>Trouser</h3><p>Naivyblue</p>`,
  `<h3>Long socks</h3><p>Naivyblue</p>`,
  `<h3>Skirt</h3><p>Check</p>`,
  `<h3>Short sleeves</h3><p>White & check</p>`,
];
const itemTextI = [
  `<h3>Long sleeves</h3><p>White shirt</p>`,
  `<h3>Short sleeves</h3><p>White shirt</p>`,
  `<h3>Jersey</h3><p>Naivyblue</p>`,
  `<h3>Pullover</h3><p>Naivyblue</p>`,
  `<h3>Trouser</h3><p>Naivyblue</p>`,
  `<h3>Sports wear</h3><p>Naivyblue & white</p>`,
  `<h3>School dress</h3><p>Check</p>`,
  `<h3>Skirt</h3><p>Check</p>`,
];
// export {};

//Check buttons

items.getItems(uniform_A, itemTextA);
items.getItems(uniform_B, itemTextB);
items.getItems(uniform_C, itemTextC);
items.getItems(uniform_D, itemTextD);
items.getItems(uniform_E, itemTextE);
items.getItems(uniform_F, itemTextF);
items.getItems(uniform_G, itemTextG);
items.getItems(uniform_H, itemTextH);
items.getItems(uniform_I, itemTextI);

console.log(cartItems.addToCart());

//Heat click

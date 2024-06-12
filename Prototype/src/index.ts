import Computador from "./products/Computador";
import Notebook from "./products/Notebook";

let computador1 = new Computador("Dell", "Intel i7", 16, "1TB");
let computador2 = computador1.clone();

let computador3 = new Computador("Guts", "Berserk", 80, "80000000TB");
let computador4 = computador3.clone();

let notebook1 = new Notebook("Apple", "M249", 16, "512GB", 15);
let notebook2 = notebook1.clone();

console.log(computador1);
console.log(computador2);
console.log(computador3);
console.log(computador4);
console.log(notebook1);
console.log(notebook2);
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1; 
}
const random = getRandomInt();

const num3 = 20;
const num4 = 16;
const mod = num3 % num4; 

const numbers = [10, 20, 15, 5];
const max = Math.max(...numbers);

console.log(`multiply: ${multiply}, random: ${random}, mod: ${mod}, max: ${max}`);

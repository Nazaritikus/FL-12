const invalidInput = 'Input values should be ONLY numbers';
const zeroSide = 'A triangle must have 3 sides with a positive definite length';
const cantExist = 'Triangle doesn’t exist';
const introMessage = 'Please enter triangle sides length \n Please enter';

let a = Math.round(prompt(introMessage + ' a:'));
console.log(a);
let b = Math.round(prompt(introMessage + ' b:'));
console.log(b);
let c = Math.round(prompt(introMessage + ' c:'));
console.log(c);

if (isNaN(a) || a.length === 0 ||
    isNaN(b) || b.length === 0 ||
    isNaN(c) || c.length === 0) {
    console.log(invalidInput);
    alert(invalidInput);
} else if (a === 0 || b === 0 || c === 0) {
    console.log(zeroSide);
    alert(zeroSide);
} else if (!(a + b > c) || !(a + c > b) || !(c + b > a)) {
    console.log(cantExist);
    alert(cantExist);
} else if (a === b && a === c) {
    console.log('This is Equilateral triangle');
    alert('This is Equilateral triangle');
} else if (a === b || a === c || c === b) {
    console.log('This is Isosceles triangle');
    alert('This is Isosceles triangle');
} else {
    console.log('This is Scalene triangle');
    alert('This is Scalene triangle')
}
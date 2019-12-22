const invalidInput = 'Invalid input data';
const discLessZero = 'There is no solution for Quadratic equation with entered values. (Discriminant < 0)';
const introMessage = 'Please enter appropriate numbers for Quadratic equation (ax2 + bx + c = 0) \n Please enter';
let disc = null;
let value1 = null;
let value2 = null;

let a = prompt(introMessage + ' a:');
console.log(a);
let b = prompt(introMessage + ' b:');
console.log(b);
let c = prompt(introMessage + ' c:');
console.log(c);

if (isNaN(a) || a.length === 0 ||
    isNaN(b) || b.length === 0 ||
    isNaN(c) || c.length === 0) {
    alert(invalidInput);
} else {
    console.log('Your equation is: \n' + a + 'x2 + ' + b + 'x + ' + c + ' = 0');
    disc = b * b - 4 * a * c;
    if (disc > 0) {
        value1 = (-b + Math.sqrt(disc)) / (2 * a);
        value2 = (-b - Math.sqrt(disc)) / (2 * a);
        console.log('x1 = ' + value1 + ' and x2 = ' + value2);
        alert('x1 = ' + Math.round(value1) + ' and x2 = ' + Math.round(value2));
    } else if (disc === 0) {
        value1 = -b / (2 * a);
        console.log('x = ' + value1);
        alert('x = ' + Math.round(value1));
    } else {
        alert(discLessZero);
        console.log(discLessZero);
    }

}
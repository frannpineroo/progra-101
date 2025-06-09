import { time } from 'console';
import { 
    addTwoNumbers, 
    substractTwoNumbers, 
    timesTwoNumbers, 
    divideTwoNumbers 
} from '../helpers/math-helpers';

let num1: number = 30;
let num2: number = 20;

let total: number = addTwoNumbers(num1, num2);
let total2: number = substractTwoNumbers(num1, num2);
let total3: number = timesTwoNumbers(num1, num2);
let total4: number = divideTwoNumbers(num1, num2);

console.log('suma:', total);
console.log('resta:', total2);
console.log('multiplicacion:',total3);
console.log('division:', total4);

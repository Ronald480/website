// // NUMBER CHALLENGE
// const x = 40;

// const y = 417;

// const sum = x+y;

// const difference = x-y;

// const product = x*y;

// const quotient = x/y;

// const remainder = x%y;

// console.log('The remainder of x and y is: '+remainder);
// console.log('The quotient of x and y is: '+quotient);
// console.log('The product of x and y is: '+product);
// console.log('The difference of x and y is: '+difference);
// console.log('The sum of x and y is: '+sum);

// // ALTERNATIVE APPROACH
// const a = Math.floor(Math.random() * 100 + 1);
// const b = Math.floor(Math.random() * 50 + 1);

// const sum1 = a+b;
// const difference1 = a-b;
// const quotient1 = a/b;
// const product1 = a*b;
// const remainder1 = a%b;

// const sumOutput = `${a} + ${b} = ${sum1}`;
// const differenceOutput = `${a} - ${b} = ${difference1}`;
// const quotientutput = `${a} / ${b} = ${quotient1}`;
// const productOutput = `${a} * ${b} = ${product1}`;
// const remainderOutput = `${a} % ${b} = ${remainder1}`;

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(quotientutput);
// console.log(productOutput);
// console.log(remainderOutput);

// let d = new Date();
// let c = d.toLocaleString('default', {
//     weekday: 'long',
//     month: 'numeric',
//     year: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     // timeZone: 'America/New York',
// })
// //  c = d.getDate();
// console.log(c);

// // WORKING WITH ARRAYS
// const arr = [3,4,5,6,7];

// arr.push(8);
// arr.push(9);
// arr.push(10);
// arr.push(11);
// arr.unshift(2);
// arr.unshift(1);
// arr.unshift(0);
// arr.pop();
// arr.shift();
// arr.reverse();
// console.log(arr);
// // ARRAY CHALLENGE 1
// const array = [1, 2, 3, 4, 5];
// array.push(6);
// array.unshift(0);
// array.reverse();
// console.log(array);
// // ARRAY CHALLENGE 2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr1.pop();
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// // JSON METHODS CHALLENGE
// const library = [{
//     title: 'Narnia',
//     author: 'Ronald',
//     status: {
//         own: true,
//         reading: false,
//         read: false,
//     },    
// },
// {
//     title: 'Goosebumps',
//     author: 'R.L Stine',
//     status: {
//         own: true,
//         reading: false,
//         read: false,
//     },
// },
// {
//     title: 'Inter Science',
//     author: 'GAST',
//     status: {
//         own: true,
//         reading: false,
//         read: false,
//     },
// }

// ];
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// const {title: firstbook  } = library[0]; 
// console.log(firstbook);

// const libraryJSON = JSON.stringify(library);
// console.log(libraryJSON);

// // FUNCTIONS
// function subNum(nume1, nume2, nume3, nume4, nume5, nume6) {
//     // x = Math.random(nume1);
//     // y = Math.random(nume2)
//     // z = Math.random(nume3)
//     // a = Math.random(nume4)
//     // b = Math.random(nume5)
//     // c = Math.random(nume6)
//     console.log(nume1 + nume2 - nume3 * nume4 / nume5 % nume6);
// }
// subNum(6,5,4,3,2,1);

// // PARAMS AND ARGUMENTS
// function add(...numbers){
//     let total = 0;
//     for(const num of numbers){
//         total += num;
//     }
//     return `The sum of the numbers is: ` + total;
// }

// console.log(add(1,2,3,4,5,6));

// // OBJECTS AS PARAMS
// function login(user){
//     return `Th user ${user.name} with id ${user.id} has been registered`;
// }
// const user = {
//     id: 558387224,
//     name: 'Vanessa'
// }

// console.log(login(user));

// // ARRAYS AS PARAMS 
// function getRandom(...arr){
//     const getRandom1 = Math.floor(Math.random() * arr.length);
//     const van = arr[getRandom1];
//     console.log(van); 
// } 

// getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // GLOBAL & FUNCTION SCOPE
// console.log(window.innerWidth);

// // ARROW FUNCTIONS
// const adder = (a, b) => {
//     return a + b;
// }
// console.log(adder(1, 2));

// const substracter = (a,b) => {
//     return a-b;
// }

// console.log(substracter(4,3));

// // IMPLICIT RETURN
// const adders = (a,b) => a+b;
// console.log(adders(213,440));

// // CALCULATOR CHALLENGE
// function calculator (num1,num2,O) {
//     switch(O) {
//         case "+":
//             return num1+num2;
//         break;
//         case '-':
//             return num1-num2;
//         break;
//         case '/':
//             return num1/num2;
//         break;
//         case '*':
//             return num1*num2;
//         break;
//         default:
//             console.log('Wrong operator!!!');                
//     }
// }

// console.log(calculator(1,2,'+'));

// // FOR LOOP (MULTIPLICATION TABLE)

// // for(let i = 1; 1<=10; i++) {
// //     console.log('Number '+ i);
// //     for(let j = 1; j<=10; j++){
// //         console.log(`${i} * ${j} = ${i*j}`);
// //     }
// // }

// // LOOP THROUGH AN ARAY 
//  const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

//  for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     if(i == 2){
//         console.log('My name is '+names[i]);
//     } else {
//         console.log(names[i]);
//     }
//  }

for(let i = 1; i<=100; i++){
    if(i%3 == 0  && i%5 == 0){
        console.log('FizzBuzz');
    } else if(i%3 == 0){
        console.log('Fizz');
    } else if(i%5 == 0){
        console.log('Buzz');
    } else {console.log(i)};
}

// Array.FILTER
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(function(number){
    return number % 2 == 0;
});
console.log(evenNumbers);

// USING FOR EACH
let evenNumber = [];
numbers.forEach(function (number) {
    if(number % 2 == 0) {
        evenNumber.push(number);
    };
});
console.log(evenNumber);


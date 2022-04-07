const numbers = [26,78,44,34,68];
const numbers2 = new Array(39,54,28,39);
const color = ["red", "yellow", "green", "orange"];
const mixed = [44, "hello", true, undefined, null, {a: 1, b:2}, new Date()];


let value;


value = numbers.length;
value = Array.isArray(numbers);
value = numbers[2]
value = numbers[0]


numbers.push(100);
numbers.unshift(200);


numbers.pop();
numbers.shift();
numbers.splice(1, 3);
numbers.reverse();

console.log(numbers);
console.log(value);



value = numbers.concat(numbers2);
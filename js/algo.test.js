// Testing Algo JS

// import { waterCapacity } from "./algo.js";
const { waterCapacity } = require("./algo")

// Basic Test Cases

const test1 = waterCapacity([0,4,0,0,0,6,0,6,4,0]);

console.log("Starting test 1 - waterCapacity([0,4,0,0,0,6,0,6,4,0])")
if (test1 !== 18) {
	console.log(`waterCapacity([0,4,0,0,0,6,0,6,4,0]) fails - Expected - 18 Receieved - ${test1}`);
	return;
}
console.log("Test1 Successful");


const test2 = waterCapacity([0, 3, 0 , 0 , 2, 0, 4, 0 ]);

console.log("Starting test 2 - waterCapacity([0, 3, 0 , 0 , 2, 0, 4, 0 ])")
if (test2 !== 10) {
	console.log(`waterCapacity([0, 3, 0 , 0 , 2, 0, 4 ]) fails - Expected - 18 Receieved - ${test2}`);
	return;
}
console.log("Test2 Successful");

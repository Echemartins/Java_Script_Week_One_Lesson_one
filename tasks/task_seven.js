//using the typeof
const duration = 90;
console.log(typeof duration); // Output: "number
const string = "hello World!";
console.log(typeof string); // Output: "string
const result = [34, 98, 100, 203];
console.log(typeof result); // Output: "object
const boolean = false;
console.log(typeof boolean); // Output: "boolean
const school = { institution: "Unizik", location: 'awka' };
console.log(typeof school); // Output: "object"

// //equality value
console.log(true == 1); // Output: true

// //strict equality
console.log(true=== 1) // output: false

// // truthy
// // this are truthy values: true, functions. objects,non-empty strings
let married = true
if (married) {
  console.log('you are good to go')}
  else {
    console.log('you are not a man');
  }
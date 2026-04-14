// let Member1 = {
//   fName: "azmat",
//   lName: "Javed",
// };

// let Member2 = {
//   fName: "Mohammad",
//   lName: "Affan ",
// };

// let fullName = function () {
//   console.log(this.fName + " " + this.lName);
// };

// fullName.call(Member2);

// let name = {
//   firstname: "azmat",
//   lastname: "Javed 1",
// };

// let printName = function () {
//   console.log(this.firstname + " " + this.lastname);
// };

// let printMyName = printName.bind(name);
// printMyName();

// Function.prototype.mybind= funciton(...args){
//     let obj = this
//     return function(){
//         printName();
//         obj.call(args[0]);
//     }

// }

// let printMyName2= printName.mybind(name);
// printMyName();

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// l;

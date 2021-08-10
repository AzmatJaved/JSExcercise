// Without clouser
function greet(message) {
  console.log(message);
}

function greeter(name, age) {
  return name + "Says Hey!! He is " + age + "years old";
}

var message = greeter("azmat", 20);
greet(message);

// using Clouser
function greeter(name, age) {
  var message = name + "Says Hey!! He is " + age + "years old";
  return function greet() {
    console.log(message);
  };
}

//Generate the clouser
var azmatgreeter = greeter("azmat", 30);
azmatgreeter();

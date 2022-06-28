const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//using console.log in a function

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('John');

//using a return statement in a function 

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);
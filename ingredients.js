const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Ingredients list, using a for loop:")
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("Ingredients list, using a while loop:")
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("Ingredients list, in reverse order:")
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}

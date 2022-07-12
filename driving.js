const carPassing = function carPassing(cars, speed) {
  let timeAndSpeed = {
    time: Date.now(),
    speed: speed
  }
  cars.push(timeAndSpeed);
  return cars;
}
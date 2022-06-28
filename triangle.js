function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++){
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  let triangle = "";
  let numberOfLines = 1;
  for (numberOfLines = 1; numberOfLines <= length; numberOfLines++){
    triangle = triangle + makeLine(numberOfLines);
  }
  return triangle;
}
console.log(buildTriangle(10));
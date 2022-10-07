class Square {
  constructor(side) {
    this.side = side;
  }
  static squareCalc(side) {
    this.side = side;
    let squareArea = side * side;
    return squareArea;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static rectangleCalc(width, heigth) {
    this.heigth = heigth;
    this.width = width;
    let rectangleArea = width * heigth;
    return rectangleArea;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  static circleCalc(radius) {
    this.radius = radius;
    return Math.PI * radius * radius;
  }
}

class AreaCalculator {
  // ...
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

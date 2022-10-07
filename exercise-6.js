class Square {
  constructor(side) {
    this.side = side;
  }
  calculate(side) {
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
  calculate(width, heigth) {
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
  calculate(radius) {
    this.radius = radius;
    return Math.PI * radius * radius;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

class AreaCalculator {
  // ...
  static calculate(square, rectangle, circle) {
    if (square instanceof Square) {
      return square;
    } else if (rectangle instanceof Rectangle) {
      return rectangle;
    } else if (circle instanceof Circle) {
      return circle;
    }
  }
}

console.log(square instanceof Square);
console.log(rectangle instanceof Rectangle);
console.log(circle instanceof Circle);
console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

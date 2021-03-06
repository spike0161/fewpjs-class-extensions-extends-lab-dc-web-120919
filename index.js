class Polygon {
  constructor(array) {
    this.array = array
  }
  get countSides() {
    return this.array.length
  }
  get perimeter() {
    return this.array.reduce((accum, x) => accum + x)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1)) {
      return true
    } else {
      return false
    }
  }
}

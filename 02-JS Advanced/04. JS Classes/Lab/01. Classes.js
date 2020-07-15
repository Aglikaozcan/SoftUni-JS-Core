class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 10, 'red');

console.log(Rectangle.prototype);
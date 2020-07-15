const buildRect = (width, height) => ({
    width,
    height,
    area() {
        return this.width * this.height;
    },
    compareTo(rect) {
        return this.area() - rect.area();
    }
});

const x = buildRect(10, 5);
const y = buildRect(2, 3);
console.log(x.compareTo(y));
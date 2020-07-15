class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {        
        this.innerLength -= length;
        
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let output = this.innerString;

        if (this.innerString.length > this.innerLength) {
            output = this.innerString.slice(0, this.innerLength) + '...';
        } else if (this.innerLength === 0) {
            output = '...';
        }

        return output;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test


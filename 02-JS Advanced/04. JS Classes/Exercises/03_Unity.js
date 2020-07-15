class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let output = `${this.name}\n`;

        for (let rat of this.unitedRats) {
            output += `##${rat}\n`;
        }

        return output;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.toString());


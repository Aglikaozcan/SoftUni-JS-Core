class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids[grade]) {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        } else {
            for (let kid of this.kids[grade]) {
                if (kid === `${name}-${budget}`) {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (this.kids[grade]) {
            for (let kid of this.kids[grade]) {
                let currentName = kid.split('-')[0];
                if (currentName === name) {
                    let index = this.kids[grade].indexOf(kid);
                    this.kids[grade].splice(index, 1);

                    return this.kids[grade];
                }
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        let message = '';

        if (this.numberOfChildren === 0) {
            message = `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        } else {
            message = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

            Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
            let counter = 1;

            for (let grade in this.kids) {
                message += `Grade: ${grade}\n`;
                for (let kid of this.kids[grade]) {
                    message += `${counter}. ${kid}\n`;
                    counter++;
                }
            }
        }
        return message;
    }

    get numberOfChildren() {
        let number = 0;

        for (let grade in this.kids) {
            number += this.kids[grade].length;
        }

        return number;
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);


console.log(vacation.toString());
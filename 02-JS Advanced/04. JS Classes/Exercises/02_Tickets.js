function dataBase(input, sortingCtiterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let i = 0; i < input.length; i++) {
        let [destination, price, status] = input[i].split('|');
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    let sortedTickets = [];

    if (sortingCtiterion === 'price') {
        sortedTickets = tickets
            .sort((a, b) => a[sortingCtiterion] - b[sortingCtiterion]);
    } else {
        sortedTickets = tickets
            .sort((a, b) => a[sortingCtiterion].localeCompare(b[sortingCtiterion]));
    }
    
    return sortedTickets;
}
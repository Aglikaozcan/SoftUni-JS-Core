class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.capacity = capacity;
        this.capacities = {
            single: parseInt(this.capacity * 0.5),
            double: parseInt(this.capacity * 0.3),
            maisonette: parseInt(this.capacity * 0.2)
        }
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.capacities[roomType] > 0) {
            let roomNumber = this.currentBookingNumber;
            let currentBooking = { clientName, roomType, nights, roomNumber };
            this.bookings.push(currentBooking);
            this.currentBookingNumber++;
            this.capacities[roomType]--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${roomNumber}.`;
        } else {
            let output = `No ${roomType} rooms available!`;

            let availableRooms = Object.keys(this.capacities).filter(x => this.capacities[x] > 0);

            for (let roomType of availableRooms) {
                output += ` Available ${roomType} rooms: ${this.capacities[roomType]}.`;
            }
            return output;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        if (this.bookings.find(x => x.roomNumber === currentBookingNumber)) {
            let currentRoom = this.bookings.find(x => x.roomNumber === currentBookingNumber);
            
            if (this.servicesPricing[serviceType]) {
                if (!currentRoom.services) {
                    currentRoom.services = [];
                }
                currentRoom.services.push(serviceType);
                return `Mr./Mrs. ${currentRoom.clientName}, Your order for ${serviceType} service has been successful.`;
            } else {
                return `We do not offer ${serviceType} service.`;
            }
        }

        return `The booking ${currentBookingNumber} is invalid.`;
    }


    checkOut(currentBookingNumber) {
        if (!this.bookings.find(x => x.roomNumber === currentBookingNumber)) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let currentRoom = this.bookings.find(x => x.roomNumber === currentBookingNumber);
        let totalMoney = currentRoom.nights * this.roomsPricing[currentRoom.roomType];
        let message = `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom.clientName}.`;

        if (!currentRoom.services) {
            message += `The total amount of money you have to pay is ${totalMoney} BGN.`;
        } else {
            let totalServiceMoney = 0;
            for (let service of currentRoom.services) {
                totalServiceMoney += this.servicesPricing[service];
            }

            message += ` The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
        }

        this.capacities[currentRoom.roomType]++;

        return message;
    }

    report() {
        let output = [];
        output.push(`${this.name.toUpperCase()} DATABASE:`);
        output.push('-'.repeat(20));

        if(this.bookings.length === 0) {
            output.push(`There are currently no bookings.`);
        }

        for (let booking of this.bookings) {
            output.push(`bookingNumber - ${booking.roomNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}`);

            if(booking.services) {
                output.push(`services: ${booking.services.join(', ')}`);
            }

            output.push('-'.repeat(10));
        }

        return output.join('\n');
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.report());

console.log(hotel.roomService(3, 'housekeeping'));
console.log(hotel.roomService(3, 'drink'));
console.log(hotel.roomService(2, 'room'));

console.log(hotel.report());
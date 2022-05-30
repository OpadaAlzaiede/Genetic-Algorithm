export default class Room {

    constructor(number, seatingCapacity) {
        this.number      = number;
        this.seatingtCapacity = seatingCapacity;
    }

    getNumber() {
        return this.number;
    }
    
    getSeatingCapacity() {
        return this.seatingtCapacity;
    }
}
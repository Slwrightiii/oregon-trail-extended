class Wagon {
    constructor (capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    
    }
    getAvailableSeatCount () {
       const seatCountElement = this.capacity - this.passengers
       console.log(seatCountElement)
    }   
    join (traveler){
        if (this.passengers === this.capacity) {
            return "Wagon is full"
        } else {
            this.passengers.push(traveler)
        }
    }
    
    shouldQuarantine() {
        if (this.isHealthy === false){
            return "true"
        } else {
            return "false"
        }
    }

    totalFood() {
        //const totalFoodElement = seatCountElement + traveler
    }
}




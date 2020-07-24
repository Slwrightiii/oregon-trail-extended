class Wagon {
    constructor (capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    
    }
    getAvailableSeatCount () {
       const seatCountElement = this.capacity - this.passengers
       return seatCountElement
       
    }   
    join (traveler){
        if (this.passengers === this.capacity) {
            return "Wagon is full"
        } else {
            this.passengers.push(traveler)
        }
    }
    
    shouldQuarantine() {

        let passengerQuarantineElement = 0;

        for (let index = 0; index < this.passengers.length; index ++) {
            if (this.passengers[index]) {
                passengerQuarantineElement++;
            }
        }
        return passengerQuarantineElement;
    }

        //if (this.isHealthy === false){
           // return "true"
        //} else {
          //  return "false"
        //}
   // }

    totalFood() {

        let totalFoodElement2 = 0;

        for (let index =0; index < this.passengers.length; index++) {
            if (this.passengers[index]) {
                totalFoodElement2++;
            }
        }
        return totalFoodElement2;
    }

        //const totalFoodElement = seatCountElement + traveler
    }





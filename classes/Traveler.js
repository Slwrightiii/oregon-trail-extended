class Traveler {
    constructor (name, food, isHealthy) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        const foodElement = 2
       console.log(foodElement + this.food)
    
    }   
    eat () {
         const foodElement = 2
        console.log(foodElement +this.food -1)
        
        if (foodElement === 0){
           return false
        } else {
            true
        }
    }   
}



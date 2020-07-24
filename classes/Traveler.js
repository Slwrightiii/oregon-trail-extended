class Traveler {
    constructor (name, food = 1, isHealthy) {
        this.name = name
        this.food = food
        this.isHealthy = true
    }
    hunt () {
        const foodElement = 2
        this.food = this.food + foodElement
       console.log(this.food)
    
    }   
    eat () {
         const foodElement2 = -1

         this.food = this.food + foodElement2 
        console.log(this.food)
        
        if (this.food === 0){
           return false
        } else {
            true + "Traveler has enough food"
        }
    }   
}

class Doctor extends Traveler {

    constructor (name, food, isHealthy){

        super(name, food, isHealthy)
    }
    heal(traveler){
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {

    constructor (name, food = 2, isHealthy){

        super(name, food, isHealthy) 
        this.food = food
    }

    hunt(){
        const huntFoodElement = 5
        this.food = this.food + huntFoodElement
     console.log(this.food)   
    }

    eat(){
        const eatFoodElement = -2
        const hunt2FoodElement = 1
        this.food = this.food + eatFoodElement + hunt2FoodElement
        console.log(this.food)

        if (hunt >= 2){
            return  "Hunter has enough food"
        } else{
            hunt2FoodElement + "Hunter is no longer healthy"
        }
    }

    giveFood(traveler, numOfFoodUnits){

        if (hunt < 2){
            return "Hunter doesn't have enough food"
        }else{
            travelerFoodUnits= huntFoodElement - numOfFoodUnits
        }

    }



}

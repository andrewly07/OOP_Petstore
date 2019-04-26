//holds human, pet
class Store {
    constructor(newCustomer, num) {
        this.customer = new Human(newCustomer, num) // parameter?
        this.dog = new Pet('dog', 1800)
        this.panda = new Pet('panda',3000)
        this.KingSizebed = [this.dog, this.panda, this.pug];
    }
    
    sellPet(pet){
        for (var i=0; i<this.KingSizebed.length;i++){
            if(pet===this.KingSizebed[i].animal){
                if(this.KingSizebed[i].price<this.customer.budget){
                    console.log('you can buy me', this.customer.name);
                } else {
                    console.log( this.customer.name + ' can\'t afford ' + this.cage[i].animal);
                }
                console.log('there is this pet: ', pet );
            }
        }
        // console.log('this.dog :', this.dog, "pet: ", pet);
    }

    displayAnimals(){
        //display store's available animals
    }

    newCustomer(){

    }

    kickCustomerOut(){
        //kick poor ppl out of store
        //check customer's avaibble budget
    }

    vendorServices(){
        //get new pet from outside
        //catch wild free pets for more profit
    }


    

    


}
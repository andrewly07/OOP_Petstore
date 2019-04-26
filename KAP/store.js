//holds human, pet
class Store {
    constructor(customer) {
        this.customer = customer; // parameter?
        this.dog = new Pet('dog', 1800);
        this.panda = new Pet('panda',3000);
        this.pug = new Pet ('pug', 900);
        this.KingSizebed = [this.dog, this.panda, this.pug];
    }
    
    sellPet(pet){
        for (var i=0; i<this.KingSizebed.length;i++){
            if(pet===this.KingSizebed[i].animal){
                if(this.KingSizebed[i].price<this.customer.budget){
                    console.log(this.customer.name+' you can buy a '+this.KingSizebed[i].animal);
                } else {
                    if(this.customer.budget === 0) {
                        this.kickCustomerOut();
                    }
                    console.log( this.customer.name + ' can\'t afford ' + this.KingSizebed[i].animal);
                }
            }
        }
        // console.log('this.dog :', this.dog, "pet: ", pet);
    }

    displayAnimals(){
        //display store's available animals
        console.log('this :', this);
        var animal;
        var price;
        for (var i = 0; i<this.KingSizebed.length;i++){
            animal = this.KingSizebed[i].animal;
            price = this.KingSizebed[i].price;
            // condition = this.KingSizebed[i].condition;
            var tr = $('<tr>');
            var td_animal = $('<td>').text(animal);
            var td_price = $('<td>').text(price);
            // var td_condition = $('<td>').text(condition);
            tr.append(td_animal, td_price);
            $('.cage').append(tr);
        }
    }

    newCustomer(){

    }

    kickCustomerOut(){
        console.log('Get out! ')
        //kick poor ppl out of store
        //check customer's avaibble budget
    }

    vendorServices(){
        //get new pet from outside
        //catch wild free pets for more profit
    }


    

    


}
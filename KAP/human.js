
class Human{
    constructor(name, budget){
        this.name = name;
        this.budget = budget;
        this.addClickHandler = this.addClickHandler.bind(this);
    }
    // getName(){
    //     this.name = $('.name').val();
    //     this.budget = Math.floor(Math.random()*3000);
    //     $('.nameoutput').text(this.name);
    //     $('.money').text(this.budget);
    // }
    petsThePet(){
        //human interaction with pet
    }

    buyPet(){
        //will call Store object's sells function to communicate
    }

    addClickHandler(){
        $('.work').click(this.work);
        $('.submit').click(this.getName);
    }
    work() {
        this.budget+=10;
        console.log('this.budget after working hard:', this.budget);

    }
    roulette(){
        var randomNum = Math.floor(Math.random()*200);
        if(randomNum % 2 ===0) {
            this.budget+=randomNum;
            console.log('this.budget :', this.budget, 'randomNum', randomNum);
        } else {
            this.budget-=randomNum+50;
            console.log('this.budget :', this.budget, 'randomNum -', randomNum);
        }
    }
    feedingPet(){
        this.budget-=100;
        console.log('feeding pet :', this.budget );
    }
}
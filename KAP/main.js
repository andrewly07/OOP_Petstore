$(document).ready(startApp);

var store;
var customer;
var name;
var budget;
var noclickable = true;
function startApp(){
// var c1= new Store("andy", 3500)
    $('.submit').click(function(){
        // if(noclickable){
        name = $('.name').val();
        budget = Math.floor(Math.random()*3000);
        $('.nameoutput').val(name);
        $('.money').val(budget);
        // noclickable = false;
        // } else {
            // console.log('one time register');
            // }
        customer = new Human(name, budget);
        store= new Store(customer);
        console.log('customer, :', customer)
        console.log('store: ', store);
    });    
    // $('.roulette').click(customer.roulette);
    // $('.submit').click(customer.work)  
}

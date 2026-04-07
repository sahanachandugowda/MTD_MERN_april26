num=10
function f1(){
   for(var i = 1; i <= 10; i++){
       console.log(i);
   }
}
  function f2(){
     console.log(num);
}
f1()
f2()

const trainer={
    name:'sanvi',
    tech1(){
        //Es5 syntax to create a method
         console.log("AIML trainer");
        
    },
    tech2(){ //Es5 syntax to create a method
        console.log("c++ DS MERN trainer")
       
    }
};
function func(param){
    trainer.tech1();
    trainer['name']='sanvi gowda'
    trainer[param]();
}
func('tech2');



const first=[2,4,6];
const second=[3,5,7];
const allNumber1=first.concat(second)
console.log(allNumber1);


//OBJECT DESTRUCTION:
const address = {
    doorNumber: 125,
    city: 'Mysore',
    state: 'Karnataka'
};

const { city, doorNumber, pin, country } = address;

console.log(doorNumber);
console.log(city);
console.log(pin);
console.log(country);










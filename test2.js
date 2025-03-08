const numbersArray = [1,2,3,4,5,33,10,-11];

function getHighestNumber(numbers){
    return Math.max(...numbers);
}

console.log(getHighestNumber(numbersArray));


function Person(name,age,city)
{
    this.name = name;
    this.age=age;
    this.city=city;
}

const Sam = new Person("Sam",25,"New York");

Person.prototype.Details = function(){
    return `hi my name is ${this.name} i am ${this.age} years old and i live in ${this.city}`;
}

console.log(Sam.Details());


const doubledArr = numbersArray.map((num)=> num *2);

console.log(doubledArr);

const filteredArr = numbersArray.filter((num)=> num % 2 != 0);
console.log(filteredArr);

const summedArr = numbersArray.reduce((acc,curr)=> acc + curr);
console.log(summedArr);
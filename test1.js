console.log("hello world");

const name = "John";
console.log(name);

let age = 18;
console.log(age);

let isAdult = true;
console.log(isAdult);

const hobbies = ["reading","coding", "dancing"];
console.log(hobbies);

function Person(name,age,isAdult,hobbies){
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
    this.hobbies = hobbies;
}


const person1 = new Person("John",18,true,hobbies);
console.log(person1);


function add(a,b){
    return a+b;
}

console.log( Number.parseFloat (add(2,3.6)));


const up = (word)=>{
    return String(word).toUpperCase();
}

console.log(up("hello World"));

let num = 0;

if(num > 0){
    console.log("posiitive");
}
else if( num < 0){
    console.log("negative");
}
else{
    console.log("zero");
}


for(let i = 1; i <=10; i++){
    console.log(i);
}

let j= 1
while( j < 11)
{
    console.log(j);
    j++
}


const arr2 = [1,2,3,4,5];
for(let i in arr2){
    console.log(i);
}

arr2.forEach((element)=>console.log(element));
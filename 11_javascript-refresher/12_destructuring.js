const person = {
  name: "Ceejay", 
  age: 20 
}

const { name, age } = person;  
console.log(name); 
console.log(age);

const hobbies = ["Chess", "coding","Gym","Cycling"]
const [hobby1, hobby2, hobby3, hobby4] = hobbies
console.log(hobby1) 
console.log(hobby2)
console.log(hobby3)
console.log(hobby4)

function printName({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`)
}

printName(person)
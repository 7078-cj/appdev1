function greet(name){
    return console.log(`hello ${name}`)
}

const square = (num) =>{
    return console.log(`square: ${num**2}`)
} 

const calculator = (a,b) => {
    console.log(`sum: ${a+b}`)
    console.log(`product: ${a*b}`)
}

greet("cj")
square(2)
calculator(2,3)
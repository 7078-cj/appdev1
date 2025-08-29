const favFood = ["pizza","shawarma","kare-kare"]
favFood.push("pagkain")
console.log(favFood)
favFood.shift()
console.log(favFood)

for (let i = 0; i < favFood.length; i++){
    console.log(favFood[i])
}

favFood.map((food) => console.log(`i like ${food}`))
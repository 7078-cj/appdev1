const favFood = ["pizza","shawarma","kare-kare"]
favFood.push("pagkain")
console.log(favFood)
favFood.shift()
console.log(favFood)

for (let i = 0; i < favFood.length; i++){
    console.log(favFood[i])
}

const iLikedFoods = favFood.map((food) => `i like ${food}`)
console.log(iLikedFoods)
console.log(5 == "5")
console.log(5 === "5")

console.log(null == undefined);  // (they’re considered loosely equal)
console.log(null === undefined); // (different types)

let a
let b = null

console.log(a) // undefined
console.log(b) // null

console.log(typeof a) // "undefined"
console.log(typeof b)

const obj = {
  value: 42,

  regularFunc: function() {
    console.log("regularFunc this.value:", this.value)
  },

  arrowFunc: () => {
    console.log("arrowFunc this.value:", this.value)
  }
}

obj.regularFunc()
obj.arrowFunc()

let arr1 = [1, 2, 3]
let arr2 = arr1

arr2.push(4)

console.log("arr1:", arr1)
console.log("arr2:", arr2)
//Both change because they point to the same array.

let arr3 = [1, 2, 3]
let arr4 = [...arr3] // different kind of array

arr4.push(4)

console.log("arr3:", arr3) 
console.log("arr4:", arr4)

//Different arrays, so modifying arr4 does not affect arr3.


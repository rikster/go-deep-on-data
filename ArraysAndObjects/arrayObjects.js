//arrays are a numbered list
//objects are name:value pairs

let dog = {"name": "Woody", "type": "dog"}
let cat = {"name": "Bob", "type": "cat"}
console.log(dog)
console.log(cat)

let petNames = ["Woody", "Bob"];
console.log(petNames)

let pets = [dog, cat]
console.log(pets)

// add object literal
pets.push({"name":"Roxy", "type":"dog"})
console.log(pets)

// add a property
cat.age = 2
dog["age"] = 14

console.log(pets)

pets[0].age = 14
pets[2]["age"] = 6
console.log(pets)

pets[1].hungry = true
console.log(cat)
console.log(pets)


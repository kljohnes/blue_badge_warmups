// Day 1 Blue Badge

let foods = ["apple", "orange", "rice", "tofu"]
for(let i=foods.length - 1; i> -1; i--){
    if(i % 2 ==1){
    let word = foods[i]
    let titleCaseWord = titleCase(word)
    console.log(`Foods[${i}]:` + titleCaseWord)
    }
}

function titleCase(word){
    
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)
    return first_letter + rest
}

//let reverse = foods.reverse() // Don't do this because it changes the array for everyone


let foods = ["apple", "orange", "rice", "bread", "tofu"]

let allergies = ["gluten", "soy"]
for (let food of foods){
    
    // assigns a string based on the function returning true/false

    let longWordResult = foodLengthCheck(food) ? "" : "not "
    //formatting the output
    let response = `${food} is ${longWordResult}a long word, and ${foodAllergyCheck(food).toLowerCase()} it with your allergies.`
    console.log(response)
}

function foodLengthCheck(food){
    return food.length > 4
}

function foodAllergyCheck(food){
// Translates food to their underlying allergy
    allergyMap = {
        bread:"gluten",
        tofu:"soy"
    }
// Checks to see if food is in the allergyMap
    let allergyLookup = allergyMap[food]
// If it is and is one of their allergies
    if(allergies.includes(allergyLookup)) {
    return "You can't eat"
     } else { // Else
        return "You can eat"
    }
    
    
}


let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

// for (let card of cards){
//     if (typeof card == "string"){
//         faceCards.push(card)

//     } else {
//         numberedCards.push(card)
//     }
// }

while (cards.length > 0){
    let card = cards.pop()
    
    if (isFaceCard(card)){
        faceCards.push(card)

    } else {
        numberedCards.push(card)
    }
}
console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    switch(card){
        case "K":
        case "A":
        case "Q":
        case "J":
            return true
        default: return false
    }
}

let animals = [
    "bat", "tiger", "yak",
    "monkey", "snake", "lizard",
    "panda", "monkey", "hyena"

]

let zooTrip = {
    seen: [],
    animalsSeen: 0

}

animals.forEach((animal) => {
    console.log(`${animal} was seen today at the zoo`)
    if (!zooTrip.seen.includes(animal)) zooTrip.animalsSeen++
    else {console.log(animal, "is a repeat!")}
    seenAtTheZoo(animal)

})

console.log(zooTrip)

function seenAtTheZoo(animal){
    zooTrip.seen.push(animal)
}
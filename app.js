// Exercise 1

function generateEmail(username, domain) {
    return`${username}@${domain}`
}

// // Test the function
console.log('Exercise 1 Result:', generateEmail("sara", "company.com")) // sara@company.com
console.log('Exercise 1 Result:', generateEmail("ali", "example.com")) // ali@example.com
console.log('Exercise 1 Result:', generateEmail("fatima", "school.edu")) // fatima@school.edu

// // Exercise 2

function greetUser(name,timeOfDay) {
    return `Good ${timeOfDay}, ${name}`
}

// // Test your function
console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!

 // Exercise 3

 function calculateVAT(price, vatPercentage) {
    return price / vatPercentage
 }

// Test your function
console.log('Exercise 3 Result:', calculateVAT(50, 10)) // 5
console.log('Exercise 3 Result:', calculateVAT(100, 10)) // 10
console.log('Exercise 3 Result:', calculateVAT(200, 5)) // 10

// Exercise 4

function checkStock(quantity){
if (quantity > 0){
    return "In stock"
} else { 
    return "Out of stock"
}
}

// Test your function
console.log('Exercise 4 Result:', checkStock(10)) // In stock
console.log('Exercise 4 Result:', checkStock(0))  // Out of stock
console.log('Exercise 4 Result:', checkStock(1))  // In stock

// Exercise 5

function maxOfTwoNumbers(numA, numB) {
    if (numA >= numB) {
        return numA 
    } else {
        return numB
    }
}

// Test your function
console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9)) // 9
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4)) // 15
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7)) // 7

// Exercise 6

function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
        return true
    } else {
        return false
    }
}

// Test your function
console.log('Exercise 6 Result:', isCharAVowel("a")) // true
console.log('Exercise 6 Result:', isCharAVowel("e")) // true
console.log('Exercise 6 Result:', isCharAVowel("b")) // false
console.log('Exercise 6 Result:', isCharAVowel("y")) // false

// Exercise 7

function maxOfThree(numA, numB, numC) {
    if (numA >= numB && numA >= numC) {
        return numA 
    } else if (numB >= numA && numB >= numC) {
        return numB
    } else { 
        return numC
    }
}

// Test your function
console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) // 10
console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) // 20
console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) // 15
console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) // 8

// Exercise 8

function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature * 9 / 5) + 32
    } else if (scale === 'F') {
        return (temperature - 32) * 5 / 9 
    } 
}

// Test your function
console.log('Exercise 8 Result:', convertTemperature(0, "C")) // 32
console.log('Exercise 8 Result:', convertTemperature(32, "C")) // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")) // 0
console.log('Exercise 8 Result:', convertTemperature(212, "F")) // 100

// Exercise 9

function basicCalculator (numA, numB,Operation) {
   if (Operation === 'add') {
        return numA + numB
    } else if (Operation === 'subtract') {
        return numA - numB 
    } else if (Operation === 'multiply') {
        return numA * numB 
    } else if (Operation === 'divide') {
        return numA / numB 
    }
}

// Test your function
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) // 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) // 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) // 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) // 2


// Exercise 10: calculateGrade()

function calculateGrade(greade) {
    if ( greade >= 90){
        return ('A')
    } else if ( greade >= 80) {
        return ('B')
    } else if ( greade >= 70) {
        return ('C')
    } else if ( greade >= 60) {
        return ('D')
    } else {
        return ('F')
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));
console.log('Exercise 10 Result:', calculateGrade(40));
console.log('Exercise 10 Result:', calculateGrade(70));
console.log('Exercise 10 Result:', calculateGrade(90));
console.log('Exercise 10 Result:', calculateGrade(64));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

// function createUsername(firsrName, lastname,) {
//     
// }

// console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));




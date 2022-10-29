// PRIME NUMBERS CLASS WORK - Shows prime numbers with a range of numbers

function displayPrimeNums(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i) === false) continue;
        console.log(i); // displays the prime number for a true boolean 
    }
}

// the function is called to test if a particular number is a prime number
function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0)
            return false;
    }
    return true;
}

//displayPrimeNums(5);


// EXERCISE 1 SOLUTION

const address = {
    street: 'Danmole street',
    city: 'shomolu',
    zip: 10023
}

function showAddress(address) {
    for (let key in address) {
        console.log(`${key} : ${address[key]}`)
    }

}
showAddress(address);


// EXERCISE 2 SOLUTION

factory function to create an object
function createAddress(street, city, zip) {
    return {
        street: street,
        city: city,
        zip: zip
    }
}

// assigning the function to the variable addy
//const addy = createAddress('ola', 'bariga', 10023); 
//console.log(addy);// testing if it runs.

// constructor function to create an object

function CreateAddress(street, city, zip) {

    this.street = street;
    this.city = city;
    this.zip = zip;

}
// assigning the function to the variable Addy
//const newAddy = new CreateAddress('ola', 'bariga', 10023);
//console.log(newAddy); // testing if it runs.

// EXERCISE 3 SOLUTION

function CreateAddress(street, city, zip) {

    this.street = street;
    this.city = city;
    this.zip = zip;

}

// Using the constructor function to create 2 objects
const address1 = new CreateAddress('ola', 'bariga', 10023);
const address2 = new CreateAddress('ola', 'bariga', 10023);

/*
However using the equality operator, two equal objects would return false because 
the have different addresses in memory so it is important for us to be able to implememt 
code to check for equality based on properties or values of the object meaning
that to properly check for equality, we need to check if thier properties  are
equal
*/

function areEqual(a, b) {
    // arrays of property names
    var aProperties = Object.getOwnPropertyNames(a);
    var bProperties = Object.getOwnPropertyNames(b);

    // If their property lengths are different, they're different objects
    if (aProperties.length != bProperties.length) {
        return false;
    }

    for (let i = 0; i < aProperties.length; i++) {
        let propName = aProperties[i];

        //If the values of the property are different
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    //if all matches
    return true;
}

const result = areEqual(address1, address2);
console.log(result) //returns true because properties are equal


function areSame(obj1, obj2) {
    if (obj1 === obj2) console.log('true');
    else console.log('false');
};

areSame(address1, address2);
/*areSame() returns false because the address1 and address2 are not pointed at
the same exact object because they have different address in memory */

// EXERCISE 4 SOLUTION

const blogPost = {
    title: "Tech Valley",
    body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    author: "Akaehomen kingsley",
    views: 29,
    comments: {
        comment1: {
            author: "stutern",
            body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            isLive: "true"
        },
        comment2: {
            author: "tech hub",
            body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            isLive: "true"
        },
        comment3: {
            author: "glover",
            body: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            isLive: "false"
        }
    }
}

for(let key in blogPost.comments){
    console.log(blogPost.comments[key])
}

// EXERCISE 5 SOLUTION

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = 'true';

for(let key in programming){
    console.log(programming.languages)   
}

for(let key in programming){
    console.log(key) 
}

for(let key in programming){
    console.log(programming[key])  
}


// Question 1: Closures

// A closure is a function that captures the lexical environment in which it was declared. 
// This means that it has access to variables in the outer scope even after the outer function has finished executing. 
// Closures are commonly used in JavaScript to create private variables and functions.

// Example of a closure in JavaScript:
/* function outerFunction() {
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from the outer function
 */
// In this example, the innerFunction has access to the outerVariable even after the outerFunction has finished executing.

// Question 2: Pure Functions

// A pure function is a function that always produces the same output for the same input and has no side effects.
// This means that it does not modify any external state or variables, and its output depends only on its input parameters.

// Example of a pure function in JavaScript:
/* function add(a:  number, b: number): number {
    return a + b;
}

const result = add(2, 3); // Output: 5
console.log(result);

// Example of a impure function in JavaScript:
let total = 0;

function addToTotal(num: number): number {
    total += num;
    return total;
}

const updatedTotal = addToTotal(5); // Output: 5
console.log(updatedTotal); */

// Random number generator is also an example of impure function as it produces different output for the same input.

// Question 3: Function composition

// Function composition is the process of combining multiple functions to create a new function.
// This allows for the creation of complex behavior by chaining together simpler functions.

// Example of function composition in JavaScript:
/* function g(a: number, b: number): number {
    return a + b;
}
function f(num: number): number {
    return num * 2;
}

const composedFunction = (a: number, b: number) => f(g(a, b));

const composedFunctionResult = composedFunction(2, 3); // Output: 10
console.log(composedFunctionResult);
 */

// Question 4: Functional programming

// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
// It emphasizes the use of pure functions, immutability, and higher-order functions.

// Example of functional programming in JavaScript:
/* const numbers = [1, 2, 3, 4, 5];

// Using map to transform each element in the array
const squaredNumbers = numbers.map(num => num * num); // Output: [1, 4, 9, 16, 25]
console.log(squaredNumbers);

// Using filter to filter out even numbers

const evenNumbers = numbers.filter(num => num % 2 === 0); // Output: [2, 4]
console.log(evenNumbers);

// Using reduce to calculate the sum of all elements in the array
const sum = numbers.reduce((acc, num) => acc + num, 0); // Output: 15
console.log(sum); */

// Question 5: What is a promise in JavaScript?

// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.
// It allows for handling asynchronous operations in a more readable and manageable way, using methods like then() and catch().
// Promises can be in one of three states: pending, fulfilled, or rejected.

// pending: Initial state, neither fulfilled nor rejected.
// fulfilled: The operation completed successfully.
// rejected: The operation failed.

// Example of using a promise in JavaScript:
/* const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = 'Data fetched successfully';
        resolve(data);
    }, 2000);
});

fetchData.then(data => {
    console.log(data); // Output: Data fetched successfully
}).catch(error => {
    console.error(error);
}); */

// Question 6: What is TypeScript and how is it different from JavaScript?

// TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.
// It adds optional static typing, classes, interfaces, and other features to JavaScript, making it more robust and maintainable.
// TypeScript helps catch errors at compile time and provides better tooling and code completion in IDEs.

// What are web components?

// Web components are a set of web platform APIs that allow for the creation of reusable custom elements with encapsulated functionality.
// They consist of four main technologies: Custom Elements, Shadow DOM, HTML Templates, and HTML Imports.
// Web components enable developers to create modular, reusable components that can be used across different frameworks and libraries.

// Question 8: What are React hooks?

// React hooks are functions that allow functional components to use state and other React features without writing a class component.
// They were introduced in React 16.8 and provide a way to reuse stateful logic across components.
// Some commonly used hooks include useState, useEffect, useContext, and useReducer.

// Question 9: What is test driven development (TDD)?

// Test-driven development (TDD) is a software development approach where tests are written before the actual code.
// The process involves writing a failing test, writing the minimum amount of code to pass the test, and then refactoring the code.
// TDD helps ensure that the code meets the requirements and is easier to maintain and refactor.
// Pros of TDD include improved code quality, faster feedback loops, and better test coverage.
// Cons of TDD include increased development time and potential over-testing.

// Question 10: 

// Memory phase sets all the variables to undefined and then the variables are defined

// console.log('value of age is', age) // Output: value of age is undefined - no error because of hoisting

// eslint-disable-next-line no-var
// var age = 25;

// console.log('value of age is', age) // Output: value of age is 25

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

// myAge = 20 // cannot access age before initialization
// console.log('myAge is', myAge) 
// let myAge = 25
// console.log('myAge is', myAge) 

// Hoisting does not work with let and const as they are block-scoped and not hoisted to the top of the block. They are but in a temporal dead zone.

// Question 11:

/* myFun()

var myFun = function() {
    console.log('First')
}

myFun()

function myFun() {
    console.log('Second')
}

myFun() */

// Output:
// Second
// First
// First

// The reason is that function declarations are hoisted to the top of their containing scope, while variable declarations are hoisted but not their assignments.
// In the memory phase, first myFunc is set to undefined and then the function declaration is hoisted to the top of the scope.
// In the code phase it executes myFunc the function body and then is reassigned to the function expression. Function declaration in the code phase is ignored.
// So "Second" from the function declaration is printed first and then "First" from the function expression.

// Question 12:

/* var variable = 10

(() => {
    console.log(variable)

    variable = 20

    console.log(variable)
})()

console.log(variable)
var variable = 30 */

// Answer: 10, 20, 20
// iife means immediately invoked function expression. The variable is hoisted to the top of the scope and then the function is executed.

// Question 13:

/* foo = 1
console.log('FOO', foo) // Output: 1

var foo = 2

console.log('FOO', foo) // Output: 2 */

// Answer: 1, 2

// Question 14:

/* variable = 10

(() => {
    foo = 100
    console.log(variable)
    var foo = 100
    variable = 20
    console.log(variable)
})()

console.log(foo) // Not defined
console.log(variable)
var variable = 30
console.log(variable) */

// Answer: Error

// Question 15:

/* for (var index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index)
    }, 0)
    
} */

// Output: 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
// The reason is that the setTimeout callback function is executed after the loop has finished, and by that time the value of index is 10.
// if we change to let, the output will be 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// This is because let is block-scoped and creates a new variable for each iteration of the loop.
// The reason settimeout is executed after the loop is because it is asynchronous and is added to the event loop.

// Question 16:

/* var fullname = 'John Doe'

var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname
        }
    },  
    getFullname: function() {
        return this.fullname
    }

    getFullnameV2: () => this.fullname, // this refers to window object, works on the browser but not in node
    getFullnameV3: (function() {
        return this.fullname
    })()
}

console.log(obj.prop.getFullname()) // Output: Aurelio De Rosa
console.log(obj.getFullname()) // Output: Colin Ihrig
console.log(obj.prop.getFullname.call(obj)) // Output: Colin Ihrig
console.log(obj.prop.getFullname.call(obj.prop)) // Output: Aurelio De Rosa
console.log(fullname) // Output: John Doe 
console.log(obj.getFullnameV2()) // Output: John Doe
console.log(obj.getFullnameV3()) // Output: Error, need to remove () because it's immediately invoked 
*/

// Question 17:

/* const data = {
    name: 'John Doe',
    sayName: function() {
        console.log(this.name)
    }
}

const data2 = {
    name: 'Jane Doe',
    sayName: function() {
        console.log(this.name)
    }
}

console.log(data2.sayName.call(data)) // Output: John Doe
console.log(data.sayName.call(data2)) // Output: Jane Doe */

// Question 18:

/* const data = {
    name: 'John Doe',
    sayName: function() {
        console.log(this.name)
    }
}

setTimeout(data.sayName, 3000) // Output: undefined
// The reason is that setTimeout is a method of the window object and the context of this is the window object.
// To fix this, we can use bind method. 
// call will not work because it will immediately invoke the function. 
setTimeout(() => data.sayName(), 3000) // Output: John Doe 
// This also works because the closure function will capture the lexical scope of the data object.
*/

// Question 19:
/* const test = {
    height: 30
}

console.log(test.height) // Output: 30

delete test.height

console.log(test.height) // Output: undefined
 */

// Question 20:
/* const test = Object.create({
    height: 30
})

console.log(test.height) // Output: 30

delete test.height

console.log(test.height) // Output: 30
 */
// The reason is that the height property is inherited from the prototype object and is not directly on the test object.

// Question 21: Difference between map and forEach

// The map() method creates a new array with the results of calling a provided function on every element in the array.
// The forEach() method executes a provided function once for each array element.

// Example of map:

/* 

const numbersArray = [1, 2, 3, 4, 5];

const squaredNumbersArray = numbersArray.map(num => num * num); // Output: [1, 4, 9, 16, 25]

console.log(squaredNumbersArray); // Output: [1, 4, 9, 16, 25] new array is returned

// Example of forEach:

numbersArray.forEach(num => num * num); // Does not return a new array, it just iterates over the elements like a for loop
console.log(numbersArray); // Output: [1, 2, 3, 4, 5] original array is not modified
const test = numbersArray.forEach(num => num * num) // Output: undefined

// Map also allows for chaining of other array methods like filter, reduce, etc.
*/

// Question 22: Difference between null and undefined

// null represents an intentional absence of any object value, while undefined represents an uninitialized or missing value.
// null is a value that can be assigned to a variable to indicate that it has no value, while undefined is a type that indicates a variable has not been assigned a value.
// null is a primitive value, while undefined is a type.
// typeof null returns 'object', while typeof undefined returns 'undefined'.
// primitive values are immutable and are passed by value, while objects are mutable and are passed by reference.
// null is explicitly assigned by the programmer, while undefined is automatically assigned by JavaScript.

// Example:
/*
let nullValue = null;
let undefinedValue;

console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined

console.log(typeof nullValue); // Output: object
console.log(typeof undefinedValue); // Output: undefined

console.log(nullValue === undefinedValue); // Output: false

console.log(null == undefined); // Output: true

// This happens because of type coercion. When using ==, JavaScript converts null to undefined before comparing.
// With === strict equality operator, null and undefined are not equal.

*/

// Question 23: Difference between == and ===

// == is the equality operator that performs type coercion before comparing two values, while === is the strict equality operator that does not perform type coercion.
// == converts the operands to the same type before comparing, while === compares the operands without type conversion.
// == is more lenient and can lead to unexpected results, while === is more strict and recommended for most cases.
// == is known as the abstract equality comparison, while === is known as the strict equality comparison.

// Example:
/*
console.log(1 == '1'); // Output: true
console.log(1 === '1'); // Output: false
console.log(1 == true); // Output: true
console.log(1 === true); // Output: false
*/

// Question 24: What is event delegation?

// Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for multiple child elements.
// This allows for efficient event handling and reduces the number of event listeners needed in the application.
// Event delegation is useful for dynamically created elements and improves performance by reducing memory usage and event handling overhead.

// Example:
/*

const parentElement = document.getElementById('parent');

parentElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('child')) {
        console.log('Child element clicked');
    }
});

*/  

// In this example, the click event is handled by the parent element, and the event target is checked to see if it has a specific class.
// This allows for handling events for multiple child elements with a single event listener.
// Event delegation is commonly used in frameworks like React and jQuery to improve performance and simplify event handling.
// It is also useful for handling events on dynamically created elements.
// A real-world example of event delegation is handling click events on a list of items where each item has a click event.
// Instead of adding a click event listener to each item, a single event listener is added to the parent element to handle click events for all items.

// Question 25: Flatting an array

/* const testArray = [1, 2, [3, 4], [5, [6, 7]]];

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
} */

// const flattenedArray = flattenArray(testArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// Using flat method
/* const flattenedArray = testArray.flat(Infinity); // Infinity is used to flatten nested arrays of any depth
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7] */

// Question 26: Difference between var, let, and const

// var is function-scoped and hoisted to the top of the function, while let and const are block-scoped and not hoisted.
// var can be redeclared and reassigned, while let can be reassigned but not redeclared, and const cannot be reassigned or redeclared.
// var has global scope if declared outside a function, while let and const have block scope.
// const is used for variables that should not be reassigned, while let is used for variables that may be reassigned.
// const is recommended for most cases to prevent accidental reassignment and improve code readability.

// Example:
/*
var varVariable = 10;
let letVariable = 20;
const constVariable = 30;

var varVariable = 40; // No error
let letVariable = 50; // Error: Identifier 'letVariable' has already been declared
const constVariable = 60; // Error: Identifier 'constVariable' has already been declared

varVariable = 70; // No error
letVariable = 80; // No error
constVariable = 90; // Error: Assignment to constant variable
*/

// Question 27: Write custom flatten function

// const testArray = [1, 2, [3, 4], [5, [6, 7]]];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* const customFlatten = (arr: any[], dept: number) => {
    return arr.reduce((acc, val) => Array.isArray(val) && dept > 0 ? acc.concat(customFlatten(val, dept - 1)) : acc.concat(val), []);
}

const flattenedArray = customFlatten(testArray, 2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7] */

// Question 28: Settimeout output

/* function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

function b() {
    for (var i = 0; i < 3; i++) {
        let newI = i;
        setTimeout(() => {
            console.log(newI);
        }, 1000);
    }
}

a(); */
// Output: 3, 3, 3
// The reason is that the setTimeout callback function is executed after the loop has finished, and by that time the value of i is 3.
// To fix this, we can use let instead of var to create a new variable for each iteration of the loop.
// setTimeout is asynchronous and is added to the event loop.
// The closure function will capture the lexical scope of the i variable.
// Using let will create a new variable for each iteration of the loop.
// Using var will create a single variable that is shared across all iterations of the loop. 
// var is function-scoped and let is block-scoped. 

// Question 29: Explain call, apply, and bind

// call, apply, and bind are methods in JavaScript that are used to change the context of a function and pass arguments to the function.
// call and apply are used to invoke a function with a specific context, while bind is used to create a new function with a specific context.

// call: The call() method calls a function with a given this value and arguments provided individually.
// apply: The apply() method calls a function with a given this value and arguments provided as an array.
// bind: The bind() method creates a new function that, when called, has its this keyword set to the provided value.

// Example:
/*
const person = {
    name: 'John Doe',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const anotherPerson = {
    name: 'Jane Doe'
};

person.sayHello(); // Output: Hello, my name is John Doe
person.sayHello.call(anotherPerson); // Output: Hello, my name is Jane Doe

const sayHelloToJane = person.sayHello.bind(anotherPerson);
sayHelloToJane(); // Output: Hello, my name is Jane Doe
*/

// Apply is similar to call but takes arguments as an array

// Example:
/*
const person = {
    name: 'John Doe',
    sayHello: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

person.sayHello('Hi'); // Output: Hi, my name is John Doe
person.sayHello.call(person, 'Hello'); // Output: Hello, my name is John Doe
person.sayHello.apply(person, ['Hola']); // Output: Hola, my name is John Doe
*/

// Question 30: What is currying?

// Currying is a technique in functional programming where a function with multiple arguments is converted into a sequence of nested functions, each taking a single argument.
// This allows for partial application of the function, where some arguments are provided upfront and the rest are provided later.
// Currying helps create reusable and composable functions and improves code readability and maintainability.

// Example:
/*
function add(a: number) {
    return function(b: number) {
        return a + b;
    };
}

const addFive = add(5);
const result = addFive(3); // Output: 8
console.log(result);
*/

// Question 31: Composition Polyfill

/* function addFive(num: number): number {
    return num + 5;
}

function substractTwo(num: number): number {
    return num - 2;
}   

function multipleFour(num: number): number {
    return num * 4;
}

const compose = (functions: ((value: number) => number)[]) => (value: number) => functions.reduceRight((acc, fn) => fn(acc), value);
const composeFunction = compose([addFive, substractTwo, multipleFour]); // Output:43
console.log(composeFunction(10)); // This is called function composition, if it was reduceLeft, the order would be different, would be called pipe

 */

// Question 32: Implement Promise.all

/* const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
}); */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* 
const customPromiseAll = (promises: Promise<any>[]) => {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const results: any[] = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = result;
                completedPromises++; // Increment the counter for completed promises, it's important to keep track of the number of completed promises

                if (completedPromises === promises.length) { // Check if all promises have been completed
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

const allPromises = customPromiseAll([promise1, promise2]); */

// Question 33: React lifecycle methods

// React lifecycle methods are methods that are called at different stages of a component's lifecycle.
// They allow developers to perform actions like initializing state, fetching data, updating the UI, and cleaning up resources.
// Some commonly used lifecycle methods in React are:
// - componentDidMount: Called after the component has been rendered to the DOM. Used for fetching data and initializing state.
// - componentDidUpdate: Called after the component has been updated. Used for updating the UI in response to prop or state changes.
// - componentWillUnmount: Called before the component is removed from the DOM. Used for cleaning up resources like event listeners.
// - shouldComponentUpdate: Called before the component is updated. Used to control whether the component should re-render.
// - getDerivedStateFromProps: Called before the component is rendered. Used to update the state based on props changes.

// Example:
/*
class MyComponent extends React.Component {
    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated');
    }

    componentWillUnmount() {
        console.log('Component unmounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    render() {
        return <div>Hello, World!</div>;
    }
}
*/  

// Question 34: React functional components lifecycle methods

// React functional components do not have lifecycle methods like class components.
// However, React introduced hooks in version 16.8 that allow functional components to use state and other React features.
// Some commonly used hooks in functional components are:
// - useState: Used to add state to functional components.
// - useEffect: Used to perform side effects like fetching data and updating the UI.
// - useContext: Used to access context values in functional components.
// - useReducer: Used to manage complex state logic in functional components.
// - useMemo: Used to memoize expensive calculations in functional components.
// - useCallback: Used to memoize callback functions in functional components.
// - useRef: Used to access DOM elements and store mutable values in functional components.
// - useLayoutEffect: Similar to useEffect but runs synchronously after DOM mutations.

// Question 35: Algo 1
// setup(["cat", "car", "bar"])
// isInDict("cat") // true
// isInDict("bat") // false

/**
 * A class representing a dictionary of words.
 * 
 * This class uses a `Set` to store the words for efficient lookup.
 * 
 * @remarks
 * A `Set` is used instead of an array to ensure that each word is unique and to provide 
 * faster lookup times for checking if a word exists in the dictionary.
 * 
 * @example
 * ```typescript
 * const words = ['apple', 'banana', 'cherry'];
 * const myDict = new MyDictionary(words);
 * console.log(myDict.isInDict('banana')); // true
 * console.log(myDict.isInDict('grape')); // false
 * ```
 * 
 * @public
 */

/* class MyDictionary {
    dictionary: Set<string>;
    wildcard: string;

    constructor(words: string[], wildcard: string = "*") {
        this.dictionary = new Set(words);
        this.wildcard = wildcard;

    }

    matchWords(word: string): boolean {
        if(word.startsWith(this.wildcard)) {
            for(const dictWord of this.dictionary) {
                if(dictWord.endsWith(word.slice(1))) {
                    return true;
                }
            }
            return false;
        }

        if(word.endsWith(this.wildcard)) {
            for(const dictWord of this.dictionary) {
                if(dictWord.startsWith(word.slice(0, word.length - 1))) {
                    return true;
                }
            }
            return false;
        }

        return true
    }

    matchWords2(word: string): boolean {
        const regexTemplete = word.replace(this.wildcard, "."); // Replace wildcard with regex wildcard
        const regex = new RegExp(`^${regexTemplete}$`); // Create regex pattern to match the word exactly with the wildcard replaced by any character 
        // Check if any word in the dictionary matches the regex pattern
        // This regex pattern will match any word that has the same length as the input word and matches the pattern with the wildcard replaced by any character
        // example: word = "c.t", regex pattern = "^c.t$", will match "cat", "cot", "cut", etc.
        return regex.test(word);
    }

    isInDict(word: string): boolean {
        if(word.includes(this.wildcard)) {
            return this.matchWords(word);
        }
        return this.dictionary.has(word);
    }
}

class MyDictionary2 {
    dictionary: {[key: string]: boolean};   
    wildcard: string;

    constructor(words: string[], wildcard: string = "*") {
        this.wildcard = wildcard;
        const wordMap = words.reduce((acc: {[key: string]: boolean}, word) => {
            acc[word] = true;
            words.forEach((_dictWord, i) => {
                const start = word.slice(0, i)
                const end = word.slice(i + 1)

                const partialWord = `${start}${this.wildcard}${end}`;
                acc[partialWord] = true;
            } );
            return acc;
        }, {});

        this.dictionary = wordMap;
    }

    isInDict(word: string): boolean {
        return !!this.dictionary[word];
    }
}

const myDict = new MyDictionary2(["cat", "car", "bar"]);
console.log(myDict.isInDict("cat")); // Output: true
console.log(myDict.isInDict("bat")); // Output: false
console.log(myDict.isInDict("c*t")); // Output: true
console.log(myDict.isInDict("ca*")); // Output: true
console.log(myDict.isInDict("b*t")); // Output: false */

// Question 36: Write a function that returns the reverse of a string

/* function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

function reverseString2(input: string): string {
    let reversedString = '';
    for(let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

function reverseString3(input: string): string {
    return input.split('').reduce((acc, char) => char + acc, '');
} */

// Question 37 : Write a function that returns the longest word in a sentence

/* function longestString(sentence: string): string {
    const words = sentence.split(' ');
    return words.reduce((longestWord, currentWord) => currentWord.length > longestWord.length ? currentWord : longestWord, '');
}

console.log(longestString('The quick brown fox jumps over the lazy dog')); // Output: 'quick'
 */

// Question 38: Write a function that checks if a word is a palindrome

/* const isPalindrome = (word: string): boolean => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
} */

// Question 39: Write a function that removes duplicates from an array

/* function removeDuplicates(arr: any[]): any[] {
    return [...new Set(arr)]; // Array.from(new Set(arr))
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] */

// Question 40: Check if two strings are anagrams

/* function isAnagram(str1: string, str2: string): boolean {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false */

// Question 41: Write a function that returns the number of vowels in a string

/* function countVowels(str: string): number {
    const vowels = 'aeiou';
    return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
} */

// Question 42: Write a function that returns largest number in an array

/* function largestNumber(arr: number[]): number {
    return Math.max(...arr);
}

function largestNumber2(arr: number[]): number {
    return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

function largestNumber3(arr: number[]): number {
    let max = arr[0];
    for(const num of arr) {
        if(num > max) {
            max = num;
        }
    }
    return max;
} */

// Question 43: Write a function that checks if number is prime

/* function isPrime(num: number): boolean {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
} */    

// example of isPrime
// console.log(isPrime(2)); // Output: true
// console.log(isPrime(4)); // Output: false
// console.log(isPrime(11)); // Output: true
// console.log(isPrime(15)); // Output: false
// console.log(isPrime(3)); // Output: true

// Question 44: Write a function that returns the factorial of a number

/* function factorial(num: number): number {
    if(num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

function factorial2(num: number): number {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function factorial3(num: number): number {
    return Array.from({length: num}, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
} */

// Write a function that returns the nth Fibonacci number

/* function fibonacci(n: number): number {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Question 46: Write a function that removes all the white spaces from a string

*/
/* 
const removeWhiteSpace = (str: string): string => str.replace(/\s/g, ''); 
const removeWhiteSpace2 = (str: string): string => str.split(' ').join(''); */

// Question 47: What is webpack?

// Webpack is a module bundler for JavaScript applications that processes and bundles assets like JavaScript, CSS, and images.
// It allows developers to define dependencies between modules and generate a single bundle that can be loaded by the browser.
// Webpack uses a configuration file to define entry points, output paths, loaders, and plugins for processing different types of assets.
// Webpack is commonly used in modern web development to optimize and bundle assets for production deployment.
// It supports features like code splitting, hot module replacement, and tree shaking to improve performance and reduce bundle size.
// Tree shaking is a technique used to eliminate dead code from the final bundle by removing unused modules and functions.
// Webpack is often used in conjunction with other tools like Babel, ESLint, and PostCSS to provide a complete build pipeline for web applications.
// Webpack is highly configurable and can be customized to fit the specific needs of a project.

// You can do tree shaking with webpack by setting mode to production and using ES6 modules.
// Webpack will automatically remove unused code during the build process.
// You can also use tools like babel to transpile code to ES6 modules and enable tree shaking.
// Webpack also supports plugins like UglifyJSPlugin and TerserPlugin to minify and optimize the final bundle.
// Webpment.ack is commonly used in modern web development to bundle and optimize assets for production deployment.
// Webpack can not tree shake code that is not written in ES6 modules. Meaning that if you are using CommonJS or AMD modules, webpack will not be able to tree shake the code.
// common js modules are not tree shakeable because they are not statically analyzable.
// Meaning that the dependencies are not known until runtime.


// Question 48: What is Babel?

// Babel is a JavaScript compiler that transforms modern JavaScript code into backward-compatible versions that can run in older browsers.
// It allows developers to use the latest JavaScript features like arrow functions, template literals, and destructuring in their code.

// Question 49: What is a dependecy graph in webpack?

// A dependency graph is a representation of the relationships between modules in a JavaScript application.
// Webpack uses a dependency graph to determine the dependencies between modules and generate a bundle that includes all the required modules.
// The dependency graph is created based on the import and export statements in the code, which define the relationships between modules.
// Webpack analyzes the code to build a dependency graph and resolve the dependencies between modules.
// The dependency graph helps webpack optimize the build process by only including the necessary modules in the final bundle.

// Question 50: What is css and js?

// CSS (Cascading Style Sheets) is a style sheet language used to define the visual presentation of a web page.
// It is used to style HTML elements and control the layout, colors, fonts, and other visual aspects of a website.
// CSS can be applied to HTML elements using inline styles, internal styles, or external stylesheets.
// In js (JavaScript) is a programming language used to create interactive and dynamic web pages.
// We can dinamically change the content of the page, add interactivity, validate forms, and much more.
// We can change css in js by using the style property of an element or by adding/removing classes.
// Example of changing css in js:

/* const element = document.getElementById('myElement');
element.style.color = 'red';
element.style.fontSize = '20px';
element.classList.add('highlight'); */

// A disadvantage of changing css in js is that it can lead to a mix of concerns and make the code harder to maintain. 
// It is recommended to separate the concerns by using css for styling and js for functionality.
// Caching css in js can also lead to performance issues, as the browser needs to re-render the page when the css changes.

// Question 51: Algo question

// const questions = [{id: 1, category: "html"}, {id: 2, category: "html"}, {id: 3, category: "css"}, {id: 4, category: "css"}]

/* const mapQuestionsByCategory = (questions) => {
    return questions.reduce((acc, question) => {
        if(!acc[question.category]) {
            acc[question.category] = [];
        }
        acc[question.category].push(question);
        return acc;
    }, {});
}

console.log(mapQuestionsByCategory(questions)); // Output: {html: [{id: 1, category: "html"}, {id: 2, category: "html"}], css: [{id: 3, category: "css"}, {id: 4, category: "css"}]} */

// Question 52: Write a function which stores inside a secret word which cannot be changed or accessed from outside

/* function secretWord() {
    const secret = 'password';
    return {
        getSecret: () => secret
    }
}

const secret = secretWord();
console.log(secret.getSecret()); // Output: 'password'
 */

// Question 53: How can I clone an object in JavaScript?

// You can clone an object in JavaScript using the spread operator, Object.assign(), or JSON.parse() and JSON.stringify().
// The spread operator (...) creates a shallow copy of an object by copying its own enumerable properties.
// Object.assign() copies the enumerable own properties of one or more source objects to a target object.
// JSON.parse() and JSON.stringify() can be used to create a deep copy of an object by serializing and deserializing it.

// Example:
/*
const obj = {name: 'John', age: 30, address: {city: 'New York'}};
const clone1 = {...obj};

const clone2 = Object.assign({}, obj);

const clone3 = JSON.parse(JSON.stringify(obj));

console.log(clone1); // Output: {name: 'John', age: 30}
console.log(clone2); // Output: {name: 'John', age: 30}
console.log(clone3); // Output: {name: 'John', age: 30}

console.log(obj === clone1); // Output: false
console.log(obj === clone2); // Output: false
console.log(obj === clone3); // Output: false

console.log(obj.address === clone1.address); // Output: true, because it's a shallow copy
console.log(obj.address === clone2.address); // Output: true, because it's a shallow copy
console.log(obj.address === clone3.address); // Output: false, because it's a deep copy

clone1.name = 'Jane';
console.log(obj.name); // Output: 'John', because it's a shallow copy
clone1.address.city = 'San Francisco';
console.log(obj.address.city); // Output: 'San Francisco', because it's a shallow copy
clone2.name = 'Jane';
console.log(obj.name); // Output: 'John', because it's a shallow copy
clone2.address.city = 'Other stuff';
console.log(obj.address.city); // Output: 'Other stuff', because it's a shallow copy
clone3.address.city = 'Los Angeles';
console.log(obj.address.city); // Output: 'San Francisco', because it's a deep copy
*/

// Shallow copy means that only the top-level properties of the object are copied, while the nested properties are still references to the original object.
// Deep copy means that all properties of the object, including nested properties, are copied to create a new object with no references to the original object.

/* let obj = {name: 'John', age: 30, address: {city: 'New York'}};
let foo = obj; // foo is a reference to obj. If you change foo, obj will also change.

 */

/* function countVowls = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(const char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function countVowls2 = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

function countVowls3 = (str) => {
    return (str.match(/[aeiou]/gi) || []).length;
}

function countVowls4 = (str) => {
    return str.replace(/[^aeiou]/gi, '').length;
}

function countVowls5 = (str) => {
    return str.split('').reduce((count, char) => 'aeiou'.includes(char.toLowerCase()) ? count + 1 : count, 0);
} */

// Question 55: Reverse each word in a sentence

/* function custonReverseWords(sentence: string): string {
    return sentence.split(' ').reverse().join(' ');
}

console.log(custonReverseWords('The quick brown fox')); // Output: 'fox brown quick The'

function custonReverseWords2(sentence: string): string {
    return sentence.split(' ').reduceRight((acc, word) => acc + " " + word, '').trim();
}

console.log(custonReverseWords2('The quick brown fox')); // Output: 'fox brown quick The' */

/* function findMostCommonWord(words: string[]): string {
    const wordDict = words.reduce((acc: { [key: string]: number }, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
        return acc
    }, {})

    let mostCommonWordLength = 0
    let mostCommonWord = ''
    
    for(const [word, value] of Object.entries(wordDict) as [string, number][]){
        if(value > mostCommonWordLength) {
            mostCommonWord = word
            mostCommonWordLength = value
        }
    }

    return mostCommonWord
} */

/* 
function findMostCommonWord2(words: string[]): string {
    const wordDict = words.reduce((acc: { [key: string]: number }, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
        return acc
    }, {})

    const entries = Object.entries(wordDict) as [string, number][]
    return entries.reduce((mostCommonWord, [word, value]) => value > mostCommonWord[1] ? [word, value] : mostCommonWord, ['', 0])[0]
}

console.log(findMostCommonWord(['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'])); // Output: 'apple' */

// Question 57: Sort an array of numbers in ascending order

/* function sortNumbers(arr: number[]): number[] {
    return arr.sort((a, b) => a - b); // Ascending order because a - b is negative
}
*/

// Question 58: What's the output?

/* let obj1 = {a: 1, b: {c: 2}}
let obj2 = {...obj1}
let obj3 = JSON.parse(JSON.stringify(obj1))

console.log(obj1 === obj2) // Output: false, because obj2 is a shallow copy of obj1, so they are not the same object
console.log(obj1 === obj3) // Output: false, because obj3 is a deep copy of obj1, so they are not the same object
console.log(obj1.b === obj2.b) // Output: true, because obj2 is a shallow copy, so the nested object is the same reference
 */

// Question 59: What's the output to fill an array?

/* const arr = new Array(5).fill(0);
const arr2 = Array.from({length: 5}, () => 0);
console.log(arr); // Output: [0, 0, 0, 0, 0]
console.log(arr2); // Output: [0, 0, 0, 0, 0]
 */

// Question 60: Check if array has duplicates

/* function hasDuplicates(arr: any[]): boolean {
    return new Set(arr).size !== arr.length;
}

// Check which elements are duplicated
function findDuplicates(arr: any[]): any[] {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
*/

// Question 61: Replace values

/* let a = 5
let b = 10
let temp = a
a = b
b = temp

console.log(a, b) // Output: 10, 5

let x = 5
let y = 10
[x, y] = [y, x]
console.log(x, y) // Output: 10, 5

let m = 5
let n = 10
n = m
m = n
console.log(m, n) // Output: 5, 5
 */
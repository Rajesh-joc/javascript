const name = "rajesh"
const age = 23

//concatitation
console.log(name + age + "value");

// new method for concatitation
console.log(`hello my name is ${name} and my age is ${age}`);

// one more method for declare string

const gameName =  new String('fjafjisd-jfidasjfi')
console.log(gameName[0]);       // string behave like a array
console.log(gameName.__proto__);     // to see the object
// always it is not neccessary to use prototype as above we can access by using dot in below there are some example
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // we are seeing at position 2 here is which character
console.log(gameName.indexOf('t'));
// substring
const newString =  gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8 ,4) // in this method we start from negative

 // trim and replace method
 const newStringOne = "  hitesh  "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "http://joshi.com/joshi%njnfjjknj"

 console.log(url.replace('joshi' , 'Rajesh'))
 console.log(url.includes('sundar'));

 console.log(gameName.split('-'));
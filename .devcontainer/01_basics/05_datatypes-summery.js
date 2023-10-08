// # Primitive data type 

// 7 types : String , Number , Boolean , null,undefined ,Symbol ,BigInt

// Reference type (non primitive type)
// array , Objects  , Functions 

// symbol
const id  = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


// BigInt
const bigNumber = 34222222222224n

// arrays
const heros = ["shaktiman" ,"nagraj" , "doga"]

// objects
let myObj =
{
    name:"rjaesh",
    age:22,
}

// function 
    const myfunction =function(){
        console.log("hello world");
    }


    // how to find the data type of any
    // by using type 
    console.log(typeof bigNumber);
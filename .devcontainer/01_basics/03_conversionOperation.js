let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// when we convert some numbers into other form than there will be some results
/*
 
"33" => 33
"33and" => NaN
true => 1
false => 0
*/

//***********OPERATIONS******************** **********/

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);





let str1 ="hello"
let str2 = "rajesh "
let str3 = str1 + str2
console.log(str3);

//********tricky conversion when we use string first whole line behave like string  see the outputs for easy to understand*/
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log( 2+ 5+ "1" ); //check the outputs to see different behaviour 

console.log(true);
console.log(+true); // true+ not possible 



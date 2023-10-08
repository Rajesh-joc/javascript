console.log(2 > 1)
console.log("2" > 1);


// Important point 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// IMPORTANT POINT 
// the reason is that equality check == and comparision > < >= <= work differently.
// comparisons convert null to a number , treating it as 0. that's why (3) null >= 0 output shows true and null > 0 shows false


console.log(undefined == 0); // all three shows false
console.log(undefined > 0);
console.log(undefined >= 0);

// strick check 
console.log("2" === 2);
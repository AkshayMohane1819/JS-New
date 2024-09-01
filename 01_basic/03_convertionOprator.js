let score = 33

console.log(typeof score)
console.log(typeof(score));        // this 3 or 4 makes same result

/*let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);*/

let marks = "33abc"
console.log(typeof marks);

 
let ValueInNumber = Number(marks)
console.log(typeof ValueInNumber);

// when we use null its marks vlue so value comes 0 so its not fair value null =>0
// when we use true so its value is 1 or false value is 0 true=>1,false =>0
// undefined value comes with NaN unde.=>NaN
// string value comes NaN  "33abc"=> NaN
// So whenever we want to convertion value first check its numeric value 


let isLoggedIn = 1 

let BooleanIsLoggedIn= Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// if we want to use string value as blank so the result is false
// and if we use any string value like akshay so the result is true




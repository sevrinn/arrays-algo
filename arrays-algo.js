/**
 * I was able to get these answers on my own without too much trouble.
 * Outcomes were consistent with what was expected.
 * 
 *  */ 


/*
*   Print Values and Sum

    1. Print each array value and the sum so far
    2. Expected outcome should be:
        Num 6, Sum 6
        Num 3, Sum 9
        Num 5, Sum 14
        Num 1, Sum 15
        Num 2, Sum 17
        Num 4, Sum 21

*/

var testArr = [6,3,5,1,2,4]; //sets testArr to this array
var sum = 0; //sets sum to 0
for (var i = 0; i < testArr.length; i++) { //if i is less than length of testArr
    var num = testArr[i]; //sets num as value of testArr at i (resets every iteration because its declared inside the loop)
    console.log("num " + num); //prints num to console
    sum += num; //adds num to sum
    console.log("sum " + sum); //prints sum to console
        //i increments by 1
}

/*
*   Print Value * Position

    1. Multiply each value in array by its array position
    
    2. Expected outcome should be:
        [0,3,10,3,8,20]

*/
var testArr = [6,3,5,1,2,4]; //sets testArr to this array
for (var i = 0; i < testArr.length; i++) { //if i is less than length of testArr
    testArr[i] = testArr[i] * i; //set the value of testArr at i to the product of itself and its index
        //increment i by 1
}
console.log(testArr); //print testArr to console

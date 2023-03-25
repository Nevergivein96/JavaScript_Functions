console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 0; i <= Math.abs(count); i++){
        if(i % 2 != 0){
            console.log(i * Math.sign(count));
        }
    }
}
printOdds(10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){    
    if(age >= 16 && userName != undefined){
        console.log(`congrats ${userName} you can drive.`);
    }
    else if(age < 16 && userName != undefined){
        console.log(`sorry ${userName} you need to wait until you are 16.`)
    }
    else{
        console.log(`please enter your name and age.`)
    }
}
checkAge("Spencer",26);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function CartesianPlane(x, y){
    if(x == 0 && y == 0){
        console.log(`The point (${x},${y}) is on both axis`)
    }
    else if(x == 0 && y != 0){
        console.log(`The point ${x},${y} is on the x axis`)
    }
    else if(x != 0 && y == 0){
        console.log(`The point ${x},${y} is on the y axis`)
    }
    else if(x > 0 && y > 0){
        console.log(`The point ${x},${y} is in the 1st quadrant`)
    }
    else if(x > 0 && y < 0){
        console.log(`The point ${x},${y} is in the 2nd quadrant`)
    }
    else if(x < 0 && y < 0){
        console.log(`The point ${x},${y} is in the 3rd quadrant`)
    }else if(x < 0 && y > 0){
        console.log(`The point ${x},${y} is in the 4th quadrant`)
    }
}
// CartesianPlane(-4,-4);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function TypeOfTriangle(a, b, c){
    if(a + b <= c || b + c <= a || c + a <= b){
        return `this is not a valid triangle`;
    }
    else if(a == b && b == c){
        return `this is a equilateral triangle`;
    }
    else if(a == b != c || b == c != a || c == b != a){
        return `this is a isosceles triangle`;
    }
    else{
        return `this is a scalene triangel`;
    }
}
console.log(TypeOfTriangle(2, 2, 2))
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function DataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusOfData;
    let requriedDataUsageToStayUnder =remainingData/remainingDays;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`average projected use: ${usage/day} GB/day`);
    if(currentAvg > projectedAvg){
        statusOfData = "Exceeding"
    }
    else if(currentAvg < projectedAvg){
        statusOfData = "Below"
    }
    else{
        statusOfData = "At"
    }
    console.log(`You are ${statusOfData} your projected average daily use (${projectedAvg} GB/day),
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} of your data limit of ${planLimit}`)
   console.log(`to stay below your data limit use no more then ${requriedDataUsageToStayUnder}`)
}
DataUsageFeedback(100, 15, 50)
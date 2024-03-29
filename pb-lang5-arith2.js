//Math Problems
//
////Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many people purchased a ticket? 
const ticketsSold = 6450;
const price = 15;
const numberPeople = ticketsSold / price;
console.log( `Q1: ${numberPeople} bought tickets`);
//
////Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500; 
const yearlySalary = 500 * 52;
console.log(`Q2: Sylvia earns $${yearlySalary} per year`);
//
////Q3. Calculate the percentage of 17/30. Expected output: number%
const calcPercent = (17 * 100) / 30;
console.log(`Q3: ${calcPercent}%`);
//
////Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sqSideLength = 4.75; 
const sqPerimeter = sqSideLength + sqSideLength + sqSideLength + sqSideLength;
console.log(`Q4: Perimeter of square = ${sqPerimeter}cm`);
//
////Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triPerimeter = 5 + 6 + 7;
console.log(`Q5: Perimeter of triange = ${triPerimeter}cm`);
//
////Q6. Calculate the area of a square. Each side is 5cm.
const sqArea = 5 * 5;
console.log(`Q6: Area of square = ${sqArea}cm²`);
//
////Q7. Calculate the area of a right-angled triangle. Assume the length of the sides are 3cm, 4cm, 5cm.
//// a right-angled triangle is half of a rectangle shaped by the "legs" of the trigangle (gr. catheti) 
const cathetus1 = 3;
const cathetus2 = 4;
const hypothenuse = 5; // just for completeness, not needed for the formula
const rectangleArea = cathetus1 * cathetus2;
const areaTriangle = rectangleArea / 2;
console.log(`Q7: Area of triangle = ${areaTriangle}cm²`);
//
////Q8. Calculate the volume of a cube. Length of each side is 9cm.
const cubeSideLength = 9;
const cubeVol = cubeSideLength * cubeSideLength * cubeSideLength;
console.log(`Q8: Volume of cube = ${cubeVol}cm³`);
//
////Q9. Calculate the three bills including tips:
////€22.35 + 10% tip
////€26.67 + 15% tip
////€35.92 + 20% tip
const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92 + (35.92 * 0.2);
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
`Q9: Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`);
//
////Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
////What is Noemy's average hour?
const averageHours = (8 + 6 + 5 + 9 + 8 + 2+ 1 + 8.5 + 7 + 4) /10;
console.log(`Q10: Noemy's average hours: ${averageHours}`);
//
////Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
	//// Expected output: Score in the sixth test: --.
const firstFiveResults = 75 + 70 + 85 + 90 + 100; 
const totalResult = 85 * 6;
const sixthResult = totalResult - firstFiveResults;
console.log(`Q11: Score in the sixth test: ${sixthResult}`);
	//
	////Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
////Expected output: James needs a minimum of --% to get an 80% average.
	const averageOfEightTests = 78 * 8; 
	const averageNeeded = 80 * 9;
	const minResult = averageNeeded - averageOfEightTests;
	console.log(`Q12: James needs a minimum of ${minResult}% to get an 80% average`);

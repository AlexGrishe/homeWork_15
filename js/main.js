var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: "First Name",
    last: "Last Name"
};
console.log(myNum, myStr, myBool, myArr, myObj);

var decimal2 = myNum.toFixed(2);
console.log(decimal2);

var i = 10;
i = ++i;
console.log(i);
i = ++i;
console.log(i);
i = --i;
console.log(i);
i = i++;
console.log(i);
i = i++;
console.log(i);
i = --i;
console.log(i);
i = --i;
console.log(i);
i = --i;
console.log(i);
i = --i;
console.log(i);
i = --i;
console.log(i);
i = i--;
console.log(i);

var myTest = 20;
myTest = myTest += myNum;
console.log(myTest)
myTest -= (myNum /= 2);
console.log(myTest);
myTest -= 2;
console.log(myTest);
myTest /= (myNum *= 2);
console.log(myTest);
myTest *= (myNum *= 2);
console.log(myTest);
myTest += (myNum %= 2);
console.log(myTest);

console.log(myNum);

myNum += 10;
console.log(myNum);

var myPi = Math.PI;
console.log(myPi);

var myRound = 89.279;
myRound = Math.round(myRound);
console.log(myRound);

var myRandom = Math.random(10) * 10;
console.log(myRandom.toPrecision(1));

var myPow = Math.pow(3, 5);
console.log(myPow);

var strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: 30
};
console.log(strObj.str.length);

isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

strReplace = strObj.str.replace(new RegExp("Мама мыла раму, рама мыла маму", 'g'), 'Мама моет раму, Рама держит маму');
console.log(strReplace);

console.log(strReplace.toUpperCase());
console.log(strObj.str.toLowerCase());
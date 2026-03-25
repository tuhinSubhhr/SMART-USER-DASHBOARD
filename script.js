//let obj = {
//item : "HEADPHONE",
//price : 10,
//rating : 4.2,
//};
//let output =`the cost of ${obj.item} is ${obj.price} rupees and ratings is ${obj.rating}`;
//console.log(output);

//let str = "tuhin"; 
//str = str.toUpperCase();
//console.log(str);

//let str ="9749235038"; 97923038
//console.log(str.slice(4,5));



//let str1 = "Tuhin";
//let str2 = "Subhra";
//let res = str1.concat(str2);
//console.log(res);

//let str = "hello"; help
//console.log(str.replace("lo","p"));

//let str = "IloveJS"; 
//console.log(str.charAt(0));

//let fullName = prompt("enter your full name without space");
//let userName = "@" + fullName + fullName.length;
//console.log(userName); @tuhinsubhrahiri[12]

//let heroes = ["ironman","thor","spiderman","batman","superman"];
//for(idx = 0;idx<heroes.length;idx++){
//console.log(heroes[idx]); ir
//}

//let cities = ["kolkata","mumbai","delhi","up","bangalore"];
//for(let el of cities){
//console.log(el.toUpperCase());
//}

//let marks = [85,97,44,37,76,60];
//let sum = 0;
//for (let val of marks){
//sum += val;
//}
//let avg = sum/marks.length;
//console.log(`avg marks of the class = ${avg}`);


//let items = [250,645,300,900,50];
//for(i = 0;i<items.length;i++){
//let offer = items[i]/10;
//items[i] -= offer;
//}
//console.log(items);

//let foodItems = ["potato","tomato","apple","litchi"];
//console.log(foodItems);
//console.log(foodItems.toString());


//let marvelHeroes = ["spiderman","thor","ironman"];
//let dcHeroes = ["superman","batman"];
//let heroes = marvelHeroes.concat(dcHeroes);
//console.log(heroes);

//let marvelHeroes = ["spiderman","thor","halk","ironman","antman"];
//console.log(marvelHeroes);
//console.log(marvelHeroes.slice(1,4));

//let arr = [1,2,3,4,5,6,7];
//arr.splice(4,0,69);
//console.log(arr);

//let companies = ["boomberg","microsoft","uber","google","ibm","netflix"];
//let val = companies.shift();
//console.log("deleted=",val);
//companies.splice(5,1,"amazon");
//console.log(companies);


//function myFunction (){

//console.log("welcome to gangasagar!");
//console.log("we are learning js :)");
//}
//myFunction();


//function myFunction(msg){
//console.log(msg);
//}
//myFunction("I LOVE VIRAT KOHLI");


//function sum(x,y){
//console.log(x+y);
//}

//function sum(x,y){
//s = x+y;
//return s;
//}
//let val = sum(3,4);
//console.log(val);


//const arrowMul = (a,b) =>{
//console.log(a*b);
//};

//let arr = ["pune","delhi","mumbai"];
//arr.forEach ((val,idx,arr) => {
//console.log(val.toUpperCase(),idx,arr);
//});


//let nums = [2,3,4,5,6,69];
//nums.forEach((num) =>{
//console.log(num*num);
//});


//let nums = [67,52,39];
//let newArr = nums.map((val) => {
//return val*val;
//});
//console.log(newArr);

//let arr = [1,2,3,4,5,6,7,8];
//let evenArr = arr.filter((val) => {
//return val %2 === 0;
//});
//console.log(evenArr);


//let arr = [1,2,3,4];
//const output = arr.reduce((res,curr) =>{
//return res + curr;
//});
//console.log(output);

//let arr = [5,6,2,1,99];
//const output = arr.reduce((prev,curr) =>{
//return prev > curr ? prev : curr;
//});
//console.log(output);



//let marks = [97,64,32,49,99,96,86];
//let toppers = marks.filter((val) => {
//return val > 90;
//})
//console.log(toppers);


let n = prompt("enter a new number :");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);
let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log("sum=", sum);
let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factorial=", factorial);

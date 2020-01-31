let str = "я учу javascript!";
/*Дана строка 'я учу javascript!'. Найдите количество
символов в этой строке.
*/
numOfSymbols = str.length;
/*Дана строка 'я учу javascript!. Вырежите из нее
слово 'учу и слово 'javascript' тремя разными
способами (через substr, substring, slice).
*/
console.log(str.slice(2,5));
console.log(str.substring(2,5));
console.log(str.substr(2,3));

console.log(str.slice(6,16));
console.log(str.substring(6,16));
console.log(str.substr(6,10));

//Найдите позицию подстроки 'учу'.
let index = str.indexOf('учу');

/*Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее
слово 'bbb' тремя разными способами
(через substr, substring, slice).
*/
let str = "aaa bbb ccc";
console.log(str.slice(4,7));
console.log(str.substring(4,7));
console.log(str.substr(4,3));

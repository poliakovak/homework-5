/*Задача. В переменной date лежит дата в
формате '2025-12-31'. Преобразуйте эту дату в
формат '31/12/2025'.
*/
let date = "2025-12-31";
date = date.replace(/-/g, '.').split('.').reverse().join('/');
//Дана строка 'js'. Сделайте из нее строку 'JS'.
let str1 = 'js';
str1 = str1.toUpperCase();
//Дана строка 'JS'. Сделайте из нее строку 'js'.
let str2 = "JS";
str2 = str2.toLowerCase();


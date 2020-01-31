/*Преобразуйте строку 'var_test_text' в 'varTestText'.
Скрипт, конечно же, должен работать с любыми
аналогичными строками.
*/
let str = "var_test_text";
arr = str.split("_");
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase()+arr[i].substring(1);
}
str = arr.join('');
console.log(str);
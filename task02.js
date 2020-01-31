/*Нужно написать функцию, принимающую строку в
качестве аргумента и возвращающую количество
гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
*/

function countVowels(str){
    str = str.toLowerCase();
    let vowels = ['a','o','u','e','i'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i]) === true){
            count++;
        }
    }
    return count;
}

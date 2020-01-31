/*Напишите функцию stringToarray(str), которая
преобразует строку в массив слов.
*/
function stringToarray(str){
    return str.split(" ");
}

/*Напишите функцию delete_characters(str, length),
которая возвращает подстроку, состоящую из
указанного количества символов.
*/
function deleteCharacters(str, length){
    return str.substr(0,length);
}

/*Напишите функцию insert_dash(str), которая
принимает строку str в качестве аргумента и
вставляет тире (-) между словами. При этом все
символы строки необходимо перевести в верхний
регистр.
*/
function insertDash(str){
    return str = str.toUpperCase().replace(/ /g, '-');
}

/*Напишите функцию, которая принимает строку в
качестве аргумента и преобразует регистр первого
символа строки из нижнего регистра в верхний
*/
function setUpperCase(str){
    return str[0].toUpperCase()+str.slice(1);
}

/*Напишите функцию capitalize(str), которая
возвращает строку, в которой каждое слово
начинается с заглавной буквы.
*/
function capitalize(str){
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
    }
    return str = arr.join(" ");
}

/*Напишите функцию change_register(str), которая
принимает в качестве аргумента строку и и заменяет
регистр каждого символа на противоположный.
Например, если вводится «КаЖдЫй ОхОтНиК», то на
выходе должно быть «кАжДыЙ оХоТнИк».
*/
function changeRegister(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        }
        else{
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

/*Напишите функцию remove_char(str), которая
возвращает строку, очищенную от всех не буквенно-
цифровых символов.
*/
function removeChar(str){
    return str.replace(/[^\w\s]/gi, '');
}

/*Напишите функцию zeros(num, len, sign), которая
дополняет нулями до указаной длины числовое
значение с дополнительным знаком «+» или « -« в
зависимости от передаваемого аргумента.
*/
function zeros(num,len,sign){
    let numOfZeros = len - (num + '').length;
    let newStr = '';
  for ( ; numOfZeros > 0; numOfZeros--) {
    newStr += 0;
  }
    if(sign === undefined || sign === ''){
        return "-"+newStr+num;
    }
    else{
        return "+"+newStr+num;
    }

}

/*Напишите функцию insensitive_search(str1, str2),
которая осуществляет поиск подстроки str2 в
строкеstr1 без учёта регистра символов.
*/
function insensitiveSearch(str1,str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.indexOf(str2) === -1){
        return false;
    }
    else{
        return true;s
    }
}

/*Напишите функцию initSnake(str), которая
преобразует стиль написания составных слов строки
из CamelCase в snake_case, при котором несколько
слов разделяются символом подчеркивания (_),
причём каждое слово пишется с маленькой буквы.
*/
function initSnake(str){
    let newStr = str[0].toLowerCase();
    for(let i = 1; i <= str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i];
        }
        else{
            newStr += "_"+str[i].toLowerCase();
        }
    }
    return newStr;
}

/*Напишите функцию repeatStr(str, n), которая
вовращает строку повторяемую определённое
количество раз.
*/
function repeatStr(str,n){
    return str.repeat(n);
}

/*Напишите функцию path(pathname), которая
вовращает имя файла (подстрока после последнего
символа &quot;\&quot; ) из полного пути к файлу.
*/
function path(pathname){
    var result = pathname.split("/").pop();
    return result;
}

/*Напишите функцию insert(str, substr, pos), которая
вставляет подстроку substr в указханную
позицию pos строки str. По умолчанию подстрока
вставляется в начало строки.
*/
function insert(str, substr, pos){
    if(pos === undefined){
        return ""+substr+str;
    }
    else{
        return str.slice(0,pos)+substr+str.slice(pos+1);
    }
}

/*Напишите функцию limitStr(str, n, symb), которая
обрезает строку, если она длиннее указанного
количества символов n. Усеченная строка должна
заканчиваться троеточием «...» (если не задан
параметр symb) или заданным символом symb.
*/
function limitStr(str, n, symb){
    if(str.length > n){
        let newStr = str.slice(0,n);
        if(symb === undefined){
            return newStr+"...";
        }
        else{
            return newStr+symb;
        }
    }
}

/*Напишите функцию cutString(str, n), которая делит
строку на подстроки, состоящие из n символов.
*/
function cutString(str,n){
    let res = [];
  for(let i = 0 ; i < str.length; i += n) {
    res.push(str.substr(i, n));
  }
  return res;
}

/*Напишите функцию count(str, stringsearch), которая
возвращает количество символов stringsearch в
строке str.
 */
function count(str, stringsearch){
    let arr = str.split('');
    let count = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === stringsearch){
            count++;
        }
    }
    return count;
}

/*Напишите функцию cutTegs(str), которая возвращает
строку str, очищенную от всех HTML-тегов.
*/
function cutTegs(str){
    return str.replace(/(\<(\/?[^>]+)>)/g, '');
}

/*Напишите функцию strip(str), которая удаляет все
лишние пробелы из строки str.
 */
function strip(str){
    return str.trim();
}

/*Напишите функцию cutString(str, n), которая удаляет
лишние слова из строки str, оставив в ней n слов.
*/
function cutString(str, n){
    let arr = str.split(" ");
    return arr.slice(0,n).join(" ");
}

/*Напишите функцию unique_letters(str), которая
возвращает строку, оставив в ней только
уникальные символы, т.е. встречающиеся в строке
один раз.
 */
function uniqueLetters(str){
    str = str.split('');
    let res = str.filter(function(value,str) {
        return str.lastIndexOf(value) === str.indexOf(value);
  });
  return res;
}

/*Напишите функцию removeDuplicate(str), которая
возвращает строку, очищенную от слов-дупликатов,
т.е. каждое слово должно повторяться не более
одного раза.
 */
function remoneDuplicates(res){
    let arr = str.split(" ");
    let result = [];
    for(let i = 0; i < res.length; i++){
        if(res.indexOf(arr[i] === -1)){
            res.push(arr[i]);
        }
    }
    return res.join(" ");
}

/*Напишите функцию findWord(word, str), которая
проверяет, существует ли в строке str слова word.
 */
function findWord(word, str){
    let arr = str.spit(" ");
    if(arr.indexOf(word) === -1){
        return false;
    }
    else{
        return true;
    }
}

/*Напишите функцию isUpperCase(str, character),
которая определяет в каком регистре написан
символ строки в указанной позиции. Если в верхнем
регистре выводится – true, если в нижнем – false.
 */
function isUpperCase(str,character){
    if(str[character] === str[character].toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}

/*Напишите функцию, которая принимает на вход
строку, а возвращает эту строку «задом наперед»
 */
function reverseString(str){
    return str.split("").reverse().join("");
}
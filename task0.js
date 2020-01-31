/*Дана строка; нужно написать функцию, которая
позволяет вернуть значение true, если строка является
палиндромом, и false — если нет. При этом нужно
учитывать пробелы и знаки препинания.
*/
function checkPalindrome(string){
    let newStr = string.toLowerCase();
    let flag = true;
    for(let i = 0, j = newStr.length-1; i < Math.floor(newStr.length/2); i++, j--){
       if(newStr[i] !== newStr[j]){
           flag = false;
           break;
       }
    }
    return flag;
}

function betterCheckPalindrome(string){
    let newStr = string.toLowerCase();
    let check = newStr.split('').reverse().join('');
    if(check === newStr){
        return true;
    }
    else{
        return false;
    }
}



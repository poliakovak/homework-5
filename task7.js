/*Дана переменная str, в которой хранится какой-либо
текст. Реализуйте обрезание длинного текста по
следующему принципу: если количество символов
этого текста больше заданного в переменной n, то в
переменную result запишем первые n символов
строки str и добавим в конец троеточие '...'. В
противном случае в переменную result запишем
содержимое переменной str.
*/
function getString(str,n){
    let result = "";
    if(str.length > n){
        result += str.slice(0,n)+"...";
    }
    else{
        result += str;
    }
    return result;
}

//Преобразуйте первую букву строки в верхний регистр.
let str = 'javascript';
str = str[0].toUpperCase()+str.substring(1);
console.log(str);
//Преобразуйте первую букву каждого слова строки в верхний регистр.
let str2 = 'i learn javascript';
let arr = str2.split(' ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
    }
    str2 = arr.join(" ");
    console.log(str2);
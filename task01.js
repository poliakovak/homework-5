//Анаграмма
function anagram(origin,str){
    origin = origin.toLowerCase();
    str = str.toLowerCase();
    if(origin.length !== str.length || origin === str){
        return false;
    }
    if(origin.split('').sort().join('') === str.split('').sort().join('')){
        return true;
    }
    else{
        return false;
    }
}

function checkAnagram(str1,str2){
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    if(str1 === str2){
        return false;
    }
    else{
        str1 = str1.split('').sort(sortStrings());
        str1 = str1.split('').
        
    }
}
function sortStrings(letter){
    return letter.trim();
}
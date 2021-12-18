
// ----WAY 1------
function pigLatin(str) {
    let words=/^[^aeiou]+/gi;
    let mywords =str.match(words);
    return mywords !==null
     ? str
    .replace(words,"")
    .concat(mywords)
    .concat("ay")
    : str.concat("way");
}

// ------WAY 2 ------
function translatePigLatin(str2) {
    var piglatin ="";
    var regex = /[aeiou]/gi;

    if (str2[0].match(regex)) {
        piglatin=str2+"way";
    }else if (str2.match(regex)=== null) {
        piglatin=str2+"ay";
    }else{
        var vowelIndice = str2.indexOf(str2.match(regex)[0]);
        piglatin=str2.substr(vowelIndice)+str2.substr(0,vowelIndice)+"ay";
    }
    return piglatin;
}

console.log(pigLatin("john"));
console.log(translatePigLatin("john"));

console.log(pigLatin("doe"));
console.log(translatePigLatin("doe"));
console.log(pigLatin("examp"));
console.log(translatePigLatin("examp"));



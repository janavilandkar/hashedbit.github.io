
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = "I have a black bag. My black bag is so beutiful.";
let correctedSentence = correctfn(sentence, 'black', 'pink');
console.log(correctedSentence);

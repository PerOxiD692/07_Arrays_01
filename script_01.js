/* Die Satzbau-Maschine | Arrays */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

let arr;
// //arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,6,7,12];
// arr= [true,false,true,];
// arr= ["Ich","bin","Max","Mütze"]
// ausgabe (arr);
// ausgabe (arr.length); // Länge
// ausgabe (arr[0]); // Index, beginnt immer mit 0
// ausgabe (arr[1]);

//ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test
function getSentence(word1, word2, word3, word4) {
    let gap = " ";
    let punct = ".";
    let str = word1 + gap + word2 + gap + word3 + gap + word4 + punct;

    return str;
}

/***** 02. Funktionalität mit Arrays *****/
// Kritik |Überlegung
// -> word1, word2, ..., wordX ----> Semantische Struktur
// -> Arr0, Arr1, ..., ArrX --> Numerische Struktur

ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"])); // Test
function getSentenceArr(arr) {
    let gap = " ";
    let punct = ".";
    let str = arr[0] + gap + arr[1] + gap + arr[2] + gap + arr[3] + punct;

    return str;
}


// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}

// 1.

let vowelsNum = 0;

function countVowels(sentence) {
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u"
    ) {
      vowelsNum++;
    }
  }
  return vowelsNum;
}

console.log(countVowels("hello"));

// 2.

let consonantsNum = 0;

function countConsonants(sentence) {
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] >= "a" &&
      sentence[i] <= "z" &&
      !sentence[i].includes("a") &&
      !sentence[i].includes("e") &&
      !sentence[i].includes("i") &&
      !sentence[i].includes("o") &&
      !sentence[i].includes("u")
    ) {
      consonantsNum++;
    }
  }
  return consonantsNum;
}

console.log(countConsonants("hello"));

// 3.

function firstVowelIndex(word) {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      return i;
    }
  }
}

console.log(firstVowelIndex("hello"));

// 4.

let upperLettersNum = 0;
function upperLettersCount(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] >= "A" && sentence[i] <= "Z") {
      upperLettersNum++;
    }
  }
  return upperLettersNum;
}

console.log(upperLettersCount("HeLLo"));

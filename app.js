(function (window, document) {
  window.addEventListener("load", init);

  function init() {
    generateRandomPara();
    clearTextareaInput();
    copyTextareaInputValue();
  }

  // generate a paragraph when generate button is clicked, and append
  // to the textarea input
  function generateRandomPara() {
    const generateBtn = document.querySelector(".generator__generate-btn");
    const textareaInput = document.querySelector(".generator__textarea");
    const wordList = [
      "a",
      "about",
      "all",
      "also",
      "and",
      "as",
      "at",
      "be",
      "because",
      "but",
      "by",
      "can",
      "come",
      "could",
      "day",
      "do",
      "even",
      "find",
      "first",
      "for",
      "from",
      "get",
      "give",
      "go",
      "have",
      "he",
      "her",
      "here",
      "him",
      "his",
      "how",
      "I",
      "if",
      "in",
      "into",
      "it",
      "its",
      "just",
      "know",
      "like",
      "look",
      "make",
      "man",
      "many",
      "me",
      "more",
      "my",
      "new",
      "no",
      "not",
      "now",
      "of",
      "on",
      "one",
      "only",
      "or",
      "other",
      "our",
      "out",
      "people",
      "say",
      "see",
      "she",
      "so",
      "some",
      "take",
      "tell",
      "than",
      "that",
      "the",
      "their",
      "them",
      "then",
      "there",
      "these",
      "they",
      "thing",
      "think",
      "this",
      "those",
      "time",
      "to",
      "two",
      "up",
      "use",
      "very",
      "want",
      "way",
      "we",
      "well",
      "what",
      "when",
      "which",
      "who",
      "will",
      "with",
      "would",
      "year",
      "you",
      "your",
    ];

    generateBtn.addEventListener("click", function () {
      const generatedParaArr = [];

      // loop through a random number between 30 and 60
      // and push randomly a word from the wordsList array
      for (let i = 0; i <= randomNumBetween(60, 120); i++) {
        const randomWord = wordList[randomNumBetween(0, wordList.length - 1)];
        generatedParaArr.push(randomWord);

        // insert punctual characters randomly
        if (randomNumBetween(1, 30) % randomNumBetween(1, 30) === 3) {
          generatedParaArr.push(",");
        }
      }

      // if a punctual character is at the end of the array
      if (
        generatedParaArr[generatedParaArr.length - 1] === "." ||
        generatedParaArr[generatedParaArr.length - 1] === "?" ||
        generatedParaArr[generatedParaArr.length - 1] === "!"
      ) {
        // append newline character
        generatedParaArr.push("\n\n");
      } else if (generatedParaArr[generatedParaArr.length - 1] === ",") {
        generatedParaArr.pop();
        generatedParaArr.push(".\n\n");
      } else {
        // append a perido and a newline character
        generatedParaArr.push(".\n\n");
      }

      // join the generatedParaArr, and replace any " <punctualCharacter>"
      // with "<punctualCharacter>" --> removing the space before the punctual
      // character
      let generatedParaString = generatedParaArr
        .join(" ")
        .replaceAll(" ,", ",")
        .replaceAll(" ?", "?")
        .replaceAll(" !", "!")
        .replaceAll(" .", ".");

      // append the generated string to the textarea input
      textareaInput.value +=
        generatedParaString.charAt(0).toUpperCase() +
        generatedParaString.slice(1); // Capitalize the first letter of the first word
    });
  }

  // clear the textarea input
  function clearTextareaInput() {
    const clearBtn = document.querySelector(".generator__clear-btn");
    const textareaInput = document.querySelector(".generator__textarea");

    clearBtn.addEventListener("click", function () {
      textareaInput.value = "";
    });
  }

  // copy textarea input's value
  function copyTextareaInputValue() {
    const copyBtn = document.querySelector(".generator__copy-btn");
    const textareaInput = document.querySelector(".generator__textarea");

    copyBtn.addEventListener("click", function () {
      const textareaInputValue = textareaInput.value;
      navigator.clipboard.writeText(textareaInputValue);
    });
  }

  // get radom number between min and max
  function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})(window, document);

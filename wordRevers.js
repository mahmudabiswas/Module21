function wordRevers(text) {
  const word = text.split(" ");
  const wordText = [];
  for (let i = word.length - 1; i >= 0; i--) {
    // let element = word[i];
    wordText.push(word[i]);
  }
  console.log(wordText);
  const reversWord = wordText.join();
  return reversWord;
}

const myString = " i am good girl";
const result = wordRevers(myString);
console.log(result);

function revers(text) {
  let revers = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    revers = revers + element;
    console.log(element, revers);
  }
  return revers;
}

const myString = "i am a good girl";
const result = revers(myString);
console.log(result);
console.log("the text is revers", revers);

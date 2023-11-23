function maxNumber(number) {
  let lagestNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    let index = i;
    let element = number[index];
    if (element > lagestNumber) {
      lagestNumber = element;
    }
  }
  return lagestNumber;
}
let tallestNumber = [12, 34, 54, 65, 78, 89, 90, 122, 443, 434];
let talest = maxNumber(tallestNumber);
console.log("the tallest number", talest);

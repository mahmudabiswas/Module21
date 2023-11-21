const lyrix = "this is the most fancy version in the country";
const include = lyrix.toLocaleLowerCase().includes("most".toLocaleLowerCase());
console.log(include);

if (lyrix.indexOf("more") !== -1) {
  console.log("exists inside the string");
} else {
  console.log("not exists");
}

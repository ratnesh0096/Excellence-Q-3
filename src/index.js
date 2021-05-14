import "./styles.css";
let array = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  19,
  20
];
let found = false;
for (let i = 0; i < array.length - 1; i++) {
  if (array[i] === array[i + 1]) {
    console.log(array[i]);
    found = true;
    break;
  }
}
if (!found) {
  console.log("NO repeated number found");
}
document.getElementById("app").innerHTML = `
<h1>Question-3</h1>
<div>
Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);
</div>
`;

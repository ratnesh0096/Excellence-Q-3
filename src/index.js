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
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86
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

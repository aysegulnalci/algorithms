for (let i = 0; i <= 135; i++) {
  console.log(i);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
for (let i = 0; i <= 135; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let sum1 = 0;
for (let i = 0; i <= 135; i++) {
  sum1 = sum1 + i;
  console.log("Number is:" + i + " Sum:" + sum1);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let array1 = [1, 4, 2, 12];
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let array2 = [100, 4, -5, 11, -14, 121, 13, 0];
let max = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > max) {
    max = array2[i];
  } else {
    max = max;
  }
}
console.log(max);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let array3 = [100, 100, 10, 10, -10, 120, -10, 0];
let avg = 0;
let sum2 = 0;
for (let i = 0; i < array3.length; i++) {
  sum2 = sum2 + array3[i];
}
avg = sum2 / array3.length;
console.log(avg);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let array4 = [2, -1, 4, -3];
for (let i = 0; i < array4.length; i++) {
  if (array4[i] < 0) {
    array4[i] = 0;
  }
}

console.log(array4);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let array5 = [2, -1, 4, -3];
for (let i = 0; i < array5.length; i++) {
  if (array5[i] < 0) {
    array5[i] = "Turing";
  }
}

console.log(array5);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

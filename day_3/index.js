// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//         localStorage.setItem("theme", "light");
//     } else {
//         localStorage.setItem("theme", "dark");
//     }
// });

// const bubbleSort = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// };

// const Mean = (array) => {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i] / array.length;
//     }
//     return console.log(total);
// };
// let arr = [12, 12, 34, 54];
// Mean(arr);

// const Median = (array) => {
//     arr = array.sort((a, b) => a - b);
//     let middleValue = 0;
//     const middleIndex = Math.floor(array.length / 2);
//     if (middleIndex % 2 === 0) {
//         middleValue = array[middleIndex];
//     } else {
//         middleValue = array[middleIndex] + array[middleIndex - 1] / 2;
//     }
//     return console.log(middleValue);
// };
// let arr = [12, 3, 4, 5, 12, 23, 43, 123, 3];
// console.log(arr.sort((a, b) => a - b));
// Median(arr);

// const Modus = (arr) => {
//     let maxCount = 0;
//     let modus = null;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count > maxCount) {
//             maxCount = count;
//             modus = arr[i];
//         }
//     }
//     return console.log(modus);
// };
// let array = [9, 3, 4, 5, 10, 6, 7, 12, 10, 12, 10, 10, 10, 12, 12, 12, 12];

// Modus(array);

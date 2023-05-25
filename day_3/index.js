// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//         localStorage.setItem("theme", "light");
//     } else {
//         localStorage.setItem("theme", "dark");
//     }
// });

const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([12, 34, 56, 1, 23, 5, 6, 4, 89, 43, 45]));

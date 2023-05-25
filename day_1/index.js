// const testCase = 3;

let hargaRumah = [230, 23, 90, 89];
let budget = 150;
let tempJumlah = 0;

// const sortHarga = hargaRumah.sort((a, b) => a - b);

// for (let i = 0; i <= hargaRumah.length; i++) {
//     let sisa = budget - hargaRumah[i];
//     if (sisa >= hargaRumah[i]) {
//         sisa -= hargaRumah[i];
//         // tempJumlah++;
//     }
//     console.log(sisa);
// }

// sortHarga.forEach((a) => {
//     console.log(budget - a);
// });

hargaRumah
    .sort((a, b) => {
        return a - b;
    })
    .forEach((a, b, c) => {
        if (budget - [...c][b] > 0) {
            sisa = budget - a;
            console.log(sisa);
        }
    });

// console.log("Test Case:", t + 1);
// console.log("Harga Rumah:", sortHarga.join(", "));
// console.log("Budget :", budget);
// console.log("Jumlah rumah yang dapat dibeli :", tempJumlah);
// console.log("------------------------------");

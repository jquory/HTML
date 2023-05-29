// const angkaPertama = document.getElementById("angkaPertama");
// const angkaKedua = document.getElementById("angkaKedua");
// const btnTambah = document.getElementById("btnTambah");
// const result = document.getElementById("result");

// btnTambah.addEventListener("click", () => {
//     result.innerText =
//         parseInt(angkaPertama.value) + parseInt(angkaKedua.value);
// });

// (async () => {
//     const getData = await fetch("https://jsonplaceholder.typicode.com/users");
//     const resData = await getData.json();
//     const tableRow = document.getElementById("tableRow");

//     resData.map((data, i) => {
//         tableRow.innerHTML += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${data.name}</td>
//                 <td>${data.username}</td>
//                 <td>${data.email}</td>
//                 <td>${data.phone}</td>
//                 <td>${data.website}</td>
//             </tr>
//         `;
//     });
// })();

let data = [
    {
        name: "lala",
    },
    {
        name: "lili",
    },
];

const filter = (name) => {
    return setTimeout(() => {
        data.filter((d) => d.name === name);
    }, 1000);
};
filter("lala");

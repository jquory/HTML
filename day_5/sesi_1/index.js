// Get REST API
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

// ========================================================================= //

let data = [
    {
        id: 1,
        username: "lala",
        address: "Jakarta",
    },
    {
        id: 2,
        username: "lili",
        address: "Mumbai",
    },
];

const transaction = [
    {
        user_id: 1,
        transaction: [
            {
                id: 1,
                amount: 100,
                status: "done",
            },
            {
                id: 2,
                status: "transfered",
            },
        ],
    },
    {
        user_id: 2,
        transaction: [
            {
                id: 1,
                amount: 100,
                status: "done",
            },
            {
                id: 2,
                status: "cancelled",
            },
        ],
    },
];

const detailTransaction = [
    {
        id: 1,
        productName: "black coffee",
        quantity: 2,
        totalAmount: 6000,
    },
    {
        id: 1,
        productName: "black tea",
        quantity: 1,
        totalAmount: 3000,
    },
];

const authenticate = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.filter((d) => d.username === username));
        }, 100);
    });
};

const getUserTransaction = (userId) => {
    return new Promise((resolve, reject) => {
        resolve(transaction.filter((d) => d.user_id == userId));
    });
};

const getDetailTransaction = (idTransaction) => {
    return new Promise((resolve, reject) => {
        resolve(detailTransaction.filter((d) => d.id === idTransaction));
    });
};

authenticate("lala")
    .then((userData) => {
        console.log(userData);
        return getUserTransaction(userData[0].id);
    })
    .then((user) => {
        console.log(user[0].transaction);
        return getDetailTransaction(user[0].user_id);
    })
    .then((detailTransaction) => console.log(detailTransaction))
    .catch((error) => console.log(error));

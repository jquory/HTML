const database = [
    {
        email: "test@example",
        username: "test",
        fullname: "Test Name",
        password: "password",
        age: "12",
        verified: false,
    },
    {
        email: "gue@example",
        username: "gue",
        fullname: "Gue",
        password: "password",
        age: "12",
        verified: true,
    },
    {
        email: "loe@example",
        username: "loe",
        fullname: "Loe",
        password: "password",
        age: "12",
        verified: false,
    },
    {
        email: "dia@example",
        username: "dia",
        fullname: "Dia",
        password: "password",
        age: "12",
        verified: false,
    },
];

const simpan = (props) => {
    const { email, fullname, password, age, verified } = props;
    database.push({ email, fullname, password, age, verified });
};

const list = () => {
    database.map((a) => {
        console.log(`Email : ${a.email}`);
        console.log(`fullname : ${a.fullname}`);
        console.log(`age : ${a.age}`);
        console.log(`password : ${a.password}`);
        console.log(
            `verified : ${
                a.verified === false
                    ? "belum di verifikasi"
                    : "sudah di verifikasi"
            }`
        );
    });
};

const edit = (index, data) => {
    const { email, fullname, password, age, verified } = data;
    if (database[index].email === data.email) {
        database[index].email = email != null ? email : database[index].email;
        database[index].fullname =
            fullname != null ? fullname : database[index].fullname;
        database[index].password =
            password != null ? password : database[index].password;
        database[index].age = age != null ? age : database[index].age;
        database[index].verified =
            verified != null ? verified : database[index].verified;
    } else {
        console.log("Data tidak ditemukan");
    }
};

const Delete = (index) => {
    database.splice(index, 1);
};

const simpanUser = () => {
    const userInput = {
        email: "baru@gmail.com",
        fullname: "baru@gmail.com",
        password: "password",
        age: 22,
        verified: false,
    };
    simpan(userInput);
    return console.log(database);
};

const showList = () => {
    list();
};

const editUser = (indexData, dataBaru) => {
    edit(indexData, dataBaru);
    console.log(database);
    console.log("Data berhasil di perbarui");
    console.log("Data tidak ditemukan");
};

const deleteUser = () => {
    Delete(0);
    console.log("Data berhasil dihapus");
    return console.log(database);
};

const table = document.getElementById("tbody");
const verifiedText = document.getElementById("verified");

for (let i = 0; i < database.length; i++) {
    table.innerHTML += `<td>${database[i].email}</td>
    <td>${database[i].fullname}</td>
    <td>${database[i].age}</td>
    <td>${database[i].verified === false ? "Not verified" : "Verified"}</td>
    `;
}

// Login

const Login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validate = database.find(
        (a) => a.username === username && a.password === password
    );
    if (validate) {
        alert("Login Berhasil");
        window.location("index.html");
    } else {
        alert("Username atau password salah!");
    }
};

const btn = document.getElementById("btnLogin");
btn.addEventListener("click", function () {
    console.log("click");
});

// simpanUser();
// showList();
// deleteUser();
// editUser(0, {
//     email: "baru@gmail.com",
//     fullname: "Kemas",
//     verified: true,
// });

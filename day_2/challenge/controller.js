import { database } from "./db.js";
import { Delete, edit, list, simpan } from "./service.js";

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

// simpanUser();
// showList();
// deleteUser();
editUser(0, {
    email: "baru@gmail.com",
    fullname: "Kemas",
    verified: true,
});

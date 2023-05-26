import { database } from "./db.js";

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

export { simpan, list, edit, Delete };

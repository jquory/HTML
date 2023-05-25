const urlApi = "https://jsonplaceholder.typicode.com/api/user?id=10&name=Qori";

const spliceUrl = (url, character, index) => {
    return url.split(character)[index];
};

const resultUrl = () => {
    const getParams = spliceUrl(urlApi, "?", [1]);
    const getName = spliceUrl(getParams, "&", [1]);
    const getId = spliceUrl(getName, "=", [0]);
    return getId;
};

console.log(resultUrl());

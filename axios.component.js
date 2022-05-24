//Antti Suomi 24.5

// const axios = require("axios");
// import axios from "axios";
const getData = async (url) => {
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    return data;
};

const addr = "https://kaisuomi-hub.github.io/data.json";



async function main() {

    let i = 0; // zero for index
    const data = await getData(addr); // get the data
    data.employees.forEach(function () { // foreach of the three employees
        let name = data.employees[i].name //create variable with index number and get that indexes name
        // console.log(data.employees[i].name);
        i++ // add +1
        // console.log(name)
        return name; //return the name
    });
    console.log(data);

    return data;


}


export default main;

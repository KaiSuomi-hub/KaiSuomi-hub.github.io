//Antti Suomi 24.5

// const axios = require("axios");
import axios from "axios";
const getData = async (url) => {
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    return data;
};
let dd = 'ss'
const addr = "https://kaisuomi-hub.github.io/data.json";


async function main() {
    const data = await getData(addr);
    console.log(data);
	// return data;
}

main();
// export default main;
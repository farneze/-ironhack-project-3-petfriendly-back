const axios = require("axios");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const PopulateApi = require("./api_files/populateApi.js");
var popApi = new PopulateApi();

// // ------------------ generates 2000 lorem comments
// const count = 2000;

// popApi.config(count);
// console.log(
//   popApi.commGen().map((el, i, arr) => arr.slice(i * 100, (i + 1) * 100))
// );

// ------------- Gets cats from img.src from aws ----------
// Promise.all(
//   catsImg.map((el) => {
//     axios
//       .get(el)
//       .then((result) => {
//         const dom = new JSDOM(result.data);
//         console.log(dom.window.document.getElementById("cat").src);
//       })
//       .catch((err) => console.error(err));
//   })
// ).then((result) => console.log(result));

//
//
//
//

// -------------- Generate Posts -----------------
// const count = 25;

// popApi.config(count, "cat");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "dog");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "fox");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "rabbit");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "axolotl");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "owl");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "capivara");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "penguin");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));

// popApi.config(count, "red panda");
// popApi
//   .postGen()
//   //   .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     console.log(result);
//     // console.log(result.length);
//   })
//   .catch((err) => console.error(err.response.data.length));
//
//

// // ------------- Populate people ---------------------

// // const count = 30;
// const count = 39;
// // console.log(Array(5));
// // never generate 1 user, risk of BUG
// // [...new Array(5)].forEach((el) => {
// popApi.config(count, "woman");
// popApi
//   .accGen()
//   // .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     //   console.log(result[0]);
//     console.log(result);
//   })
//   .catch((err) => console.error(err.response.data));
// popApi.config(count, "man");
// popApi
//   .accGen()
//   // .then((result) => axios.post("http://localhost:1234/dev/addusers", result))
//   .then((result) => {
//     //   console.log(result[0]);
//     console.log(result);
//   })
//   .catch((err) => console.error(err.response.data));
// // });

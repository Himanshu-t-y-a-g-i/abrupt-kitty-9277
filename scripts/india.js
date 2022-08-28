// getting data form india-fetch
import { getData, appendData, sideBar } from "../components/india_fetch.js";

// for side bar news section
let side_container = document.getElementById(`side_container`);

side_container.innerHTML = sideBar();

let api_key = `dd67cb46f0df4483a318aea7459b7be8`;

let url = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${api_key}`;

// news appending section
let container = document.getElementById(`main_news`);

getData(url).then((res) => {
  // console.log(res);
  appendData(res, container);
});

// // for pagination
// let page_button = (results, per_page) => {
//     let buttons = document.getElementById(`buttons`);

//     let btn = Math.ceil(results / per_page);

//     for(let i=1; i<= btn; i++)
//     {
//         let btn = document.createElement('button')

//         btn.innerText = i;

//         btn.onclick = function () {
//             console.log(`i am here`);

//             getData(i)
//         };
//         buttons.append(btn);
//     }
// }

// page_button(10, 2)

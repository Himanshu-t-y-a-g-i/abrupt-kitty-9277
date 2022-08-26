// Navbar and scroll to top init
import navbar from "../components/navbar.js"
document.querySelector("#nav").innerHTML = navbar();

// footer section form import export
// import footer from "../components/foot.js";
// document.getElementById("footer").innerHTML=footer()
 
// getting data form india-fetch
import {getData, appendData} from "../components/india_fetch.js";

let api_key = `dd67cb46f0df4483a318aea7459b7be8`

let url = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${api_key}`

// for business catogory
// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=dd67cb46f0df4483a318aea7459b7be8


// https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=dd67cb46f0df4483a318aea7459b7be8&page%20=%203

// news appending section
let container = document.getElementById(`main_news`)

getData(url).then((res) => {
    // console.log(res);
    appendData(res, container)
})

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
            
//             // getData(i)
//         };
//         buttons.append(btn);
//     }
// }



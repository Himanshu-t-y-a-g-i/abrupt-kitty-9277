// Navbar and scroll to top init
import navbar from "../components/navbar.js"
document.querySelector("#nav").innerHTML = navbar();

// footer section form import export
// import footer from "../components/foot.js";
// document.getElementById("footer").innerHTML=footer()

// / getting data form india-fetch
import {getData, appendData, sideBar} from "../components/india_fetch.js";

// for side bar news section
let side_container = document.getElementById( `side_container`)

side_container.innerHTML = sideBar();

let api_key = `dd67cb46f0df4483a318aea7459b7be8`

// for business catogary
// let url = `https://newsapi.org/v2/sources=bbc-newstop-headlines?country=in&category=general&apiKey=${api_key}`

let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dd67cb46f0df4483a318aea7459b7be8`




// / news appending section
let container = document.getElementById(`main_news`)

getData(url).then((res) => {
    console.log(res);
    appendData(res, container)
})
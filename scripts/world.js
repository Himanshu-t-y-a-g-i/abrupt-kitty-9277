// / getting data form india-fetch
import { getData, appendData, sideBar } from "../components/india_fetch.js";

// for side bar news section
let side_container = document.getElementById(`side_container`);

side_container.innerHTML = sideBar();

let api_key = `dd67cb46f0df4483a318aea7459b7be8`;

// for world catogary

let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dd67cb46f0df4483a318aea7459b7be8`;

// / news appending section
let container = document.getElementById(`main_news`);

getData(url).then((res) => {
//   console.log(res);
  appendData(res, container);
});

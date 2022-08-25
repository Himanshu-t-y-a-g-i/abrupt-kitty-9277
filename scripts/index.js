let query = document.querySelector("#search")

let dataFunc = async () => {
    try {
        // let key = "pub_105542082a44e012a61301d0ea8bb55421a19";
        // let res = await fetch(`https://newsdata.io/api/1/news?apikey=${key}&category=sports`);
        let key = "3a2ea667e2344d5e9ba3e7f0a7a25feb";
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&q=${query}&apiKey=${key}`);
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ",error);
    }
}
// dataFunc();
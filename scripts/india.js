// Navbar and scroll to top init

import navbar from "../components/navbar.js"

document.querySelector("#nav").innerHTML = navbar();
 
let api_key = `dd67cb46f0df4483a318aea7459b7be8`

// let url = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${api_key}`

let getData = async () => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log('data:', data)
        
    } catch (err) {
        console.log(err);
    }
}

// getData();
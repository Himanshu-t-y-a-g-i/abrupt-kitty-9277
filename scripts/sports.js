let apiKey = '52a63447fbbf4ab6a7a75f9817274478'
//let url=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
//let url=`https://newsapi.org/v2/top-headlines?q=cricket&apiKey=${apiKey}`
let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`
let data;
let text = document.getElementById("text");

let secbox = document.getElementById("secbox");
async function getData() {
    try {
        let res = await fetch(url);
        data = await res.json();
        console.log("data:", data);

        //let sports=document.getElementById('talksport');
        data.articles.forEach(articles => {
            //let a=document.createElement('a');
            let b = document.createElement('p');
            let img = document.createElement('img');
            img.src = articles.urlToImage;
            img.className = "image";
            let title = document.createElement("h3")
            title.innerText = articles.title;
            let p = document.createElement('p');
            p.innerText = articles.description;
            //a.setAttribute('href',articles.url);
            // a.textContent=articles.title;
            let div1 = document.createElement('div');
            //div1.append(title,img,p);
            let div2 = document.createElement('p');
            p.className = "scrollobject";
            div2.append(articles.title);

            let div = document.createElement('div')
            div.className = "news";
            //div1.addEventListener("click",function(){
            //localStorage.setItem("news",JSON.stringify(articles));
            // window.location.href="index.html"
            // })
            //div.append(img,div1);
            // container.append(div);
            text.append(div2);

        });



    }
    catch (err) {
        console.log("err:", err);
    }
}
getData();



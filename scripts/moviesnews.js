let newsdata=JSON.parse(localStorage.getItem("news"));


document.querySelector('title').innerText=newsdata.title;
document.getElementById('latestnews').innerText=newsdata.title;
let newsimg=document.querySelector('.img');
let img=document.createElement('img')
img.src=newsdata.urlToImage;

newsimg.append(img)
let info=document.querySelector(".info")
let h1=document.createElement("h3")
h1.innerText=newsdata.title
let p1=document.createElement("p");
p1.innerText=newsdata.publishedAt;
let p=document.createElement("p");
p.innerText=newsdata.content;
info.append(h1,p1,p);

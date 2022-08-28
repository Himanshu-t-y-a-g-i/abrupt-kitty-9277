

show()
async function show(){
try{
let res= await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c3d03e327ffe4834b54d0bc0d441f7d5')
let data= await res.json();
let originaldata=data.articles;
let originaldata1=data.articles;


if(originaldata!==undefined){
    shownews(originaldata);
   
}
let reverse=originaldata1.reverse()
if(reverse!=undefined){
    shownews1(reverse);
}
console.log(originaldata);  
}
catch(error){  
console.log(error);
}
}
let midcont=document.getElementById('mid');
function shownews(data){
data.map(function(el){
    let div=document.createElement('div');
    div.addEventListener("click",function(){
        news(el)
    })
    let img=document.createElement('img');
    img.src=el.urlToImage;
    let h3=document.createElement('h3');
    h3.innerText=el.title;
    div.append(img,h3)
    midcont.append(div)

})


let topimg=document.querySelector(".topimg");
let img12=document.querySelector(".img1");
let img123=document.querySelector(".img2");
let img1=document.createElement('img')
let img2=document.createElement('img')
let img3=document.createElement('img')
img1.src=data[1].urlToImage;
let h=document.createElement("h2");
h.innerText=data[1].title
h.style.color="white"
img2.src=data[4].urlToImage;
let h1=document.createElement("h4");
h1.innerText=data[4].title
h1.style.color="white"
img3.src=data[9].urlToImage;
let h2=document.createElement("h4");
h2.innerText=data[9].title
h2.style.color="white"


topimg.append(img1,h) 
img12.append(img2,h1)
img123.append(img3,h2)

}
function news(el){
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="moviesnews.html"
}

let side=document.getElementById('side');

function shownews1(data){
    data.map(function(el){
        let div=document.createElement('div');
        div.addEventListener("click",function(){
            news(el)
        })
        
        let img=document.createElement('img');
        img.src=el.urlToImage;
        let h3=document.createElement('p');
        h3.innerText=el.title;
        div.append(img,h3)
        side.append(div)
    })
}
    
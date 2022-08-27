

show()
async function show(){
try{
let res= await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c3d03e327ffe4834b54d0bc0d441f7d5')
let data= await res.json();
let originaldata=data.articles;
if(originaldata!==undefined){
    shownews(originaldata)
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


}
function news(el){
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="moviesnews.html"
}

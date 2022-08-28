let result = JSON.parse(localStorage.getItem("searchData"));

window.addEventListener("load",()=>{
    if(result[0]===undefined){
        let h1 = document.createElement("h1");
        h1.innerText="No relevant search results found";

        document.querySelector("#sRes").appendChild(h1);
    }else{
        showData();
    }
})

function showData(){
    console.log(result)
    document.querySelector("#sRes").innerHTML = "";
    result.forEach(el => {
        let div = document.createElement("div");

        let div1= document.createElement("div");
        div1.setAttribute("class","img_div")

        let img = document.createElement("img");
        if(el.urlToImage===null){
            img.src = "https://upload.wikimedia.org/wikipedia/commons/b/be/India_Today_TV_Channel_logo.jpg";
        }   else    {
            img.src = el.urlToImage;
        }
        img.addEventListener("click",()=>{
            sendToDetails();
        })

        div1.append(img);
        
        let divi = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = el.title;
        h2.addEventListener("click",()=>{
            sendToDetails();
        })
        
        let p = document.createElement("p");
        p.innerText = el.description;
        p.addEventListener("click",()=>{
            sendToDetails();
        })
        
        divi.append(h2,p);
        div.append(div1,divi);
        document.querySelector("#sRes").append(div);

        function sendToDetails(){
            image = el.urlToImage;
            Title = el.title;
            Description = el.description;
            source = el.url;
            let obj={
                image,
                Title,
                Description,
                source
            }
            localStorage.setItem("sendToDetails",JSON.stringify(obj));
            window.location.href="./details.html";
        }
    });
}
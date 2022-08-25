

import footer from "../components/foot.js";
document.getElementById("footer").innerHTML=footer();

let movies_data=[
    {
      image_url:
        "https://tpc.googlesyndication.com/simgad/4067651655008546901"
     
    },
    {
      image_url:
        "https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Rohit-Scheme__728x90_30_73070565321116846.jpg"
     
    },
    {
      image_url:
        "https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Dhoni-Revamp-2022---728x90_30_73070555927972828.jpg"
     
    },
    {
      image_url:
        "https://tpc.googlesyndication.com/simgad/11587622753749247049"
     
    },
    
]


slideShows()
let i=0;
function slideShows(){

let slideshows=document.getElementById("cont")

setInterval(function(){
    
    console.log(i)
          if(i==movies_data.length){
           i=0;
      }
      let img=document.createElement("img")
      img.src=movies_data[i].image_url
      slideshows.innerHTML=null;
      slideshows.append(img);
      i++;
      },2000)
   }

//footer
import footer from "./components/foot.js";
document.getElementById("footer").innerHTML=footer();



let data=[
    {
      image_url:
        "https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220809/Rbi_ENG_1_300x250_8aug22_72879983397192489.jpg"
     
    },
    {
      image_url:
        "https://tpc.googlesyndication.com/simgad/17617618475281980704"
     
    },
    {
      image_url:
        "https://tpc.googlesyndication.com/simgad/11875766069717909521"
     
    },
    {
      image_url:
        "https://tpc.googlesyndication.com/simgad/9731227255969963969"
    },
    
]


slideShows()
let i=0;
function slideShows(){

let slideshows=document.getElementById("slideShow")

setInterval(function(){
    
    console.log(i)
          if(i==data.length){
           i=0;
      }
      let img=document.createElement("img")
      img.src=data[i].image_url
      slideshows.innerHTML=null;
      slideshows.append(img);
      i++;
      },2000)
   }

   
slide()
let j=0;
function slide(){

let slideshows=document.getElementById("slide")

setInterval(function(){
    
    console.log(j)
          if(i==data.length){
           i=0;
      }
      let img=document.createElement("img")
      img.src=data[j].image_url
      slideshows.innerHTML=null;
      slideshows.append(img);
      j++;
      },2000)
   }











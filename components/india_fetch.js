
// side bar html for india.world and business page exporting

let sideBar = () => {
  return ` <!-- Side  news div read this -->
  <div class="child_div" id="side_cont_1">
   <div class="span">
     <div><span>READ THIS</span></div>
     <div></div>
   </div>        
   <div class="side_div">
     <div>
       <p>
         3,2,1...Liftoff to Moon with world's most powerful rocket | Immersive
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Cover_Photo_(4).png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Sar tan se juda Hyderabad chapter: Arrests, bails over hate
         speech, threats
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/WhatsApp_Image_2022-08-25_at_7_1_1200x768.jpeg?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         BJP leader Sonali Phogat's autopsy reveals 'blunt injury', murder case registered in Goa
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/sonali_phogat_0_1200x768.png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Noida twin towers demolition will leave 80,000 tonnes of debris
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/twin_towers_noida_1200x768.jpeg?size=88:50"
         alt=""
       />
     </div>
   </div>
 </div>
 <!-- watch right now section -->
 <div class="child_div_2" id="side_cont_2">
   <div class="span_2">
     <div><span>WATCH RIGHT NOW</span></div>
     <div></div>
   </div>
   <div class="side_div">
     <div>
       <p>
         'Go back to India': Texas woman threatens, assaults Indians
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/eedgbftgrnhty_1_1200x768.png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Ghulam Nabi Azad quits Congress, resigns from all party posts
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/rtyhtnbg_0_1200x768.png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Brother of Sonali Phogat claims she was raped before her death;  more
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/sonali_phogat_0_1200x768_0_120_0_1200x768.jpeg?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Infiltration bid foiled in J&K's Uri, three terrorists killed
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/rthgbthyty_0_1200x768.png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         James Webb Telescope shares the largest image of the universe
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/webb.jpg?size=88:50"
         alt=""
       />
     </div>
   </div>
 </div>
 <!-- Side  news div rop takes -->
 <div class="child_div_3" id="side_cont_3">
   <div class="span_3">
     <div><span>TOP TAKES</span></div>
     <div></div>
   </div>
   <div class="side_div">
     <div>
       <p>
         'Go back to India': Texas woman threatens, assaults Indians
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/eedgbftgrnhty_1_1200x768.png?size=88:50"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         NIA arrests 2 accused in Mundra port drug haul; SC to hear cases of homebuyers of Twin Towers; more
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/dfvgrtghty-88x50.png?5NzQWjKAyoNUXWoOwIgCvx.ngU3DlPzy"
         alt=""
       />
     </div>
   </div>
   <div class="side_div">
     <div>
       <p>
         Brother of Sonali Phogat claims she was raped before her death;  more
       </p>
     </div>
     <div>
       <img
         src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202208/sonali_phogat_0_1200x768_0_120_0_1200x768.jpeg?size=88:50"
         alt=""
       />
     </div>
   </div>
 </div>`;
};


// for making data dynamic by url
let getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.articles;
  } catch (err) {
    console.log(err);
  }
};

// for showing data on page
let appendData = (data, cont) => {
  data.forEach(({ urlToImage, title, content, description,url }) => {
    // content part
    let img = document.createElement("img");
    img.src = urlToImage;
    img.addEventListener("click",()=>{
      sendToDetails();
  })

    let h2 = document.createElement("h2");
    h2.innerText = title;
    h2.addEventListener("click",()=>{
      sendToDetails();
  })

    let p = document.createElement("p");
    p.innerText = description;
    p.addEventListener("click",()=>{
      sendToDetails();
  })

    // data storing and appending part
    let head_div = document.createElement("div");
    head_div.setAttribute("class", "head_div");

    let para_div = document.createElement("div");
    para_div.setAttribute("class", "para_div");

    let content_div = document.createElement("div");
    content_div.setAttribute("class", "content_div");

    let img_div = document.createElement("div");
    img_div.setAttribute("class", "img_div");

    let sub_news = document.createElement("div");
    sub_news.setAttribute("class", "sub_news");
    
    // appending part
    // for image only
    img_div.append(img);
    // for heading and para
    head_div.append(h2);
    para_div.append(p);
    // for content (title and desc)
    content_div.append(head_div, para_div);
    // sub-div news section
    sub_news.append(img_div, content_div);
    // main news_div
    cont.append(sub_news);

    function sendToDetails(){
      let image = urlToImage;
      let Title = title;
      let Description = description;
      let source = url;
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
};

export { getData, appendData, sideBar};
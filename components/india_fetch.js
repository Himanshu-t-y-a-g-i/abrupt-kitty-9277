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
  data.forEach(({ urlToImage, title, content, description }) => {
    // content part
    let img = document.createElement("img");
    img.src = urlToImage;

    let h2 = document.createElement("h2");
    h2.innerText = title;

    let p = document.createElement("p");
    p.innerText = description;

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
  });
};

export { getData, appendData};

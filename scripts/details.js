let data = JSON.parse(localStorage.getItem("sendToDetails"));

window.addEventListener("load", () => {
    showDetailedData();
})

function showDetailedData() {
    let location = document.querySelector("#mainBody");
    location.innerHTML = "";

    let img = document.createElement("img");
    img.src = data.image;

    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = data.Title;

    let description = document.createElement("p");
    description.innerText = data.Description;

    let source = document.createElement("a");
    source.href = data.source;
    source.innerText = "Source Page"

    div.append(title, description, source);
    location.append(img, div);
}
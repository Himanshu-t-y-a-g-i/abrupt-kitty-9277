let userdata=JSON.parse(localStorage.getItem("users"))||[];
function showname(){
    let name1=document.getElementById('name');
    name1.innerText="Full name field is required";
    name1.style.color="red"
    
}
document.getElementById('passbox').style.display="none";

function show(){
    document.getElementById('passbox').style.display="block";
    document.getElementById('lower').style.color="red";
    document.getElementById('number').style.color="red";
    document.getElementById('length').style.color="red";
}


document.getElementById('password').onblur=function(){
    document.getElementById('passbox').style.display="none";
}
document.getElementById('password').onkeyup=function(){
    var lowercase=/[a-z]/g;
    var number=/[0-9]/g;
    
    if(document.getElementById('password').value.match(lowercase)){
        document.getElementById('lower').style.color="green";
    }else{
        document.getElementById('lower').style.color="red";
    }
    if(document.getElementById('password').value.match(number)){
        document.getElementById('number').style.color="green";
    }else{
        document.getElementById('number').style.color="red";
    }
    if(document.getElementById('password').value.length>=6){
        document.getElementById('length').style.color="green";
    }else{
        document.getElementById('length').style.color="red";
    }
}
   
   let check=document.getElementById('checksso1');
function register(){
if(document.getElementById("fullname").value===""){
let name=document.getElementById('name')
name.innerText="Please enter full name ";
name.style.color="red"
}if(document.getElementById("email_mob").value===""){
 let email=document.getElementById('email1')
email.innerText="Mobile/Email Field is required ";
 email.style.color="red";


}if(document.getElementById("password").value===""){
    let password=document.getElementById('pass')
    password.innerText="please enter password ";
     password.style.color="red"
}if(check.checked!==true){
    let sso=document.getElementById('sso')
    sso.innerText="Below fields are required ";
     sso.style.color="red"
     let hide=  document.getElementById("hide");
     let div=document.createElement("div");
    div.setAttribute("class","hide");
     let p1=document.createElement("p");
     p1.innerText="Email or Mobile field is required."
     let p2=document.createElement("p");
     p2.innerText="I agree to the SSO login privacy terms and I warrant that I am above 16 years of age. field is required.";
     div.append(p1,p2);
     hide.append(div)
     
}
else{
    if(document.getElementById("fullname").value!=="" && document.getElementById("email_mob").value!=="" && document.getElementById("password").value!=="" && check.checked===true ){
        let obj={
            country:document.getElementById('country').value,
            name:document.getElementById('fullname').value,
            email_mob:document.getElementById('email_mob').value,
            password:document.getElementById('password').value
        }
        userdata.push(obj);
        localStorage.setItem("users",JSON.stringify(userdata));
        alert('register successful')
        window.location.href="login.html"
    }
   
   
}

  
}
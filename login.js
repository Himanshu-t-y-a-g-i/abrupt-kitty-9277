let userdata=JSON.parse(localStorage.getItem("users"));
let login1=JSON.parse(localStorage.getItem("logindata"))||[];
function showname(){
    let name1=document.getElementById('name');
    name1.innerText="Enter your email/mobile number field is required.";
    name1.style.color="red"
    
}





   

function login(){
if(document.getElementById("email_mob").value===""){
 let email=document.getElementById('email1')
email.innerText="Mobile/Email Field is required ";
 email.style.color="red";


}if(document.getElementById("password").value===""){
    let password=document.getElementById('pass')
    password.innerText="please enter password ";
     password.style.color="red"
     let hide=  document.getElementById("hide");
     let div=document.createElement("div");
    div.setAttribute("class","hide");
     let p1=document.createElement("p");
     p1.innerText="Email or Mobile field is required."
     let p2=document.createElement("p");
     p2.innerText="Password is required";
     div.append(p1,p2);
     hide.append(div)
}
else{
    if( document.getElementById("email_mob").value!=="" && document.getElementById("password").value!==""  ){
       
            let loginobj={
             
                email:document.querySelector("#email_mob").value,
                password:document.querySelector("#password").value,
                
              
               
            }
            if(checklogin(loginobj.email,loginobj.password)===true){
                login1.push(loginobj);
                localStorage.setItem("logindata",JSON.stringify(login1));
                alert("Login successful");
                
                window.location.href="index.html"
        
            }else{
                alert("wrong email or password")
            }
        }
       
    }
   
   
}
function checklogin(email,password){
    let filter=userdata.filter(function(el){
        return el.email_mob===email&&el.password==password;
    })
    if(filter.length>0){
        return true;
    }
    else{
        return false;
    }
}



// function otp(){
//    let passwordbox=document.getElementById("passbox123");
//    if(document.getElementById("email_mob").value!==""){
//     passwordbox.style.display="none";
    
//     let div=document.createElement("div");
   
//      let input=document.createElement("input");
//      input.type="number";
//      input.style.width="400px";
//      input.style.textAlign="center"

//      div.append(input);
//      document.getElementById('otpshow').append(div)
//    }
  


  

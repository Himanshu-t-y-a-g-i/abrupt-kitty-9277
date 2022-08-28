let userdata=JSON.parse(localStorage.getItem("users"));
let login1=JSON.parse(localStorage.getItem("logindata"))||[];
let optdata=JSON.parse(localStorage.getItem("otpdata"))||[];
document.getElementById('loginotp').style.display="none";
document.getElementById('ootp').style.display="none";

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
                
                // getting data of use to show on website
                let name = userdata[userdata.length-1].name;
                localStorage.setItem("loggedInUsername", name);
                localStorage.setItem("loggedInStatus", true);

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



function otp(){

   let passwordbox=document.getElementById("passbox123");
   if(document.getElementById("email_mob").value!==""){
    passwordbox.style.display="none";
    let ootp=document.getElementById('ootp')
    ootp.style.display="block";
    document.getElementById('login').style.display="none"
    document.getElementById('loginotp').style.display="block";

   
    
    document.getElementById("otpshow").style.width="350px";
     
    document.getElementById("otpshow").style.marginLeft="130px";

  
   }
}
  
function loginotp123(){
    if(document.getElementById("otpshow").value!=="" && document.getElementById("otpshow").value.length==4 ){
        if(document.getElementById("otpshow").value==1234){
            alert('login successful');
            window.location.href="index.html"
        }else{
            alert('wrong opt'); 
        }
    }
    else{
        alert('enter right opt')
    }
}

function forgotpass(){
    if(document.getElementById("email_mob").value!==""){
        alert("password reset link send to your mail/number")
    }

}


  

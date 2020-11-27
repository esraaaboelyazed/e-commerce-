let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign")

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
let getemail = localStorage.getItem("email");

loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    if (username.value === "" || password.value===""){
        alert("please fill data");
    }else{
       if (getUser&& getUser.trim() === username.value.trim()&& getPassword&& getPassword === password.value.trim()){
           setTimeout(()=>{
               window.location ="mycard/html/shopping.html";},1000);
           }else{alert("username or password is wrong!!")}

           }
       });
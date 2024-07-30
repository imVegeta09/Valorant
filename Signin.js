let form = document.querySelector("form");
let username = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let eUser = document.querySelectorAll("span")[0];
let ePass = document.querySelectorAll("span")[1];
let eSubmit = document.querySelectorAll("span")[2];

let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

form.addEventListener("submit", (e)=>{
    eUser.innerHTML = "";
    ePass.innerHTML = "";
    eSubmit.innerHTML = "";

    let matching = localData.find((e)=>{
        if(username.value==e.email && password.value==e.password){
            return e;
        }
    })
    console.log(matching);
    if(username.value == "" && password.value==""){
        eUser.innerHTML = "Username is Required";
        ePass.innerHTML = "Password is Required";
        e.preventDefault();
    }
    else if(username.value == ""){
        eUser.innerHTML = "Username is Required";
        e.preventDefault();
    }
    else if(password.value == ""){
        ePass.innerHTML = "Password is Required";
        e.preventDefault();
    }
    else if(matching){
        localStorage.setItem("particularUser", JSON.stringify(matching));
    }
    else{
        eSubmit.innerHTML = "Password is not correct";
        e.preventDefault();
    }
})
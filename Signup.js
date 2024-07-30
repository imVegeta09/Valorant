let form = document.querySelector("form");
let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let mobile = document.querySelectorAll("input")[3];
let create = document.querySelectorAll("input")[4];
let confirm = document.querySelectorAll("input")[5];
let eFirst = document.querySelectorAll("span")[0];
let eLast = document.querySelectorAll("span")[1];
let eEmail = document.querySelectorAll("span")[2];
let eCreate = document.querySelectorAll("span")[3];
let eConfirm = document.querySelectorAll("span")[4];
let eSubmit = document.querySelectorAll("span")[5];
let storage = [];

let localData = JSON.parse(localStorage.getItem("data"));

if(localData){
    storage=localData;
}
console.log(storage)
form.addEventListener("submit",(e)=>{
    let regEx = /^[a-zA-Z]{2,16}$/;
    let regEx1 = /^[6-9][0-9]{9}$/;
    let regEx2 = /^[a-zA-Z0-9]{8,15}$/;
    let flag = true;

    if(firstName.value == ""){
        eFirst.innerHTML = "First Name is Required";
        e.preventDefault();
        flag = false;
    }
    else if(regEx.test(firstName.value)){
        eFirst.innerHTML = "";
    }
    else{
        eFirst.innerHTML = "Invalid First Name";
        e.preventDefault();
        flag = false;
    }
    if(lastName.value ==""){
        eLast.innerHTML = "Last Name is Required";
        e.preventDefault();
        flag = false;
    }
    else if(regEx.test(lastName.value)){
        eLast.innerHTML = "";
    }
    else{
        eLast.innerHTML = "Invalid Last Name";
        e.preventDefault();
        flag = false;
    }
    if(email.value == ""){
        eEmail.innerHTML = "Email Id is Required";
        e.preventDefault();
        flag = false;
    }
    else{
        eEmail.innerHTML = "";
    }
    if(create.value==""){
        eCreate.innerHTML="Password id Required";
        e.preventDefault();
        flag = false;
    }
    else if(regEx2.test(create.value)){
        eCreate.innerHTML = "";
    }
    else{
        eCreate.innerHTML="Invalid Password"
        e.preventDefault();
        flag = false;
    }
    if(confirm.value==create.value){
        eConfirm.innerHTML="";
    }
    else{
        eConfirm.innerHTML="Password is not matching";
        e.preventDefault();
        flag = false;
    }
    if(flag){
        let obj = {
            first    : firstName.value,
            last     : lastName.value,
            email    : email.value,
            mobile   : mobile.value,
            password : create.value,
        };
        storage.push(obj);
        console.log(storage);
        localStorage.setItem("data", JSON.stringify(storage));
    }
})

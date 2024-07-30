let image = document.querySelector("#slide");
let login = document.querySelector("#right");

let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

if(localData){
    login.innerHTML=`<span>${localData.first}</span>
    <a href="./Signin.html" id="logout"><button>logout</button></a>
    `;
    let logout = document.querySelector("#logout");
    logout.addEventListener("click", ()=>{
        localStorage.removeItem("localData");
    });
}

let storage = ["./wallpaperssss/Astra.jpeg",
               "./wallpaperssss/Brimstone.jpeg",
               "./wallpaperssss/Chamber.jpeg",
               "./wallpaperssss/Deadlock.jpeg",
               "./wallpaperssss/Fade.jpeg",
               "./wallpaperssss/jett.jpeg",
              ];

let index = 0;
setInterval(()=>{
    index = (index + 1)%storage.length;
    image.src=storage[index];
},3000);
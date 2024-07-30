let image = document.querySelector("#img");
let allAgents = document.querySelector("#imgg");
let liveWallpapers = document.querySelector("#vid")
// let nextButton1 = document.querySelector("#next1");
// let previousButton1 = document.querySelector("#back1");
// let nextButton2 = document.querySelector("#next2");
// let previousButton2 = document.querySelector("#back2");
// let nextButton3 = document.querySelector("#next3");
// let previousButton3 = document.querySelector("#back3");

let storage = [
    {wallpaper : "./wallpaperssss/Astra.jpeg"},
    {wallpaper : "./wallpaperssss/Brimstone.jpeg"},
    {wallpaper : "./wallpaperssss/Chamber.jpeg"},
    {wallpaper : "./wallpaperssss/Cypher.jpeg"},
    {wallpaper : "./wallpaperssss/Deadlock.jpeg"},
    {wallpaper : "./wallpaperssss/Fade.jpeg"},
    {wallpaper : "./wallpaperssss/jett.jpeg"},
    {wallpaper : "./wallpaperssss/KAY_O.jpeg"},
    {wallpaper : "./wallpaperssss/Killjoy.jpeg"},
    {wallpaper : "./wallpaperssss/Neon.jpeg"},
    {wallpaper : "./wallpaperssss/omen.jpeg"},
    {wallpaper : "./wallpaperssss/Phoenix.jpeg"},
    {wallpaper : "./wallpaperssss/Raze.jpeg"},
    {wallpaper : "./wallpaperssss/reynna.jpeg"},
    {wallpaper : "./wallpaperssss/Sage.jpeg"},
    {wallpaper : "./wallpaperssss/Skye.jpeg"},
    {wallpaper : "./wallpaperssss/Sova.jpeg"},
];

let storage2 = [
    {wallpaper2 : "./wallpaper2/one.jpeg"},
    {wallpaper2 : "./wallpaper2/two.jpeg"},
    {wallpaper2 : "./wallpaper2/three.jpeg"},
    {wallpaper2 : "./wallpaper2/four.jpeg"},
];

let storage3 = [
    {live : "./Backgrounds/killjoy background.gif"},
    {live : "./Backgrounds/neon signin background.gif"},
    {live : "./Backgrounds/jett.gif"},
];

let index = 0;

let indexx = 0;

let indexxx = 0;

setInterval(()=>{
    index = (index + 1)%storage.length;
    image.src=storage[index].wallpaper;
},3000);

setInterval(()=>{
    index = (indexx + 1)%storage2.length;
    allAgents.src=storage2[index].wallpaper2;
},3000);

setInterval(()=>{
    index = (indexxx + 1)%storage3.length;
    liveWallpapers.src=storage3[index].live;
},15000);

// nextButton1.addEventListener("click", ()=>{
//     index = index + 1;
//     image.src=storage[index].wallpaper;
// });
// previousButton1.addEventListener("click", ()=>{
//     index = (index - 1 + storage.length)%storage.length;
//     image.src=storage[index].wallpaper;
// })

// nextButton2.addEventListener("click", ()=>{
//     index = index2 + 1;
//     allAgents.src=storage[index].wallpaper2;
// });
// previousButton2.addEventListener("click", ()=>{
//     index = (index2 - 1 + storage.length)%storage.length;
//     allAgents.src=storage[index].wallpaper2;
// })

// nextButton3.addEventListener("click", ()=>{
//     index = index3 + 1;
//     liveWallpapers.src=storage[index].live;
// });
// previousButton3.addEventListener("click", ()=>{
//     index = (index3 - 1 + storage.length)%storage.length;
//     liveWallpapers.src=storage[index].live;
// })
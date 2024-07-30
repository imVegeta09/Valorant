let image = document.querySelector("#img");
let mapName = document.querySelector("h2");
let info = document.querySelector("h4");
let nextButton = document.querySelector(".fa-arrow-left");
let previousButton = document.querySelector(".fa-arrow-right");

let storage = [
    {name : "Fracture",
     mapImage : "./Maps/Fracture.jpeg",
     mapInfo : "A top secret research facility split apart by a failed <br> radianite experiment. With defender options as <br> divided as the map, the choice is yours: meet the <br> attackers on their own turf or batten down the <br> hatches to weather the assault."
    },
    {name : "Ascent",
     mapImage : "./Maps/Ascent.jpeg",
     mapInfo : "An open playground for small wars of position and <br> attrition divide two sites on Ascent. Each site can <br> be fortified by irreversible bomb doors; once <br> they’re down, you’ll have to destroy them or find <br> another way. Yield as little territory as possible."
    },
    {name : "Bind",
     mapImage : "./Maps/Bind.jpeg",
     mapInfo : "Two sites. No middle. Gotta pick left or right. <br> What’s it going to be then? Both offer direct paths <br> for attackers and a pair of one-way teleporters <br> make it easier to flank."
    },
    {name : "Split",
     mapImage : "./Maps/split.jpeg",
     mapInfo : "If you want to go far, you’ll have to go up. A pair of <br> sites split by an elevated center allows for rapid <br> movement using two rope ascenders. Each site is <br> built with a looming tower vital for control. <br> Remember to watch above before it all blows sky- <br> high."
    },
    {name : "Heaven",
     mapImage : "./Maps/haven.png",
     mapInfo : "Beneath a forgotten monastery, a clamour <br> emerges from rival Agents clashing to control <br> three sites. There’s more territory to control, but <br> defenders can use the extra real estate for <br> aggressive pushes."
    },
    {name : "Breeze",
     mapImage : "./Maps/breeze.jpeg",
     mapInfo : "Take in the sights of historic ruins or seaside caves <br> on this tropical paradise. But bring some cover. <br> You'll need them for the wide open spaces and long <br> range engagements. Watch your flanks and this <br> will be a Breeze."
    },
    {name : "Icebox",
     mapImage : "./Maps/icebox.jpeg",
     mapInfo : "Your next battleground is a secret Kingdom <br> excavation site overtaken by the arctic. The two <br> plant sites protected by snow and metal require <br> some horizontal finesse. Take advantage of the <br> ziplines and they’ll never see you coming."
    },
    {name : "Sunset",
     mapImage : "./Maps/sunset.jpeg",
     mapInfo : "A disaster at a local kingdom facility threatens to <br> engulf the whole neighborhood. Stop at your <br> favorite food truck then fight across the city in this <br> traditional three lane map."
    },
];

let index = 0;

setInterval(()=>{
    index = (index + 1)%storage.length;
    image.src=storage[index].mapImage;
    mapName.innerHTML=storage[index].name;
    info.innerHTML=storage[index].mapInfo;
},3000);

nextButton.addEventListener("click", ()=>{
    index = index + 1;
    image.src=storage[index].mapImage;
    mapName.innerHTML=storage[index].name;
    info.innerHTML=storage[index].mapInfo;
});
previousButton.addEventListener("click", ()=>{
    index = (index - 1 + storage.length)%storage.length;
    image.src=storage[index].mapImage;
    mapName.innerHTML=storage[index].name;
    info.innerHTML=storage[index].mapInfo;
})

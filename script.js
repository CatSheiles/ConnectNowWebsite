const api = new XMLHttpRequest();
const url = "https://public.connectnow.org.uk/applicant-test/";
api.open("GET", url);
api.send();

api.onreadystatechange = (e) =>{
    console.log(JSON.parse(api.responseText));
}


let object = [
    {
        name: "SEGA AGES Phantasy Star",
        summary: "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike."
    },
    {
        name: "Layers of Fear: Legacy",
        summary: "The Masterpiece of Fear"
    }
]


for(let i = 0; i < object.length; i++){
    let cardTemplate = `<div class='card'>` +
        `<h2>${object[i].name}</h2>` +
        `<h4>Release Date: DD/MM/YYYY</h4>` +
        `<p>${object[i].summary}</p>` +
        `</div>`;

    document.getElementById("gamebox").insertAdjacentHTML('beforeend', cardTemplate);
}

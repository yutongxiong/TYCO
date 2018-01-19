// I put rooms here because, I see you are copying this into two js files.
// remember, the page load from top to bottom.
// as long as this file is before the other js
// the other js can access variable in this file
// this is the reason why when we use jquery, we need to include jquery.js link before our script
// also, becare ful, because of this naming is very important so you don't overwrite this variable by accident in your scripts, unless you intend to
var rooms = [
    {
        id: 1,
        name: "GALAXY FANTASY",
        intro: "Space and galaxy theme, wonderful light effect. <br>King size bed, no window.",
        image: "img/room1.jpg"
    },
    {
        id: 2,
        name: "LOST IN PARIS",
        intro: "Painted wall, decorated with mirror. <br>Queen size bed, no window.",
        image: "img/room2.jpg"
    },
    {
        id: 3,
        name: "SAMURAI & BUSHIDO",
        intro: "Acient Japanese castle style decorated. <br>Monster size bed, City view.",
        image: "img/room3.jpg"
    },
    {
        id: 4,
        name: "ABOVE THE CLOUD",
        intro: "Huge mirror on the ceiling,  painted wall. <br>Queen size bed, no window.",
        image: "img/room4.jpg"
    },
    {
        id: 5,
        name: "THE ROULETTE",
        intro: "Walls of mirror, advanced audio system. <br>Monster size bed, no window.",
        image: "img/room5.jpg"
    }
];
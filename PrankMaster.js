console.log("You've been pranked!");

function deleteRandomDiv() {
    const body = document.querySelector("body");
    const divs = body.querySelectorAll("div");
    const randomIndex = Math.floor(Math.random() * divs.length);
    const randomDiv = divs[randomIndex];
    console.log(randomDiv); 
    randomDiv.style.display = "none";
}

// setInterval(() => {
//     deleteRandomDiv();
// }, 5000);


function prankB() {
    console.log("Prank B");
    // decrease the opacity of the body by 10%
}

setInterval(() => {
    deleteRandomDiv();
}, 5000);

function prankC() {
    console.log("Prank C");
}

function prankD() {
    console.log("Prank D");
}

function prankE() {
    console.log("Prank E");
}

//TODO : when finish activate this function PrankBegin(){
//     const prankList = [prankA, prankB, prankC, prankD, prankE];
//     setInterval(() => {
//         const randomPrank = prankList[Math.floor(Math.random() * prankList.length)];
//         randomPrank();
//     }, 5000);
// }
// PrankBegin();
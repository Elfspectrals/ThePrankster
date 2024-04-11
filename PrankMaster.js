console.log("You've been pranked!");

//? This is to slowly turning it into a fog instead of being abrupt for disappearBody
document.body.style.transition = "opacity 1s linear";


// function deleteRandomDiv() {
//     const body = document.querySelector("body");
//     const divs = body.querySelectorAll("div");
//     const randomIndex = Math.floor(Math.random() * divs.length);
//     const randomDiv = divs[randomIndex];
//     console.log(randomDiv); 
//     randomDiv.style.display = "none";
// }



// function disappearBody() {
//     console.log("Prank B");
//     const body = document.querySelector('body');
//     const bodyStyle = window.getComputedStyle(body);
//     let bodyOpacity = parseFloat(bodyStyle.getPropertyValue("opacity"));

//     bodyOpacity -= bodyOpacity * 0.3; // decrease by 30%
//     body.style.opacity = bodyOpacity;

//     console.log(bodyOpacity);
// }


function prankC() {
    function game() {
        // Display the confirmation dialog
        const play = confirm('Do you want to play a game?');

        // Ch²eck if the user wants to play
        if (play) {
            // Ask about coffee if the user chooses to play
            const coffee = confirm('Good! Now, did you offer a coffee to your colleagues today?');
            if (coffee) {
                
            } else {
                console.log("Prank C: Failed. Try again!");
                game(); // Ask the user to play again if coffee wasn't offered
            }
        } else {
            // If the user doesn't want to play, ask again
            game();
        }
    }
    // Start the game
    game();
}

prankC();


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
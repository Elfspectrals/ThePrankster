console.log("You've been pranked!");

//? This is to slowly turning it into a fog instead of being abrupt for disappearBody
document.body.style.transition = "opacity 1s linear";
document.body.style.transition = "transform 4s linear";

// function scaling() {
//     document.querySelector("body").style.transform = "scale(0.001)";

//     // Create a new div
//     var div = document.createElement("div");

//     // Style the div to look like a black square
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.backgroundColor = "black";

//     // Insert the div as the first child of the body
//     document.body.insertBefore(div, document.body.firstChild);
// }
// scaling();


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

function createMatrixEffectHTML() {
    return `
      <canvas id="canv"></canvas>
      <style>
       body, html { margin: 0; overflow: hidden; }
       canvas { display: block; }
      </style>
     `;
}

function createMatrixEffect() {
    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');

    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }

    setInterval(matrix, 50);
}

// To use it:

function playGameWithMe() {
    function game() {
        // Display the confirmation dialog
        const play = confirm('Do you want to play a game?');

        // Ch²eck if the user wants to play
        if (play) {
            // Ask about coffee if the user chooses to play
            const coffee = confirm('Good ! Now, did you offer a coffee to your colleagues today?');
            if (coffee) {
                alert("You are a good person! Keep it up!")
            } else {
                document.body.innerHTML = createMatrixEffectHTML();

                createMatrixEffect();

            }
        } else {
            game();
        }
    }
    game();
}
playGameWithMe();




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
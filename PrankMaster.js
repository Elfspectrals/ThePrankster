console.log('PrankMaster.js loaded');

function urlReplacement() {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach((anchor) => {
    const originalHref = anchor.href;
    try {
      let url = new URL(originalHref);
      url.pathname += '\u200B'; // Ajout d'un caractère Unicode invisible
      anchor.href = url.toString();
      console.log('Lien modifié :', anchor.href);
    } catch (error) {
      // Si ce n'est pas une URL valide, on ne fait rien
      return;
    }
  });
}

function CreatingTheLetter() {
  // On retourne une string contenant tout le code SVG
  // avec un style inline pour le positionner en bas à gauche
  return `
<svg 
  style="position: fixed; bottom: 0; right: 0; width: 80px; height: auto; z-index: 9999;"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1280 1280"
>
  <g transform="translate(0,1280) scale(0.1,-0.1)" fill="#000" stroke="none">
    <path d="M310 6125 l0 -4055 6085 0 6085 0 0 4055 0 4055 -6085 0 -6085 0 0
    -4055z m11155 3496 c-17 -16 -1000 -907 -2185 -1982 -1185 -1074 -2184 -1980
    -2220 -2012 -168 -154 -365 -275 -510 -314 -96 -25 -236 -22 -330 6 -144 44
    -300 138 -455 275 -119 104 -4377 3966 -4425 4012 l-45 44 5100 0 5100 0 -30
    -29z m-8771 -1955 l1697 -1540 -33 -32 c-18 -17 -784 -712 -1703 -1544 -919
    -832 -1689 -1531 -1712 -1554 l-43 -40 0 3168 0 3168 48 -44 c27 -23 812 -736
    1746 -1582z m9194 -3120 l-3 -1586 -1710 1551 c-940 852 -1725 1565 -1744
    1583 l-33 34 1743 1581 1744 1582 3 -1580 c1 -869 1 -2293 0 -3165z m-6868
    1009 c212 -191 412 -363 520 -446 535 -415 867 -485 1294 -271 231 115 488
    315 980 761 l190 171 40 -39 c23 -21 646 -587 1386 -1257 740 -671 1506 -1365
    1703 -1544 l359 -325 -2545 -3 c-1400 -1 -3694 -1 -5098 0 l-2553 3 1744 1582
    1745 1583 35 -34 c19 -18 109 -100 200 -181z"/>
  </g>
</svg>
  `;
}

function LetterFishing() {
  // On crée un conteneur et on y injecte le SVG
  const letterContainer = document.createElement('div');
  // Insère la chaîne de caractères qui contient l'élément <svg>
  letterContainer.innerHTML = CreatingTheLetter();
  // Ajout au document
  document.body.appendChild(letterContainer);
}

// Active la fonction
LetterFishing();

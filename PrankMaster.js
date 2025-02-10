function urlReplacement() {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach((anchor) => {
    const originalHref = anchor.href;
    try {
      let url = new URL(originalHref);
      url.pathname += '\u200B';
      anchor.href = url.toString();
      console.log('Lien modifié :', anchor.href);
    } catch (error) {
      // Ignore any invalid URLs
      return;
    }
  });
}

function createVirusAlertHTML() {
  return `
    <style>
      .modal {
        position: fixed;      
        bottom: 20px;         
        right: 20px;         
        width: 350px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        text-align: center;
        z-index: 9999;
        height: 200px;
      }
      .modal-header {
        background: #d32f2f;
        color: white;
        padding: 15px;
        font-size: 18px;
        font-weight: bold;
      }
      .modal-body {
        padding: 20px;
        color: #333;
      }
      .modal-body p {
        margin: 10px 0;
      }
      .modal-footer {
        display: flex;
        justify-content: space-around;
        padding: 15px;
        background: #f1f1f1;
      }
      .button {
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        border-radius: 4px;
      }
      .scan-button {
        background: #d32f2f;
        color: white;
      }
      .ignore-button {
        background: #ccc;
        color: black;
      }
    </style>

    <div class="modal">
      <div class="modal-header">⚠ Alerte de Sécurité</div>
      <div class="modal-body">
          <p>Un virus potentiel a été détecté sur votre système.</p>
          <p>Nous recommandons une analyse immédiate.</p>
      </div>
      <div class="modal-footer">
          <button class="button scan-button">Analyser maintenant</button>
          <button class="button ignore-button">Ignorer</button>
      </div>
    </div>
  `;
}

function showVirusAlert() {
  const container = document.createElement('div');
  container.innerHTML = createVirusAlertHTML();
  document.body.appendChild(container);
}

// showVirusAlert();

function MouseCreation() {
  return `
    <style>
      .mouse-container {
        position: absolute;
        top: 0;
        left: 0; /* Change right to left for better positioning */
        padding: 10px; 
        z-index: 9999;
        transition: transform 0.3s ease; /* Smooth transition for movement */
      }
    </style>
    <div class="mouse-container">
      <svg class="mouse" fill="red" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <path d="M240.94,248.626h-36.08c-21.012,0-38.106,17.089-38.106,38.094v5.756H65.33c-2.335-14.744-10.347-27.944-22.363-36.844
            l40.709-78.294c3.797-7.311,9.164-13.264,15.955-17.696c7.853-5.128,17.173-7.776,26.508-7.679
            c-0.079,4.443,3.137,8.363,7.65,9.041c4.911,0.735,9.488-2.648,10.227-7.558c0.005-0.029,0.453-2.99,1.398-7.572
            c5.19-24.95,16.364-54.086,30.776-54.086c10.758,0,25.186,17.51,26.064,37.182c0.488,11.113-3.101,26.895-22.912,39.097
            c-0.092,0.052-0.183,0.106-0.273,0.159c-5.926,3.619-12.967,6.698-20.927,9.155c-4.746,1.464-7.405,6.499-5.941,11.245
            c1.192,3.863,4.748,6.344,8.59,6.344c0.878,0,1.772-0.13,2.655-0.402c6.931-2.138,13.328-4.714,19.1-7.685l39.106,35.046
            c1.717,1.538,3.862,2.296,5.999,2.296c2.468,0,4.923-1.01,6.7-2.992c3.314-3.698,3.004-9.384-0.695-12.699l-35.547-31.857
            c15.166-12.682,22.946-29.557,22.114-48.503c-1.27-28.457-22.257-54.373-44.032-54.373c-26.752,0-40.238,34.726-46.544,60.307
            c-9.642-0.585-19.364,0.971-28.331,4.524c-4.899-22.09-18.191-64.831-47.669-64.831c-19.611,0-39.479,21.901-43.386,47.825
            c-2.261,15.009,0.923,29.406,9.209,41.637c8.005,11.816,20.38,21.107,36.838,27.727L1.013,297.32
            c-1.448,2.788-1.338,6.13,0.293,8.816s4.546,4.326,7.687,4.326h206.239c4.966,0,8.993-4.026,8.993-8.993
            c0-4.967-4.026-8.993-8.993-8.993H184.74v-5.756c0-11.088,9.027-20.108,20.12-20.108h36.08c4.967,0,8.993-4.026,8.993-8.993
            C249.933,252.652,245.906,248.626,240.94,248.626z M28.046,124.307c2.76-18.313,16.028-32.519,25.601-32.519
            c15.958,0,27.22,35.073,31.268,56.367c-7.076,5.644-12.971,12.756-17.193,20.885l-3.067,5.898
            C37.979,164.658,24.703,146.488,28.046,124.307z M23.804,292.476l10.698-20.582c6.242,5.383,10.607,12.575,12.493,20.582H23.804z" />
        </g>
      </svg>
    </div>
  `;
}

function showMouse() {
  const container = document.createElement('div');
  container.innerHTML = MouseCreation();
  document.body.appendChild(container);
}

function MouseMoveRandomLocation() {
  const mouse = document.querySelector('.mouse-container');

  // Get window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random x and y coordinates
  const randomX = Math.floor(Math.random() * (windowWidth - 50)); // Subtract mouse width
  const randomY = Math.floor(Math.random() * (windowHeight - 50)); // Subtract mouse height

  // Move to the random location using translate
  mouse.style.transform = `translate(${randomX}px, ${randomY}px)`;
  
  
}

// Display the mouse and move it to a random location
showMouse();
MouseMoveRandomLocation();

// Move every 2 seconds
setInterval(MouseMoveRandomLocation, 2000);
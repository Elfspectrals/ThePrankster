console.log('PrankMaster.js loaded');

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

    <!-- Le contenu du modal -->
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

showVirusAlert();

console.log('PrankMaster.js loaded');

function urlReplacement() {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach((anchor) => {
    const originalHref = anchor.href;  
    
    try {
      let url = new URL(originalHref);
      
      url.pathname += '\u200B'
      
      anchor.href = url.toString();
      
      console.log('Lien modifié :', anchor.href);
    } catch (error) {
      return;
    }
  });
}

urlReplacement();

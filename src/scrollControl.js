export function controlScroll() {
  document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const html = document.documentElement;
    
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    
    if (height <= window.innerHeight) {
      body.style.overflow = 'hidden'; // Empêche le scroll si la hauteur de la page est inférieure à la hauteur de la fenêtre
    } else {
      body.style.overflow = 'auto'; // Active le scroll si la hauteur de la page dépasse la hauteur de la fenêtre
    }
  });
}

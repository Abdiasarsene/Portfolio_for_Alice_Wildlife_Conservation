// Charger et insérer le contenu HTML du header et footer
['header', 'footer'].forEach(id => {
    fetch(id + '.html')
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Erreur lors du chargement du fichier:', error));
});

// Ajouter l'interaction pour le menu après le chargement du header
document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarNav");

    if (toggler && menu) {
        toggler.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }
});

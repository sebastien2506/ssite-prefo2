// Récupérez le bouton "Read Me" par son ID
const readMoreButton = document.getElementById('read-more-button');

// Ajoutez un gestionnaire d'événement pour le clic sur le bouton
readMoreButton.addEventListener('click', function() {
    // Redirigez vers la page "read_me.html" lorsque le bouton est cliqué
    window.location.href = "read_more.html";
});

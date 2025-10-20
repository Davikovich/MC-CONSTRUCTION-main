document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement de la page

    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById("formMessage");

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Définir la couleur selon succès ou erreur
        if(data.toLowerCase().includes("succès")) {
            messageDiv.style.color = "green";
            form.reset(); // vide le formulaire uniquement si succès
        } else {
            messageDiv.style.color = "red";
        }

        messageDiv.innerText = data;

        // Optionnel : faire disparaître le message après 5 secondes
        setTimeout(() => {
            messageDiv.innerText = "";
        }, 5000);
    })
    .catch(error => {
        messageDiv.style.color = "red";
        messageDiv.innerText = "Erreur lors de l'envoi.";
        console.error(error);
    });
});

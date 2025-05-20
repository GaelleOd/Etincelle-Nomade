function chargerTexte(id, fichier) {
    fetch(fichier)
        .then(response => {
            if (!response.ok) throw new Error("Erreur de chargement : " + fichier);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerText = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById(id).innerText = "[Texte non disponible]";
        });
}

const prefix_connexion = "connexion";
["description"]
.forEach(cle => {
    chargerTexte(cle + prefix_connexion, `textes/${cle}${prefix_connexion}texte.txt`);
});

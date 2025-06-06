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
const prefix = "hatha";
["description", "âge", "durée", "nombredeplaces", "créneauxhoraires", "tarif1", "tarif2", "tarif3"]
.forEach(cle => {
    chargerTexte(cle + prefix, `textes/${cle}${prefix}texte.txt`);
});
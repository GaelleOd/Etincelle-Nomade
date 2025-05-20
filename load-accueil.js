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

chargerTexte("texte1", "textes/accueiltexte1.txt");
chargerTexte("texte2", "textes/accueiltexte2.txt");
chargerTexte("texte3", "textes/accueiltexte3.txt");
chargerTexte("texte4", "textes/accueiltexte4.txt");
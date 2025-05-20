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

chargerTexte("quisuisje1", "textes/quisuisjetexte1.txt");
chargerTexte("quisuisje2", "textes/quisuisjetexte2.txt");
chargerTexte("quisuisje3", "textes/quisuisjetexte3.txt");
chargerTexte("quisuisje4", "textes/quisuisjetexte4.txt");
chargerTexte("quisuisje5", "textes/quisuisjetexte5.txt");

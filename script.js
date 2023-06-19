const jokeButton = document.getElementById("jokeButton");
const jokeContainer = document.getElementById("jokeContainer");

jokeButton.addEventListener("click", function() {
    fetch('/Blagues/random')
        .then(response => response.json())
        .then(randomJoke => {
            // Création des éléments HTML pour la question et la réponse
            const questionElement = document.createElement("p");
            questionElement.textContent = randomJoke.question;

            const reponseElement = document.createElement("p");
            reponseElement.textContent = randomJoke.reponse;

            // Effacement du contenu précédent du conteneur
            jokeContainer.innerHTML = "";

            // Ajout des éléments de la blague au conteneur
            jokeContainer.appendChild(questionElement);
            jokeContainer.appendChild(reponseElement);
        })
        .catch(error => {
            console.log(error);
        });
});
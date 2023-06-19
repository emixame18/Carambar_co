const Blagues = [
    {
      id: 1,
      question: "Quelle est la femelle du hamster ?",
      reponse: "L'Amsterdam"
    },
    {
      id: 2,
      question: "Que dit un oignon quand il se cogne ?",
      reponse: "Aïe"
    },
    {
      id: 3,
      question: "Quelle est l'animal le plus heureux ?",
      reponse: "Le hibou, parce que sa femme est chouette"
    },
    {
      id: 4,
      question: "Pourquoi le football est rigolo ?",
      reponse: "Parce que Thierry en rit"
    },
    {
      id: 5,
      question: "Quel est le sport le plus fruiter ?",
      reponse: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes"
    },
    {
      id: 6,
      question: "Que fait un Schtroumpf quand il tombe ?",
      reponse: "Il devient bleu"
    },
    {
      id: 7,
      question: "Quel est le comble pour un marin ?",
      reponse: "Avoir le nez qui coule"
    },
    {
      id: 8,
      question: "Qu'est-ce que les enfants utilisent le plus à l'école ?",
      reponse: "Le professeur"
    },
    {
      id: 9,
      question: "Quel est le sport le plus silencieux ?",
      reponse: "Le para-chuuuuuuuuuuut !"
    },
    {
      id: 10,
      question: "Quel est le comble pour un jour de bowling ?",
      reponse: "C'est de perdre la boule"
    }
  ];
  const jokeButton = document.getElementById("jokeButton");
const jokeContainer = document.getElementById("jokeContainer");

jokeButton.addEventListener("click", function() {
    const randomJoke = Blagues[Math.floor(Math.random() * Blagues.length)];

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
});
  module.exports = Blagues;
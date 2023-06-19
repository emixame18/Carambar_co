const jokes = [
    { id: 1, joke: "Quelle est la femelle du hamster ?\nL'Amsterdam" },
    { id: 2, joke: "Que dit un oignon quand il se cogne ?\nAïe" },
    { id: 3, joke: "Quel est l'animal le plus heureux ?\nLe hibou, parce que sa femme est chouette." },
    { id: 4, joke: "Pourquoi le football c'est rigolo ?\nParce que Thierry en rit" },
    { id: 5, joke: "Quel est le sport le plus fruité ?\nLa boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
    { id: 6, joke: "Que fait un Schtroumpf quand il tombe ?\nun Bleu" },
    { id: 7, joke: "Quel est le comble pour un marin ?\nAvoir le nez qui coule !" },
    { id: 8, joke: "Qu'est ce que les enfants usent le plus à l'école ?\nLe professeur !" },
    { id: 9, joke: "Quel est le sport le plus silencieux ?\nle para-chuuuut !" },
    { id: 10, joke: "Quel est le comble pour un joueur de bowling ?\nC'est de perdre la boule !" },
];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

const jokeButton = document.getElementById("jokeButton");
const jokeContainer = document.getElementById("jokeContainer");

jokeButton.addEventListener("click", function() {
    const randomJoke = getRandomJoke();
    jokeContainer.textContent = randomJoke.joke;
    console.log("ID de la blague :", randomJoke.id);
    console.log("Blague :", randomJoke.joke);
});
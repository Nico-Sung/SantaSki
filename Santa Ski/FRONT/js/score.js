window.addEventListener("load", async () => {
    const scoreList = document.getElementById("score-list");

    const response = await fetch("http://localhost:3000/scores");
    const scores = await response.json();

    console.log(scores);

    scores.forEach((score) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.pseudo}: ${score.score}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", async () => {
            await fetch(`http://localhost:3000/scores/${score.id}`, {
                method: "DELETE",
            });
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        scoreList.appendChild(listItem);
    });
});

document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();

    const pseudo = document.getElementById("pseudo").value;
    const score = Number(document.getElementById("score").value);

    const response = await fetch("http://localhost:3000/scores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ pseudo, score }),
    });

    const result = await response.json();
    console.log(result);

    location.reload();
});

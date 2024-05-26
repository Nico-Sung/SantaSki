    async function updateScore(id, pseudo, score) {
        const response = await fetch(`http://localhost:3000/scores/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pseudo, score }),
        });

        const updatedScore = await response.json();
        console.log(updatedScore);
    }

    // Utilisez la fonction updateScore pour mettre à jour un score
    // updateScore(1, 'newPseudo', 100);

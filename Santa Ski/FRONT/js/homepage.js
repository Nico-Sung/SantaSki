window.addEventListener("load", async () => {
    const progressBar = document.querySelector(".progress");

    if (!progressBar) {
        console.error(
            "L'élément .progress-fill n'a pas été trouvé dans le DOM."
        );
        return;
    }

    const response = await fetch("http://localhost:3000/donations/total");
    const data = await response.json();

    const totalDonations = data.totalDonations;
    const goal = 50000;
    const progress = (totalDonations / goal) * 100;

    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${totalDonations}€/${goal}€`;

    console.log(totalDonations);
    console.log(data);

    
});

window.addEventListener("load", async () => {
    const lastDonorElement = document.querySelector(".last-donor");

    if (!lastDonorElement) {
        console.error("L'élément .last-donor n'a pas été trouvé dans le DOM.");
        return;
    }

    const response = await fetch("http://localhost:3000/donations/last");
    const data = await response.json();

    const lastDonor = data.donorName;
    const lastDonationAmount = data.amount;

    lastDonorElement.textContent = `Dernier donateur : ${lastDonor} avec un don de ${lastDonationAmount}€`;

    const currentTime = new Date();
    console.log(
        `Dernier donateur : ${lastDonor} avec un don de ${lastDonationAmount}€ à ${currentTime}`
    );
});

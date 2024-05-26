window.addEventListener("load", () => {
    const donForm = document.querySelector(".mon-don");

    donForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = donForm.querySelector('input[name="amount"]').value;
        const donorName = donForm.querySelector(
            'input[name="donorName"]'
        ).value;

        fetch("http://localhost:3000/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount, donorName }),
        }).then(() => {
            window.location.href = "../HTML/homepage.html";
        });
    });
});

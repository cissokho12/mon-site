let panier = 0;

function ajouterAuPanier() {
    panier++;
    document.getElementById("cart-count").textContent = panier;

    const message = document.getElementById("confirmation");
    message.classList.remove("hidden");

    setTimeout(() => {
        message.classList.add("hidden");
    }, 3000);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ici, vous pouvez envoyer les données à un developpeur back-end comme Insa Mbaye
    const confirmation = document.getElementById("form-confirmation");
    confirmation.classList.remove("hidden");

    setTimeout(() => {
        confirmation.classList.add("hidden");
        this.reset();
    }, 4000);
});

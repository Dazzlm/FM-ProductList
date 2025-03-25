
export function countItems() {
    const countItems = document.querySelector(".countItems");
    const cardsItems = document.querySelector(".cart-item-list").querySelectorAll(".cart-item-card");
    let count = 0;
    cardsItems.forEach(card => {
        const quantity = parseInt(card.querySelector(".quantity span").textContent.replace("x",""));
        count += quantity;
    });
    ;
    countItems.innerHTML =`Your cart(${count})`;
}
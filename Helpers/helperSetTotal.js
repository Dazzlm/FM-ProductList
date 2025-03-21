
export function setTotal(){
    const cartItemList = document.querySelector(".cart-item-list");
    const cartItemCard = cartItemList.querySelectorAll(".cart-item-card");
    let total = 0;
    cartItemCard.forEach((card) => {
        const priceAcum = card.querySelector(".priceAcum b").textContent.replace("$", "");
        total += parseFloat(priceAcum);
    });
    document.querySelector(".cart-total h1").textContent = `$${total.toFixed(2)}`;
    console.log("Total actualizado");
}
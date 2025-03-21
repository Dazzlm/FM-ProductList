
export function setQuantityItemCart(productId,quantityValue){
    const cartItemList = document.querySelector(".cart-item-list");
    const cartItemCard = cartItemList.querySelector(`[id="${productId}"]`);
    const quantity = cartItemCard.querySelector(".quantity span");
    const unitPrice =cartItemCard.querySelector(".unitPrice").textContent.replace("@$", "")
    const priceAcum = cartItemCard.querySelector(".priceAcum b");
    console.log(unitPrice);
    quantity.textContent = `${quantityValue}x`;
    priceAcum.textContent = `$${(unitPrice * (quantityValue)).toFixed(2)}`;
    console.log("Producto agregado al carrito");

}
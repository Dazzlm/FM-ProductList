import { fetchProducts } from "./helperFetchProducts.js";

export async function  addCart(productId) {
    const products = await fetchProducts();
    const cartItemList = document.querySelector(".cart-item-list");
    const product = products[productId];
    const cartItemCard = document.createElement("div");
    cartItemCard.classList.add("cart-item-card");
    cartItemCard.id = `${productId}`;
    cartItemCard.innerHTML = cartItemCard.innerHTML+
    `<div class="cart-item-info">
        <dt>${product.name}</dt>
            <dd>
                <p><span>${1}x</span></p>
                <p>@ $${product.price}</p>
                <p><b>$${product.price}</b></p>
            </dd>
     </div>
     <button class="btnDeletCartItem">
        <img src="./assets/images/icon-remove-item.svg" alt="icon-remove-item">
     </button>
     </div>`
     
    cartItemList.appendChild(cartItemCard);     
    cartItemList.appendChild(document.createElement("hr"));
}
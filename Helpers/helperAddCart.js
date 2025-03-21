import { fetchProducts } from "./helperFetchProducts.js";
import { deleteCart } from "./helperDeleteCart.js";
export async function  addCart(productId) {
    const products = await fetchProducts();
    const cartItemList = document.querySelector(".cart-item-list");
    const product = products[productId];
    const cartItemCard = document.createElement("div");
    const hr = document.createElement("hr");
    cartItemCard.classList.add("cart-item-card");
    cartItemCard.id = `${productId}`;
    hr.classList.add("cart-divider");
    cartItemCard.hrElement = hr;
    cartItemCard.innerHTML = cartItemCard.innerHTML+
    `<div class="cart-item-info">
        <dt>${product.name}</dt>
            <dd>
                <p class="quantity"><span>${1}x</span></p>
                <p class="unitPrice">@$${product.price.toFixed(2)}</p>
                <p class="priceAcum"><b>$${product.price.toFixed(2)}</b></p>
            </dd>
     </div>
     <button class="btnDeletCartItem">
        <img src="./assets/images/icon-remove-item.svg" alt="icon-remove-item">
     </button>
     </div>`
     ;
    cartItemCard.querySelector(".btnDeletCartItem").addEventListener("click", async() => {
        deleteCart(productId);
        console.log("Producto eliminado del carrito");
    }); 
    cartItemList.appendChild(cartItemCard);     
    cartItemList.appendChild(hr);
}
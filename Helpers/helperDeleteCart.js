import { showHidden } from "./helperShowHidden.js"; 
import { setTotal } from "./helperSetTotal.js";
export function  deleteCart(productId) {
    const cartItemList = document.querySelector(".cart-item-list");
    const cartItemCard = cartItemList.querySelector(`[id='${productId}']`);
    if (!cartItemList || !cartItemCard) {
        console.log("El producto no encontrado");
        return;
    }
    cartItemList.removeChild(cartItemCard);
    cartItemList.removeChild(cartItemCard.hrElement);
    showHidden("BtnAddCart", "flex", productId);
    showHidden("quantityControls", "none", productId);
    setTotal();
    if(cartItemList.children.length === 0){
        showHidden("cartList", "none");
        showHidden("cartListEmpty", "flex");
    }

}
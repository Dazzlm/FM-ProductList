
import {deleteCart} from "../Helpers/helperDeleteCart.js";

export function closeModal(){

    const modal = document.querySelector(".modal");
    const modalContent = document.getElementById("modalContent");
    modalContent.removeChild(modal);
    modal.style.display = "none";
    modalContent.style.display = "none";
    const cartItemList = document.querySelector(".cart-item-list");
    const cartItemCard = cartItemList.querySelectorAll(".cart-item-card");

    cartItemCard.forEach((card) => {
       deleteCart(card.id);
    });
    
}

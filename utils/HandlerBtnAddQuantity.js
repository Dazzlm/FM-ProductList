import { addCart } from "../Helpers/helperAddCart.js";
import { deleteCart } from "../Helpers/helperDeleteCart.js";
import {showHidden}from "../Helpers/helperShowHidden.js";
import {setQuantityItemCart} from "../Helpers/helperSetQuantityItemCart.js";
import { setTotal } from "../Helpers/helperSetTotal.js";
export function  handlerBtnAddQuantity() {
    document.querySelectorAll(".menu-item-card").forEach((card) => {
        const addToCartBtn = card.querySelector(".Btn-AddToCart");
        const quantityElement = card.querySelector(".quantity");
        const increaseBtn = card.querySelector(".increaseQuantity");
        const decreaseBtn = card.querySelector(".decreaseQuantity");

        addToCartBtn.addEventListener("click", async() => {
            showHidden('BtnAddCart','none',card.id);
            showHidden('quantityControls','flex',card.id);
            await addCart(card.id);
            showHidden('cartListEmpty','none');
            showHidden('cartList','flex');
            setTotal();
        });

        increaseBtn.addEventListener("click", () => {
            const quantity = parseInt(quantityElement.textContent) + 1;
            quantityElement.textContent = quantity;
            setQuantityItemCart(card.id,quantity);
            setTotal();
        });

        decreaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);

            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                setQuantityItemCart(card.id,quantity - 1);
                setTotal();
            } else {
                deleteCart(card.id);
                showHidden('quantityControls','none',card.id);
                showHidden('BtnAddCart','flex',card.id);
            }
            
        });

        
    });
}
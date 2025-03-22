import { closeModal } from "../modalOrderConfirmed/scriptModal.js";
import { fetchProducts } from "../Helpers/helperFetchProducts.js";
import{renderOrderDetails} from "../Helpers/helperRenderOrderDetails.js";

async function loadModalContent() {
    const response = await fetch("modalOrderConfirmed/modal.html");
    return response.text();
}

export function BtnStarOrder() {

    const BtnStarOrder = document.querySelector(".confirmOrder");

    BtnStarOrder.addEventListener("click", async ()  => {
        
        const products = await fetchProducts();
        const modalHTML = await loadModalContent();

        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = modalHTML;

        const cartItemList = document.querySelector(".cart-item-list");
        const cartItemCard = cartItemList.querySelectorAll(".cart-item-card"); 
        
        renderOrderDetails(cartItemCard,products);

        document.getElementById("totalmodal").textContent ="$"+document.getElementById("ordertotal").textContent.replace("$", "");
        modalContent.querySelector(".BtnStarOrder").addEventListener("click", closeModal);
        modalContent.style.display = "flex";
    });
}

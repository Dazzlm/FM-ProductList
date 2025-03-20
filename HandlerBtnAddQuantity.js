
export function  handlerBtnAddQuantity() {
    document.querySelectorAll(".menu-item-card").forEach((card) => {
        const addToCartBtn = card.querySelector(".Btn-AddToCart");
        const quantityControls = card.querySelector(".quantity-controls");
        const quantityElement = card.querySelector(".quantity");
        const increaseBtn = card.querySelector(".increaseQuantity");
        const decreaseBtn = card.querySelector(".decreaseQuantity");

        addToCartBtn.addEventListener("click", () => {
            addToCartBtn.style.display = "none"; // Ocultar "Add to Cart"
            quantityControls.style.display = "flex";
            console.log(card.id); // Mostrar controles
        });

        increaseBtn.addEventListener("click", () => {
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            console.log(card.id);
        });

        decreaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);

            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
            } else {
                quantityControls.style.display = "none"; // Ocultar controles
                addToCartBtn.style.display = "flex"; // Mostrar "Add to Cart"
            }
            console.log(card.id);
        });

        
    });
}
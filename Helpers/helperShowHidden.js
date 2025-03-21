
export function showHidden(element,sh, id = ""){
    
    if(sh !== 'none' && sh !== 'flex'){
        console.log("Valor incorrecto");
        return;

    }
    const menuItemList = document.querySelector(".menu-item-list");
    const card = menuItemList.querySelector(`[id="${id}"]`);
    
    switch(element){
        case 'BtnAddCart':
            const addToCartBtn = card.querySelector(".Btn-AddToCart");
            addToCartBtn.style.display = sh;
            card.querySelector("img").classList.remove("menu-item-card-img-select");
            if(sh === 'none'){
                card.querySelector("img").classList.add("menu-item-card-img-select");
            }
             
            break;
        case 'quantityControls':
            const quantityControls = card.querySelector(".quantity-controls");
            quantityControls.style.display = sh;
            quantityControls.querySelector(".quantity").textContent = 1;
            break;
        case 'cartList':
            document.querySelector(".cart-item-list").style.display = sh;
            document.querySelector(".cart-total").style.display = sh;
            break;
        case 'cartListEmpty':
            document.querySelector(".cart-item-list-empty").style.display = sh;
            break;
        default:
            console.log("Elemento no encontrado");
            break;
    }
}
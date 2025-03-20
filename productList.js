import { fetchProducts } from "./helperFetchProducts.js";

export async function productList(){

    const menuItemList = document.querySelector(".menu-item-list");
    menuItemList.innerHTML = "";
    const products = await fetchProducts();
     products.forEach((product,index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("menu-item-card");
        productCard.id = `Card${index}`; 

        productCard.innerHTML = `
        
          <img  src="${product.image.desktop}" alt="${product.name}">
          <button class="Btn-AddToCart" ><img src="/product-list-with-cart-main/assets/images/icon-add-to-cart.svg" alt="addCart"></img>Add to
            Cart</button>
          <div class="quantity-controls" style="display:none ;">
            <button class="decreaseQuantity">-</button>
            <span class="quantity">1</span>
            <button class="increaseQuantity">+</button>
          </div>
          <p>${product.category}</p>
          <h3>${product.name}</h3>
          <h4>$${product.price.toFixed(2)}<h4>
        `;

        menuItemList.appendChild(productCard);
    });

    

}

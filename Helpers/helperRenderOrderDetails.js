
export function renderOrderDetails(cartItemCard, products) {
    const itemlist = document.querySelector(".item-list");

    cartItemCard.forEach((card) => {
        const product = products[card.id];
        const quantity = card.querySelector(".quantity span").textContent.replace("x", "");
        const unitPrice = card.querySelector(".unitPrice").textContent.replace("@$", "");
        const priceAcum = card.querySelector(".priceAcum b").textContent.replace("$", "");

        // Crear el detalle del producto
        const itemdetail = document.createElement("div");
        const hr = document.createElement("hr");
        itemdetail.classList.add("item-detail");
        itemdetail.id = `${card.id}`;
        hr.classList.add("modalhr");

        itemdetail.innerHTML = `
            <img src="${product.image.desktop}" alt="${product.name}">
            <div class="product-detail">
                <dt>${product.name}</dt>
                <dd>
                    <p class="quantity"><span>${quantity}x</span></p>
                    <p class="unitPrice">@$${unitPrice}</p>
                </dd>
            </div>
            <p class="priceAcum"><b>$${priceAcum}</b></p>
        `;

        itemlist.appendChild(itemdetail);
        itemlist.appendChild(hr);
    });
}

export function renderCards(cards) {
    const grid = document.getElementById("card-grid");
    grid.innerHTML = "";
  
    cards.forEach(card => {
      const el = document.createElement("div");
      el.className = "card";
  
      el.innerHTML = `
        <div class="image-scroll">
          ${card.images.map(img => `<img src="${img}" alt="${card.name}" />`).join("")}
        </div>
  
        <div class="card-info">
          <h3>${card.name}</h3>
          <p class="set">${card.set} • ${card.number}</p>
          <p class="meta">${card.rarity} • ${card.condition}</p>
          <p class="price">$${card.price.toFixed(2)}</p>
  
          <button
            class="snipcart-add-item"
            data-item-id="${card.id}"
            data-item-price="${card.price}"
            data-item-url="https://acetated-hannelore-germinatively.ngrok-free.dev/"
            data-item-description="${card.rarity}, ${card.condition}"
            data-item-image="${card.images[0]}"
            data-item-name="${card.name}"
            data-item-quantity="1"
            data-item-min-quantity="1"
            data-item-max-quantity="1">
            Buy
          </button>
        </div>
      `;
  
      grid.appendChild(el);
    });
  }
  
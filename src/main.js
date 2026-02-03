import "./style.css";
// import { inventory } from "./inventory";
import { renderCards } from "./cards";

// Entry point
function init() {
  renderCards();
}

document.addEventListener("snipcart.ready", () => {
  updateCartCount();

  Snipcart.events.on("item.added", updateCartCount);
  Snipcart.events.on("item.removed", updateCartCount);
  Snipcart.events.on("cart.confirmed", updateCartCount);
});

function updateCartCount() {
  const cartCountEl = document.getElementById("cart-count");
  if (!cartCountEl) return;

  const count = Snipcart.store.getState().cart.items.count;

  cartCountEl.textContent = count;

  if (count > 0) {
    cartCountEl.classList.remove("hidden");
  } else {
    cartCountEl.classList.add("hidden");
  }
}

init();

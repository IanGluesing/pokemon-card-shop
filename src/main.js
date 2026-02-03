import "./style.css";
import { inventory } from "./inventory";
import { renderCards } from "./cards";

// Entry point
function init() {
  renderCards(inventory);
}

init();

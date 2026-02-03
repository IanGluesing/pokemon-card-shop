import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// load JSON the old-fashioned way
const inventory = JSON.parse(fs.readFileSync(join(__dirname, "./inventory.json"), "utf-8"));

const html = inventory.map(card => `
<div id="snipcart-buttons" style="display:none">
  <button class="snipcart-add-item"
          data-item-id="${card.id}"
          data-item-name="${card.name}"
          data-item-price="${card.price}"
          data-item-url="https://pokemon-card-shop-omega.vercel.app/"
          data-item-description="${card.rarity}, ${card.condition}"
          data-item-image="${card.images[0]}"
          data-item-quantity="1"
          data-item-min-quantity="1"
          data-item-max-quantity="1">
  </button>
</div>
`).join("\n");

fs.writeFileSync(join(__dirname, "../public/snipcart-products.html"), html);

console.log("Snipcart buttons generated!");

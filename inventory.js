// inventory.js

// Function to add an item
function addItem(item) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  if (inventory[item]) {
    inventory[item]++;
  } else {
    inventory[item] = 1;
  }
  localStorage.setItem("inventory", JSON.stringify(inventory));
  renderInventory(); // optional: update display immediately
}

// Function to render inventory in container
function renderInventory() {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  const itemIcons = {
    hp: "/assets/hp.png",
    firstSword: "assets/weapons/firstSword.avif",
    greatSword: "assets/weapons/greatSword.jpeg",
    firstArmor: "/assets/firstArmor.webp",
    gloryArmor: "/assets/gloryArmor.webp",
    medallion: "/assets/medallion.png"
  };

  let container = document.getElementById("inventory");
  if (!container) return;
  container.innerHTML = "";

  if (Object.keys(inventory).length === 0) {
    container.innerHTML = "<p>(empty)</p>";
  } else {
    for (let item in inventory) {
      let slot = document.createElement("div");
      slot.className = "slot";

      let img = document.createElement("img");
      img.src = itemIcons[item];
      img.alt = item;
      slot.appendChild(img);

      let count = document.createElement("div");
      count.className = "count";
      count.textContent = inventory[item];
      slot.appendChild(count);

      container.appendChild(slot);
    }
  }
}

// Automatically render inventory on page load
document.addEventListener("DOMContentLoaded", () => {
  renderInventory();
});

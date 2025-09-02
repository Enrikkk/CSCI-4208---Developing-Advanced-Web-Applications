// This file will be created to model our inventory in a way that 
// we don't have to create a super long url, like we did in the labs.

// Function to check if the inventory is empty.
function inventoryEmpty() {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  return Object.keys(inventory).length == 0;
}

// Function to add an item to the inventory.
function addItem(item, quantity) {
  // With the localStorage.getItem function we read the inventory string stored in the brower.
  // The JSON.parse is to convert it to a JavaScript object and, the "|| {}" part is 
  // to create a new object in case this "inventory" object doesn't exists already.
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  if (inventory[item]) { // If item exists, increase.
    inventory[item] += quantity;
  } else {
    inventory[item] = quantity; // If it doesn't exist, we add it.
  }

  // Here, with JSON.stringify we convert the inventory back to string and, with 
  // localStorage.setItem, we save it back in the browser permanently.
  localStorage.setItem("inventory", JSON.stringify(inventory));
  renderInventory(); // Here we just update the inventory's display in the screen.
}

// This function will be to remove an amount of items from the inventory.
// For example, this will be used to show how our characters loose life when they get attacked.
// IMPORTANT - This function will maintain the object's key in the inventory 
// even if it's amount is now 0.
function removeItem(item, quantity) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  if(inventory[item] <= quantity) {
    inventory[item] = 0;
  } else {
    inventory[item] -= quantity;
  }

  // Update the inventory's content and re-render it.
  localStorage.setItem("inventory", JSON.stringify(inventory));
  renderInventory();
}

// This function will delete an item from the inventory, even it's key, 
// so the item won't appear in the iventory anymore, not even with 0 units of it.
function deleteItem(inventory, item) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};
  delete inventory[item];
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

// We are going to create a function to check the amount one item class in the inventory.
function amountItem(item) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};

  return inventory[item];
}

// Now, we are going to create a function to empty the inventory, so that it is 
// reseted whenever the character dies.
function emptyInventory() {

  let inventory = JSON.parse(localStorage.getItem("inventory"));

  for(let item in inventory) {
    delete inventory[item];
  }

  localStorage.setItem("inventory", JSON.stringify(inventory));
}

// Function to remove inventory and head back to index.html, like if the game has just started.
function gameOver() {
  emptyInventory();
  window.location.href = "index.html";
}

// Function to render inventory in the designed container.
function renderInventory() {

  // Get the inventory string and convert it into a js object, as before.
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};

  // Icons used for the different objects that can be obtained.
  // IMPORTANT - Add paths without the "/" before, or else these won't be relative 
  // and imaged won't be detected.
  const itemIcons = {
    hp: "assets/hp.png",
    firstSword: "assets/weapons/firstSword.avif",
    greatSword: "assets/weapons/greatSword.jpeg",
    firstArmor: "assets/firstArmor.webp",
    gloryArmor: "assets/gloryArmor.webp",
    medallion: "assets/medallion.png"
  };

  // Used to find the "div" in HTML where we want to render out inventory.
  let container = document.getElementById("inventory");

  // If a place to render the inventory hasn't been asigned, then we return, not rendering anything,
  if (!container) return;

  // Used to clear the inventory (div container) before rendering, so items don't duplicate.
  container.innerHTML = "";

  // If the inventory is empty, we just print a new paragraph saying it's empty.
  if (Object.keys(inventory).length === 0) {
    container.innerHTML = "<p>(empty - no items at the moment)</p>";
  } else {
    // If there is any item, we just render it.
    for (let item in inventory) {
      // We create the div block that will contain the item slot.
      let slot = document.createElement("div");
      slot.className = "slot"; // CSS stiling.

      let img = document.createElement("img"); // Create the item's "img" block.
      img.src = itemIcons[item]; // Image source.
      img.alt = item; // Image name.
      slot.appendChild(img); // Append image in slot.

      // Creates a "div" block to show how many units of this item we have.
      let count = document.createElement("div");
      count.className = "count";
      count.textContent = inventory[item];
      slot.appendChild(count); // Append count into slot.

      container.appendChild(slot); // Append slot in container (inventory bar) .
    }
  }
}

// Automatically render inventory when a new page is loaded.
document.addEventListener("DOMContentLoaded", () => {
  renderInventory();
});

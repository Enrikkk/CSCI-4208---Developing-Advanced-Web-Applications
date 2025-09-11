# 🏰 Triple Adventure
### *A Text-Based Fantasy Adventure Game*

# 👤👤👤 Authors
- **Kyle Lofredo** - [chew-Lo]
- **Enrique Hernández** - [Enrikkk]
- **Kevin Galvez** - [kfgalvez]

[![Play Game](https://img.shields.io/badge/Play-Game-brightgreen?style=for-the-badge&logo=unity&logoColor=white)](https://enrikkk.github.io/Adv_Web_Apps_Project1_HTML-CSS-Game/)


## 📖 Overview

**Triple Adventure** is an immersive text-based adventure game that transports players into a rich fantasy world. Choose your destiny as a valiant **Knight** ⚔️, skilled **Archer** 🏹, or mystical **Wizard** 🧙‍♂️, each offering unique gameplay experiences, challenges, and storylines.

### ✨ Key Features

- 🎭 **Three Unique Character Paths** - Each with distinct gameplay mechanics
- 💼 **Persistent Inventory System** - Progress saved through URL parameters
- 🎯 **Interactive Decision Making** - Your choices shape the adventure
- 🧩 **Puzzle & Combat Elements** - Riddles, battles, and strategic challenges
- 🎨 **Rich Visual Experience** - Dynamic backgrounds and animations
- ❤️ **Health & Item Management** - Strategic resource management
- 🏆 **Multiple Endings** - Replayability with different outcomes

---

## ⚙️ Development
 - The game has 3 different paths to follow, each developed by a different member of the team.
     - Knight Path - Enrikkk
     - Archer Path - chew-Lo
     - Wizard Path - kfgalvez

 - The main set of files (code, assets, ...) is in the "html_files" folder. Additional to this, you can find additional folders, in which you can find
   the corresponding individual paths of the game.
 - The game can be fully played through the execution of de index.html file (or by pressing the "Play Game" button at the beginning of this file.

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No additional installations required!

### How to Play
1. 📂 **Open** `index.html` in your web browser
2. 🎭 **Select** your character path from the main menu
3. 🖱️ **Navigate** using interactive buttons
4. 💼 **Manage** your inventory and resources
5. 🧩 **Solve** puzzles and defeat enemies to progress

> **Note:** All game files are stored in the root directory. The folders (assets, styles, etc.) contain supporting resources like images and CSS files.

---

## 🎭 Character Paths

### ⚔️ Knight Path
> *"Honor, courage, and steel guide your quest"*

**Story Focus:** Epic quest to defeat the darklord and save the realm

**Key Features:**
- 🏰 Castle exploration and royal encounters
- ⚔️ Combat training and weapon mastery
- 🧩 Puzzle solving (sword lifting, ancient riddles)
- 🛡️ Equipment progression system
- 👑 Audience with the King

**Inventory:** Health potions, weapons, special artifacts

**Locations:** Castle cortyard, training academy, royal garden, dark valley, darklord's lair

---

### 🏹 Archer Path
> *"Precision, stealth, and nature's wisdom"*

**Story Focus:** Combat-intensive adventure with stat progression

**Key Features:**
- 🎯 Target practice mini-games
- 🦌 Hunting and wilderness survival
- ⚔️ Strategic combat encounters
- 📊 Detailed stat management (HP, Attack Damage)
- 🔑 Key collection mechanics

**Inventory:** Health points (HP), Attack Damage (AD), Keys

**Locations:** Jungle camps, training grounds, mysterious caves, battle arenas

---

### 🧙‍♂️ Wizard Path
> *"Magic, knowledge, and arcane power"*

**Story Focus:** Spell-based gameplay with complex magic systems

**Key Features:**
- 📚 Book battles
- ⚗️ Potion brewing and alchemy
- 🐉 Epic dragon boss battle
- 🔮 Spell combat system
- 📜 Ancient curse mechanics

**Inventory:** Gold Pieces (GP), Health Points (HP), Attack Power (AP), Magical Keys

**Journey Progression:**
1. 🏠 **Wizard's Dorm** - Humble beginnings (HP: 5, AP: 2)
2. 📚 **Library** - Battle possessed books for keys
3. ⚗️ **Alchemy Lab** - Brew strength potions
4. 🏛️ **Courtyard** - Face the corrupted ogre
5. 🧩 **Puzzle Room** - Solve ancient riddles
6. 👻 **Cursed Chamber** - Collect cursed artifacts
7. 🐉 **Dragon's Lair** - Final epic confrontation

---

## 📁 Project Structure

```
Triple Adventure/
├── 🏠 index.html                    # Main menu & game entry point
├── 📂 styles/                       # Global styling
│   └── styles.css
├── 📂 archer_asset                 #images
├── 📂 Diagram                      # Game Diagram
├── 📂 assets/                       # Shared game resources
│   ├── weapons/                     # Weapon imagery
│   ├── landscapes/                  # Background images
│   └── ...
├── ⚔️ knight_path/                  # Knight adventure files
│   ├── knight_academy.html            # Training academy
│   ├── knight_darklord.html         # Final boss battle
│   ├── knight_darkValley.html       # Dark valley area
│   ├── knight_deadTroll.html       # Post-troll victory
│   ├── knight_door.html             # Sealed door puzzle
│   ├── knight_enter.html           # Castle courtyard
│   ├── knight_entrance.html         # Castle gates
│   ├── knight_garden.html           # Royal garden
│   ├── knight_king.html             # Royal audience
│   ├── knight_knight.html          # Character introduction
│   ├── knight_liftedSword.html     # Post-sword achievement
│   ├── knight_main.html             # Darklord's castle
│   ├── knight_menu.html            # Knight path selection
│   ├── knight_pass.html            # Alternative ending
│   ├── knight_rest.html            # Rest area
│   ├── knight_sneak.html            # Stealth approach
│   ├── knight_sword.html           # Sword lifting trial
│   ├── knight_training.html        # Combat training
│   ├── knight_trap.html            # Trap encounter
│   └── knight_troll.html           # Epic troll battle 
│   └── inventory.js                # Inventory management
├── 🏹 archer_path/                  # Archer adventure files
│   ├── archer_styles/              # Archer-specific styling
│   ├── archer_assets/              # Archer resources
│   ├── archer_Path.html            # Starting point
│   ├── archer_Training.html        # Combat training
│   ├── target[1-3].html           # Target practice
│   ├── archer_Battle.html          # Combat encounters
│   └── archer_inventory.html       # Stats management
│   └── archer_Trail.html            # straight to monster or deer
│   └── archer_Key.html              # defeated monster
│   └── archer_rest.html            # defeated deer +level
│   └── archer_Deer.html            # Hunting
│   └── archer_Cave.html            # cave entrance
│   └── archer_Death.html           # death page
│   └── archer_inventory.html       # Stats management
└── 🧙‍♂️ wizard_path/                # Wizard adventure files
    ├── wizard-styles/              # Wizard-specific styling
    ├── wizard_wizardPath.html      # Wizard's quarters
    ├── wizard_library.html         # Magical library
    ├── wizard_alchemylab.html      # Potion brewing
    ├── wizard_courtyard.html       # Ogre encounter
    ├── wizard_puzzle-door.html     # Riddle chamber
    ├── wizard_boss.html            # Dragon battle
    └── wizard_inventory.html       # Magic item tracking
```

---

## ⚙️ Technical Details

### 🛠️ Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Data Persistence:** URL Parameters
- **Styling:** Custom CSS with animations
- **Compatibility:** All modern browsers

### 💾 Inventory Systems

| Path | System Type | Features |
|------|------------|----------|
| ⚔️ Knight | JavaScript-based | `addItem()`, `removeItem()`, `renderInventory()` |
| 🏹 Archer | HTML iframe display | Real-time stat visualization |
| 🧙‍♂️ Wizard | Hybrid JS/HTML | Complex multi-stat management |

### 🔧 Core Functions
```javascript
// Knight inventory management
addItem(item, quantity)      // Add items to inventory
removeItem(item, quantity)   // Remove specific quantities
deleteItem(item)            // Completely remove item type
amountItem(item)            // Check current quantity
renderInventory()           // Update display
```

---

## 🌐 Browser Compatibility

| Feature | Requirement |
|---------|-------------|
| JavaScript | ES6+ Support |
| CSS | CSS3 Features |
| HTML | HTML5 Standard |
| APIs | URLSearchParams |

**Tested Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

### 🐛 Known Issues
- Inventory state resets on page refresh
- Limited mobile touch optimization

---

## 🎓 Educational Context

**Course:** CSCI-4208 - Developing Advanced Web Applications  
**Focus Areas:**
- Client-side JavaScript programming
- State management without databases
- Interactive web design principles
- Game development fundamentals

---

## 🎮 Tips for Players

### ⚔️ Knight Path Tips
- Try dancing some salsa to the troll!
- Choose wisely once you get to the dark lord's castle

### 🏹 Archer Path Tips
- Practice target shooting to improve accuracy
- Manage HP carefully in combat

### 🧙‍♂️ Wizard Path Tips
- Brew potions early to increase attack power
- Save cursed items for the final battle

---

*Happy adventuring! May your choices lead to glory!* ⚔️🏹🧙‍♂️

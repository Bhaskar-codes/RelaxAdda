
const products = window.products = [
  {
    image: "files/Cappuccino High Strength Professional Flavouring_.jpg",
    title: "Classic Cappuccino",
    description: "Rich espresso topped with steamed milk and soft foam.",
    price: 149,
    category: "Coffee"
  },
  {
    image: "files/Creamy Cold Coffee ☕🍨_.jpg",
    title: "Cold Coffee",
    description: "Chilled, creamy coffee blended for a refreshing sip.",
    price: 159,
    category: "Coffee"
  },
  {
    image: "files/optimized/download-10.jpg",
    title: "Caramel Latte",
    description: "Smooth latte finished with sweet caramel notes.",
    price: 179,
    category: "Coffee"
  },
  {
    image: "files/Mocha.jpg",
    title: "Mocha Delight",
    description: "Espresso, chocolate and milk in one cozy cup.",
    price: 189,
    category: "Coffee"
  },
  {
    image: "files/amricano.jpg",
    title: "Americano",
    description: "Bold espresso stretched with hot water for a clean taste.",
    price: 129,
    category: "Coffee"
  },
  {
    image: "files/𝗛𝗔𝗭𝗘𝗟𝗡𝗨𝗧 𝗠𝗢𝗖𝗛𝗔 𝗠𝗜𝗟𝗞𝗦𝗛𝗔𝗞𝗘 Shake, shake, shake it!  Speaking of shaking and mixing, have you ever combined hazelnut and mocha flavors_ If….jpg",
    title: "Hazelnut Frappe",
    description: "Icy coffee blended with hazelnut and cream.",
    price: 199,
    category: "Coffee"
  },
  {
    image: "files/Triple Cheese Burst Pizza 🍕.jpg",
    title: "Cheezy Pizza",
    description: "Crispy base loaded with cheese, herbs and sauce.",
    price: 249,
    category: "Snacks"
  },
  {
    image: "files/download (13).jpg",
    title: "Creamy Pasta",
    description: "Pasta tossed in a creamy sauce with herbs.",
    price: 199,
    category: "Snacks"
  },
  {
    image: "files/Delicious Sandwiches for Dinner Ideas.jpg",
    title: "Veggie Sandwich",
    description: "Grilled sandwich packed with veggies and cheese.",
    price: 139,
    category: "Snacks"
  },
  {
    image: "files/download (14).jpg",
    title: "Loaded Fries",
    description: "Crispy fries topped with cheese, herbs and sauces.",
    price: 159,
    category: "Snacks"
  },
  {
    image: "files/This air fryer garlic bread is quick, easy, and so crispy! The best part is, you can have it ready to go in less than 10 minutes_.jpg",
    title: "Garlic Bread",
    description: "Toasted bread with garlic butter and melted cheese.",
    price: 119,
    category: "Snacks"
  },
  {
    image: "files/paneer roll.jpg",
    title: "Paneer Wrap",
    description: "Soft wrap filled with spiced paneer and fresh veggies.",
    price: 179,
    category: "Snacks"
  },
  {
    image: "files/Chocolate brownies 😋😋.jpg",
    title: "Chocolate Brownie",
    description: "Warm, fudgy brownie with deep chocolate flavor.",
    price: 129,
    category: "Desserts"
  },
  {
    image: "files/Elegant White Chocolate Blueberry Cheesecake.jpg",
    title: "Blueberry Cheesecake",
    description: "Creamy cheesecake topped with blueberry compote.",
    price: 219,
    category: "Desserts"
  },
  {
    image: "files/Eggless Tiramisu Trifle Cups.jpg",
    title: "Tiramisu Cup",
    description: "Coffee-soaked dessert layered with cream and cocoa.",
    price: 199,
    category: "Desserts"
  },
  {
    image: "files/choclates waffles.jpg",
    title: "Chocolate Waffle",
    description: "Crispy waffle served with ice cream and chocolate.",
    price: 229,
    category: "Desserts"
  },
  {
    image: "files/Molten Lava Chocolate Cake Recipe _ Easy Dessert Instructions _ Download_.jpg",
    title: "Choco Lava Cake",
    description: "Soft cake with a molten chocolate center.",
    price: 149,
    category: "Desserts"
  },
  {
    image: "files/Пончики и шоколад.jpg",
    title: "Donut Box",
    description: "Assorted soft donuts with sweet toppings.",
    price: 179,
    category: "Desserts"
  },
  {
    image: "files/Deep Red Hibiscus Berry Mocktail Recipe _ Elegant Non-Alcoholic Party Drink.jpg",
    title: "Berry Mocktail",
    description: "Fresh berry drink with a bright sparkling finish.",
    price: 109,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/Mojito 🍹.jpg",
    title: "Mint Mojito",
    description: "Cool mint, lemon and soda for a refreshing lift.",
    price: 119,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/Easy Virgin Piña Colada Cocktail Recipes For A Refreshing Treat.jpg",
    title: "Virgin Pina Colada",
    description: "Creamy pineapple and coconut mocktail.",
    price: 159,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/lemon tea.jpg",
    title: "Iced Lemon Tea",
    description: "Cold tea with lemon, sweetness and a crisp finish.",
    price: 99,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/CASTLE101 ⚜️ MANGO MILKSHAKE 🥭🍹.jpg",
    title: "Mango Cooler",
    description: "Sweet mango drink served chilled with ice.",
    price: 129,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/Watermelon Breeze Cocktail 🍉.jpg",
    title: "Watermelon Fizz",
    description: "Juicy watermelon mixed with soda and lime.",
    price: 139,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/café caramelo.jpg",
    title: "RelaxAdda Special Coffee",
    description: "Our signature coffee with chocolate and caramel.",
    price: 229,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 27, 2026, 07_15_51 PM.png",
    title: "Couple Combo",
    description: "Two coffees with fries and a brownie to share.",
    price: 499,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 27, 2026, 07_16_47 PM.png",
    title: "Adda Platter",
    description: "Pizza slices, garlic bread, fries and dips.",
    price: 599,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 27, 2026, 07_00_27 PM.png",
    title: "Midnight Cravings Box",
    description: "Pasta, sandwich, brownie and a chilled drink.",
    price: 649,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 27, 2026, 07_02_54 PM.png",
    title: "Work Mode Combo",
    description: "Americano, sandwich and brownie for long work hours.",
    price: 349,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 27, 2026, 07_04_52 PM.png",
    title: "Celebration Combo",
    description: "Pizza, mocktails and dessert for a small group.",
    price: 799,
    category: "RelaxAdda Special"
  }
];

const grid  = document.querySelector(".menu-grid")
// console.log(grid);

const buttons = document.querySelectorAll(".l-left a")

function card(product) {
    return `  <div class="list-card" data-category="${product.category}">
            
            <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async">
            
            <div class="list-card-text">
            
            <p>${product.category}</p>
            
            <h3 class="title"> ${product.title}</h3>
            
            <span>${product.description}</span>
            
            <strong>
                <span class="price"><i class="fa-solid fa-indian-rupee-sign"></i>${product.price}</span>
                <span class="add-icon" data-title="${product.title}">
                    <i class="fa-solid fa-plus"></i>
                </span>
            </strong>
            
            </div>
            
            </div>
            `
}
function renderProducts(list){
  if(!grid){
    return;
  }
  grid.innerHTML = ""

  list.forEach((product) => {
    grid.innerHTML += card(product)
  });
}
if(grid){
renderProducts(products)
}



// for menu section product  products
const homeMenuGrid = document.querySelector(".Menu-right .cards");
const homeMenuButtons = document.querySelectorAll(".home-menu-filter");
const homeMenuProducts = window.products || [];

  
const randomHomeProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
    function homeMenuCard(product) {
    return `
        <div class="card show" data-category="${product.category}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async">
            <i class="fa-regular fa-heart"></i>
            <div class="tcard">
               <h2 class="title">${product.title}</h2>
                <p>${product.description}</p>
                <p id="rate">
                   <span class="price">
    <i class="fa-solid fa-indian-rupee-sign"></i>${product.price}
</span>
                    <span class="add-icon"><i class="fa-solid fa-plus"></i></span>
                </p>
            </div>
        </div>
    `;
}
function renderHomeMenu(products) {
    if(!homeMenuGrid){
        return;
    }

    homeMenuGrid.innerHTML = ""
     products.forEach((product) => {
    homeMenuGrid.innerHTML += homeMenuCard(product)
  });
}


function setupfilterButtons(buttonsGroup) {
buttonsGroup.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.textContent
    const filtered = products.filter((product) => {
      return product.category === category
    })
    renderProducts(filtered)
    renderHomeMenu(filtered)
    restoreCardQuantities();
  })

})
}
setupfilterButtons(buttons)
setupfilterButtons(homeMenuButtons)
renderHomeMenu(randomHomeProducts);
    restoreCardQuantities();
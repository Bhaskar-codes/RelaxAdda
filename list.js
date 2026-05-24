const products = window.products = [
  {
    image: "files/Virtuoso Latte.jpg",
    title: "Classic Cappuccino",
    description: "Rich espresso topped with steamed milk and soft foam.",
    price: 149,
    category: "Coffee"
  },
  {
    image: "https://i1-c.pinimg.com/736x/fd/a9/ad/fda9ad56b9d62070fec105cd93693129.jpg",
    title: "Cold Coffee",
    description: "Chilled, creamy coffee blended for a refreshing sip.",
    price: 159,
    category: "Coffee"
  },
  {
    image: "files/download (10).jpg",
    title: "Caramel Latte",
    description: "Smooth latte finished with sweet caramel notes.",
    price: 179,
    category: "Coffee"
  },
  {
    image: "files/download (9).jpg",
    title: "Mocha Delight",
    description: "Espresso, chocolate and milk in one cozy cup.",
    price: 189,
    category: "Coffee"
  },
  {
    image: "files/relax.jpg",
    title: "Americano",
    description: "Bold espresso stretched with hot water for a clean taste.",
    price: 129,
    category: "Coffee"
  },
  {
    image: "files/Virtuoso Latte.jpg",
    title: "Hazelnut Frappe",
    description: "Icy coffee blended with hazelnut and cream.",
    price: 199,
    category: "Coffee"
  },
  {
    image: "https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg",
    title: "Cheezy Pizza",
    description: "Crispy base loaded with cheese, herbs and sauce.",
    price: 249,
    category: "Snacks"
  },
  {
    image: "https://i.pinimg.com/736x/14/de/16/14de167494267101264a4ddf8932f156.jpg",
    title: "Creamy Pasta",
    description: "Pasta tossed in a creamy sauce with herbs.",
    price: 199,
    category: "Snacks"
  },
  {
    image: "files/Boho Patio Ideas for Small Outdoor Spaces.jpg",
    title: "Veggie Sandwich",
    description: "Grilled sandwich packed with veggies and cheese.",
    price: 139,
    category: "Snacks"
  },
  {
    image: "files/Another romantic place to celebrate your moments while in Bali.jpg",
    title: "Loaded Fries",
    description: "Crispy fries topped with cheese, herbs and sauces.",
    price: 159,
    category: "Snacks"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_15_30 PM.png",
    title: "Garlic Bread",
    description: "Toasted bread with garlic butter and melted cheese.",
    price: 119,
    category: "Snacks"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_30_49 PM.png",
    title: "Paneer Wrap",
    description: "Soft wrap filled with spiced paneer and fresh veggies.",
    price: 179,
    category: "Snacks"
  },
  {
    image: "https://i.pinimg.com/736x/0f/ce/b8/0fceb803cfa5ac4ddee46ccd9cf2874b.jpg",
    title: "Chocolate Brownie",
    description: "Warm, fudgy brownie with deep chocolate flavor.",
    price: 129,
    category: "Desserts"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_13_43 PM.png",
    title: "Blueberry Cheesecake",
    description: "Creamy cheesecake topped with blueberry compote.",
    price: 219,
    category: "Desserts"
  },
  {
    image: "files/ChatGPT Image May 16, 2026, 06_12_32 PM.png",
    title: "Tiramisu Cup",
    description: "Coffee-soaked dessert layered with cream and cocoa.",
    price: 199,
    category: "Desserts"
  },
  {
    image: "files/reservation-cafe.png",
    title: "Waffle Sundae",
    description: "Crispy waffle served with ice cream and chocolate.",
    price: 229,
    category: "Desserts"
  },
  {
    image: "files/download (10).jpg",
    title: "Choco Lava Cake",
    description: "Soft cake with a molten chocolate center.",
    price: 149,
    category: "Desserts"
  },
  {
    image: "files/download (9).jpg",
    title: "Donut Box",
    description: "Assorted soft donuts with sweet toppings.",
    price: 179,
    category: "Desserts"
  },
  {
    image: "https://i1-c.pinimg.com/736x/b9/b9/34/b9b934b945ae3f4970a515711964d9d1.jpg",
    title: "Berry Mocktail",
    description: "Fresh berry drink with a bright sparkling finish.",
    price: 109,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/relax.jpg",
    title: "Mint Mojito",
    description: "Cool mint, lemon and soda for a refreshing lift.",
    price: 119,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/Boho Patio Ideas for Small Outdoor Spaces.jpg",
    title: "Virgin Pina Colada",
    description: "Creamy pineapple and coconut mocktail.",
    price: 159,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/Another romantic place to celebrate your moments while in Bali.jpg",
    title: "Iced Lemon Tea",
    description: "Cold tea with lemon, sweetness and a crisp finish.",
    price: 99,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 03_46_04 PM.png",
    title: "Mango Cooler",
    description: "Sweet mango drink served chilled with ice.",
    price: 129,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/WhatsApp Image 2026-05-22 at 16.46.11.jpeg",
    title: "Watermelon Fizz",
    description: "Juicy watermelon mixed with soda and lime.",
    price: 139,
    category: "Drinks & Mocktails"
  },
  {
    image: "files/reservation-cafe.png",
    title: "RelaxAdda Special Coffee",
    description: "Our signature coffee with chocolate and caramel.",
    price: 229,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 16, 2026, 06_12_32 PM.png",
    title: "Couple Combo",
    description: "Two coffees with fries and a brownie to share.",
    price: 499,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_15_30 PM.png",
    title: "Adda Platter",
    description: "Pizza slices, garlic bread, fries and dips.",
    price: 599,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_30_49 PM.png",
    title: "Midnight Cravings Box",
    description: "Pasta, sandwich, brownie and a chilled drink.",
    price: 649,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 05_13_43 PM.png",
    title: "Work Mode Combo",
    description: "Americano, sandwich and brownie for long work hours.",
    price: 349,
    category: "RelaxAdda Special"
  },
  {
    image: "files/ChatGPT Image May 18, 2026, 03_46_04 PM.png",
    title: "Celebration Combo",
    description: "Pizza, mocktails and dessert for a small group.",
    price: 799,
    category: "RelaxAdda Special"
  }
];

const grid = document.querySelector(".menu-grid")
const buttons = document.querySelectorAll(".l-left a")



        function card(product) {
    return `  <div class="list-card" data-category="${product.category}">
            
            <img src="${product.image}" alt="${product.title}">
            
            <div class="list-card-text">
            
            <p>${product.category}</p>
            
            <h3>${product.title}</h3>
            
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

function renderProducts(list) {
    if(!grid){
        return;
    }

    grid.innerHTML = ""

    list.forEach((product) => {
        grid.innerHTML += card(product)
    })
}

if(grid){
    renderProducts(products)
}

buttons.forEach((button) => {
       button.addEventListener("click", () => {
        const category = button.textContent;
        console.log(category);
       
        renderProducts(products.filter((product) => category === product.category))
    })
 })



        

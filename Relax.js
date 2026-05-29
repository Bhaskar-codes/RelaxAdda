const images = document.querySelector(".images");

function autoScroll(){

    images.scrollLeft += 1;

    if(images.scrollLeft >= images.scrollWidth - images.clientWidth){
        images.scrollLeft = 0;
    }
}

if(images){
    setInterval(autoScroll, 8);
}

function showOnScroll(sectionSelector, itemSelector, showClass){
    const section = document.querySelector(sectionSelector);
    const items = document.querySelectorAll(itemSelector);

    if(!section || items.length === 0){
        return;
    }

    const showItems = () => {
            items.forEach((item) => {
                item.classList.add(showClass);
            })
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                showItems();
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px"
    });

    observer.observe(section);
}

showOnScroll("#Menu", ".cards", "show");
showOnScroll("#Events", ".events-text", "show2");
showOnScroll("#Events", ".card2", "show3");
showOnScroll("#About", ".About-Left", "show5");
showOnScroll("#About", ".About-Right > *", "show4");
showOnScroll("#Reservation", ".reservation-header", "show-reservation-header");
showOnScroll("#Reservation", ".R-left", "show-reservation-card");
showOnScroll("#Reservation", ".r-form", "show-reservation-form");
showOnScroll("#Reservation", ".form-field, .r-form button, .safe-note", "show-reservation-field");


 // for cart toggling
const arrbtn = document.querySelector("#Cart span")
const body = document.querySelector("body")

arrbtn.addEventListener("click", () => {
    body.classList.toggle("showcart")
})
// for cart 
const cartlist = document.querySelector("#Cart .cart-list")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// localStorage.clear()
const totalQuantity = document.getElementById("num")

// for save cart 
function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

 function addToCart(title, price){

     // prevent duplicate cart item
    const existingItems = document.querySelectorAll(".cart-item");

    for(let item of existingItems){

        const itemTitle =
            item.querySelector(".title").textContent;

        if(itemTitle === title){
            return;
        }
    }


 const item = document.createElement("div")
 item.classList.add("cart-item")
 item.innerHTML =`
 <h3 class="title">${title}</h3>
 <div class= "add-icon quantity-control">
 <button class="minus">-</button>
 <span class="count">1</span>
 <button class="plus">+</button>
 </div>
 <p class = "price" data-price="${price}"> ${price} </p> 
 `
cartlist.appendChild(item)
}

function resetAddIcon(element) {
    element.classList.remove("quantity-control");
    element.innerHTML = `<i class="fa-solid fa-plus"></i>`;
}
function syncQuantity(title, number){

    const allCards = document.querySelectorAll(
        ".card, .list-card, .cart-item"
    );

    allCards.forEach((card) => {

        const itemTitle =
            card.querySelector(".title")?.textContent;

        if(itemTitle === title){

            // update count
            const count = card.querySelector(".count");

            if(count){
                count.textContent = number;
            }

            // update price
            const priceElement =
                card.querySelector(".price");

            if(priceElement){

                const originalPrice =
                    Number(priceElement.dataset.price);

                priceElement.textContent =
                    `₹${originalPrice * number}`;
            }

        }

    });

}
function updateCartTotal(){
    let total = 0 
    cart.forEach((item)=>{
        total += item.quantity
    })
    totalQuantity.textContent = total
}

document.addEventListener("click", (e) => {
    const element = e.target.closest(".add-icon")
    if(!element){
        return
    }

    if(e.target.closest(".plus")){
        const count = element.querySelector(".count")
        let number = Number(count.textContent)+1;
        count.textContent = number;

        const card = e.target.closest(".card") ||
        e.target.closest(".list-card") ||
        e.target.closest(".cart-item");

        if(!card){
    return;
}
          const title =
            card.querySelector(".title").textContent;

        syncQuantity(title, number);
        const existingProduct = cart.find(
    (item) => item.title === title
)

if(existingProduct){

    existingProduct.quantity = number
}

updateCartTotal()
saveCart()

        return;
    }
    if(e.target.closest(".minus")){
        const count = element.querySelector(".count")
        let number = Number(count.textContent)-1;
         const card =
            e.target.closest(".card") ||
            e.target.closest(".list-card") ||
            e.target.closest(".cart-item");

        if(!card){
            return;
        }

        const title =
            card.querySelector(".title").textContent;
       if(number === 0){
         const allCards = document.querySelectorAll(
        ".card, .list-card, .cart-item"

        
    );

    allCards.forEach((item) => {

        const itemTitle =
            item.querySelector(".title")?.textContent;

        if(itemTitle === title){

            const count =
                item.querySelector(".count");

            if(count){
                count.textContent = 0;
            }

        }

    });
         if(card.classList.contains("cart-item")){
                card.remove();
            }

            // reset all matching cards
              const productCards = document.querySelectorAll(
        ".card, .list-card"
    );

    productCards.forEach((item) => {

        const itemTitle =
            item.querySelector(".title").textContent;

        if(itemTitle === title){

            const addIcon =
                item.querySelector(".add-icon");

            resetAddIcon(addIcon);

        }

    });
cart = cart.filter(
    (item) => item.title !== title
)

updateCartTotal()
saveCart()
    return;
}
        count.textContent = number;
        syncQuantity(title, number);
        const existingProduct = cart.find(
    (item) => item.title === title
)

if(existingProduct){

    existingProduct.quantity = number
}

updateCartTotal()
saveCart()
        return;
    }
    if(!element.classList.contains("quantity-control")){

        element.classList.add("quantity-control");

        element.innerHTML = `
            <button class="minus">-</button>

            <span class="count">1</span>

            <button class="plus">+</button>
        `;
        
        
        
        const card = element.closest(".card")|| element.closest(".list-card")
        const title = card.querySelector(".title").textContent;
        const price = card.querySelector(".price").textContent;
        addToCart(title,price)

        const existingProduct = cart.find(
    (item) => item.title === title
)

if(existingProduct){

    existingProduct.quantity++

}
else{

    cart.push({
        title,
        quantity: 1
    })

}

updateCartTotal()
saveCart()
        
    }


});

// after responsive for mobile

const hamburger = document.querySelector(".navbar span i")
const nav = document.querySelector("nav")
// console.log(nav.);
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
})



const eventCards = document.querySelector(".events-card");

function autoScrollEvents() {
    eventCards.scrollLeft += 1;

    if (
        eventCards.scrollLeft >=
        eventCards.scrollWidth - eventCards.clientWidth
    ) {
        eventCards.scrollLeft = 0;
    }
    // console.log(eventCards.scrollLeft);
    // eventCards.scrollLeft,
    // eventCards.scrollWidth,
    // eventCards.clientWidth

    // console.log("scrolling");
}

setInterval(autoScrollEvents, 15);


eventCards.style.justifyContent = "flex-start";

eventCards.scrollLeft = 100;

console.log(eventCards.scrollLeft);
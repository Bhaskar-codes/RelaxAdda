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

showOnScroll("#Menu", ".card", "show");
showOnScroll("#Events", ".events-text", "show2");
showOnScroll("#Events", ".card2", "show3");
showOnScroll("#About", ".About-Left", "show5");
showOnScroll("#About", ".About-Right > *", "show4");
showOnScroll("#Reservation", ".reservation-header", "show-reservation-header");
showOnScroll("#Reservation", ".R-left", "show-reservation-card");
showOnScroll("#Reservation", ".r-form", "show-reservation-form");
showOnScroll("#Reservation", ".form-field, .r-form button, .safe-note", "show-reservation-field");

const homeMenuGrid = document.querySelector(".Menu-right .cards");
const homeMenuButtons = document.querySelectorAll(".home-menu-filter");
const homeMenuProducts = window.products || [];

function homeMenuCard(product) {
    return `
        <div class="card show" data-category="${product.category}">
            <img src="${product.image}" alt="${product.title}">
            <i class="fa-regular fa-heart"></i>
            <div class="tcard">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p id="rate">
                    <i class="fa-solid fa-indian-rupee-sign"></i>${product.price}
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

    homeMenuGrid.innerHTML = products.map(homeMenuCard).join("");
}

homeMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        const filteredProducts = homeMenuProducts.filter((product) => product.category === category);

        renderHomeMenu(filteredProducts);
    });
});

function resetAddIcon(element) {
    element.classList.remove("quantity-control");
    element.innerHTML = `<i class="fa-solid fa-plus"></i>`;
}

document.addEventListener("click", (e) => {
    const element = e.target.closest(".add-icon");

    if(!element){
        return;
    }

    if(e.target.closest(".plus")){
        const count = element.querySelector(".count");
        count.textContent = Number(count.textContent) + 1;
        return;
    }

    if(e.target.closest(".minus")){
        const count = element.querySelector(".count");
        const number = Number(count.textContent) - 1;

        if(number === 0){
            resetAddIcon(element);
            return;
        }

        count.textContent = number;
        return;
    }

    if(!element.classList.contains("quantity-control")){
        element.classList.add("quantity-control")
        element.innerHTML = `
            <button class="minus">-</button>
            <span class="count">1</span>
            <button class="plus">+</button>
        `;
    }
});

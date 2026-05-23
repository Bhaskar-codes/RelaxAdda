const images = document.querySelector(".images");

function autoScroll(){

    images.scrollLeft += 1;

    if(images.scrollLeft >= images.scrollWidth - images.clientWidth){
        images.scrollLeft = 0;
    }
}

setInterval(autoScroll, 8);

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

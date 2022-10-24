let searchForm = document.querySelector(".search-form");
let navbar = document.querySelector(".navbar");
let filterBtn = document.querySelectorAll(".filter-buttons .buttons");
// Temporary, replace with backend behavior
let filterItem = document.querySelectorAll(".products .box-container .product-box")

// Search icon interaction
function searchFormInteraction(){
    document.getElementById("search-btn").addEventListener("click", (e) => {
        document.getElementById("products").scrollIntoView();
        searchForm.classList.toggle("active");
        navbar.classList.remove("active");
    })
}

// Menu icon iteraction (Only when media query)
function menuIconInteraction(){
    document.getElementById("menu-btn").addEventListener("click", () => {
        navbar.classList.toggle("active");
        searchForm.classList.remove("active");
    })
}

function addSwipperController(){
    let swiper = new Swiper(".home-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}

// function filterInteraction(){
//     console.log(filterBtn);
//     filterBtn.forEach(category => {
//         category.addEventListener("click", () => {
//             filterBtn.forEach((btn) => { btn.classList.remove("active"); }) // Removing active state for all category
//             category.classList.add("active");   // Adding active state for current selected category
// 
//             let dataFilter = category.getAttribute("data-filter");  // Obtaining category filter value
//             filterItem.forEach(product => {
//                 // Default values for all products
//                 product.classList.remove("active");
//                 product.classList.add("hide");
//                 // Filtering
//                 if(product.getAttribute("data-item") == dataFilter || 
//                     dataFilter == "all"){
//                         product.classList.remove("hide");
//                         product.classList.add("active");
//                 }
//             })
//         })
//     })
// }


// Default behavior when scrolling
function behaviorOnScroll(){
    window.onscroll = () => {
        navbar.classList.remove("active");
    }
    window.onclick = (e) => {
        if(e.target.id == "product-container"){
            searchForm.classList.remove("active");
        }
    }

}


export function globalEvents(){
    console.log("Started global interactions...");
    searchFormInteraction();    
    menuIconInteraction();
    addSwipperController();
    behaviorOnScroll();
}
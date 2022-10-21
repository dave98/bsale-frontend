
export function globalEvents(){
    console.log("Started global interactions...");

    let searchForm = document.querySelector(".search-form");
    let navbar = document.querySelector(".navbar");
    
    // Search icon interaction
    document.getElementById("search-btn").addEventListener("click", () => {
        searchForm.classList.toggle("active");
        navbar.classList.remove("active");
    })

    // Menu icon iteraction (Only when media query)
    document.getElementById("menu-btn").addEventListener("click", () => {
        navbar.classList.toggle("active");
        searchForm.classList.remove("active");
    })
    

    // Deleting most added interactions when scrolling
    window.onscroll = () => {
        searchForm.classList.remove("active");
        navbar.classList.remove("active");
    }
}
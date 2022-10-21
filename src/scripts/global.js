
export function globalEvents(){
    console.log("Started global interactions...");
    let searchForm = document.querySelector(".search-form");
    
    document.getElementById("search-btn").addEventListener("click", () => {
        searchForm.classList.toggle("active");
    })
}
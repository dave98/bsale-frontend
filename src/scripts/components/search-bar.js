import STORE from "../contexts/mainContext.js";

function render() {
    return `
        <input type="search" name="" placeholder="Search here..." id="search-box">
        <label for="search-box" class="fas fa-search"></label>       
    `
}

function onChange(event){
    let searchValue = event.target.value;
    STORE.setSearchName(searchValue);
}

function handleChange(){
    let searchInput = document.getElementById("search-box");
    searchInput.addEventListener( "change", onChange);
}

function removeListeners(){
    let searchInput = document.getElementById("search-box");
    searchInput.removeEventListener("change", onChange);
}


const SearchBar = {
    toString: function(){ return render()},
    addListeners: function(){ handleChange() },
    removeListeners: function(){ removeListeners() },
}

export default SearchBar;
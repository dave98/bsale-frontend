import SearchBar from "./scripts/components/search-bar.js";
import STORE from "./scripts/contexts/mainContext.js";
import { DOMHandler } from "./scripts/core/core.js";
import { globalEvents } from "./scripts/core/global.js";


export const categoryContainerDOM = DOMHandler("#category-container");
export const productContainerDOM = DOMHandler("#product-container");
export const searchBarDOM = DOMHandler("#search-product");

async function init(){
    try {
        searchBarDOM.load(SearchBar)
        STORE.fetchCategories();
        STORE.fetchProducts();
    }catch(error){
        console.log("DOM error", error);
    }
}

init()
globalEvents();


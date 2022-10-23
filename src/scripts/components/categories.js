import { categoryContainerDOM } from "../../index.js";
import STORE from "../contexts/mainContext.js";
import { renderCategory } from "./category.js";

function render(){
    return `
        <div class="buttons${STORE.categoryFilter == 0 ? " active" : ""}" data-filter="0">All</div>
        ${ STORE.categories.map(c => {
            return renderCategory(c.name, c.id, STORE.categoryFilter == c.id)
        }).join("")}
    `
}


function onClick(event){
    let selectedCategory = event.target.dataset.filter 
    if(selectedCategory){
        STORE.setCategoryFilter(selectedCategory)
    }
}

function handleClick(){
    const container = document.getElementById("category-container");
    container.addEventListener("click", onClick)
}

function removeListeners(){
    const container = document.getElementById("category-container");
    container.removeEventListener("click", onClick);
    //container.replaceWith(container.cloneNode(true)); // Bug: Deep copy persistent
}

const Categories = {
    toString: function(){return render()},
    addListeners: function (){handleClick()},
    removeListeners: function (){removeListeners()}
}

export default Categories;
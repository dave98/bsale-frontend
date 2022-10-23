import STORE from "../contexts/mainContext.js"
import { renderProduct } from "./product.js"

function render(){
    return `
        ${ STORE.products.map(p => 
            renderProduct(p.name, p.urlImage, p.price, p.discount, p.category.id)
        ).join("")}
    `
}

const Products = {
    toString: function(){ return render() },
    addListeners: function(){},
    removeListeners: function (){},
}

export default Products;
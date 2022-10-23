import { categoryContainerDOM, productContainerDOM } from "../../index.js";
import Categories from "../components/categories.js";
import Products from "../components/products.js";
import { getCategories } from "../services/category-service.js";
import { getProducts } from "../services/product-service.js";

async function fetchCategories(){
    this.categories = await getCategories().catch(() => {return []})
    categoryContainerDOM.load(Categories);
}

async function fetchProducts(){
    this.products = await getProducts(
        this.nameFilter == "" ? null : this.nameFilter, 
        this.categoryFilter == 0 ? null : this.categoryFilter,
    ).catch(() => {return []})
    productContainerDOM.load(Products);
}

async function setCategoryFilter(nfilter){
    this.categoryFilter = nfilter;
    categoryContainerDOM.load(Categories)
    await this.fetchProducts();
}

async function setSearchName(nName){
    this.nameFilter = nName;
    await this.fetchProducts();    
}

const STORE = {
    products: [],
    categories: [],
    categoryFilter: 0, // By default means "All", change based on categoryId.
    nameFilter: "", // Empy nameFilter means no search by name 
    fetchCategories,
    fetchProducts,
    setCategoryFilter,
    setSearchName,
}

export default STORE;

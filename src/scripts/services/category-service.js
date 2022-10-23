import ApiFetch from "./api-fetch.js";

export async function getCategories(){
    return await ApiFetch("category");
}

export async function getCategory(categoryId){
    return await ApiFetch(`category/${categoryId}`);
}
import ApiFetch from "./api-fetch.js";

export async function getProducts(name, category){
    let queryObject = { name: name, category: category }

    let queryBuilder = "product?"
    queryBuilder += Object.keys(queryObject).map((key) => {
        if(queryObject[key]){
            return `${key}=${queryObject[key]}`
        }else{
            return null
        }
    }).join("&").slice(0)

    console.log(queryBuilder);

    return await ApiFetch(queryBuilder);
}

export async function getProduct(productId){
    return await ApiFetch(`product/${productId}`)
}

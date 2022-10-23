export function renderProduct(name, urlImage, price, discount, categoryId){
    return `
        <div class="product-box" data-item=${categoryId}>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="${urlImage}" alt="">
            </div>
            <div class="content">
                <h3>${name}</h3>
                <div class="price">
                    <div class="amount">S/. ${price}</div>
                    <div class="cut">S/.${price}</div>
                    <div class="offer">${discount}% Off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>(50)</span>
                </div>
            </div>
        </div>
    `
}


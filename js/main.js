const products = [{
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },

];


const renderProduct = (title = "title", price = "price") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join("");
}

renderProducts(products);

let btnSumm = document.getElementById("summ");
btnSumm.addEventListener("click", summProducts);
let summ = null;
let inputSumm = document.getElementById("inputText");

function summProducts() {
    for (let i = 0; i < products.length; i++) {
        summ += products[i].price;
    }
    inputSumm.innerHTML = summ;
};
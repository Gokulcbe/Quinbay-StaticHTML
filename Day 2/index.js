let products = [];
const pname = "";
let productcartlist = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productStock = document.getElementById('productStock').value;
    const productPrice = document.getElementById('productPrice').value;
    const productSeller = document.getElementById('productSeller').value;

    const newProduct = {
        productName: productName,
        productCategory: productCategory,
        productStock: productStock,
        productPrice: productPrice,
        productSeller: productSeller
    };

    products.push(newProduct);

    console.log(products)
    document.getElementById('productForm').reset();
    displayProducts(products);
}

function displayProducts(productsToDisplay){

    const productCards = document.getElementById('productCards');
    productCards.innerHTML = '';

    productsToDisplay.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('cart');

        const cardContent = 
        `<div class="card">
                <div class="card-content">
                <button class="cartbutton" onClick="addToCart('${product.productName}')">add</button>
                    <div class="product-image">
                        <img src="../../Downloads/mobile.webp" height="100px" width="100px" alt="Product Image">
                    </div>
                    <div class="product-details">
                        <h2>${product.productName}</h2>
                         <hr class="divider">
                            <div class="detail-row">
                                <span class="detail-key">Category:</span>
                                <span class="detail-value">${product.productCategory}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-key">Stock:</span>
                                <span class="detail-value">${product.productStock}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-key">Price:</span>
                                <span class="detail-value">${product.productPrice}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-key">Seller:</span>
                                <span class="detail-value">${product.productSeller}</span>
                            </div>
                            <div class="stars">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734;</span>
                            </div>
                            <hr class="divider">
                                        <button class="button button2" onClick="print()">View Details</button>
                                    </div>
                                </div>
                </div>`;
            card.innerHTML = cardContent;

            productCards.appendChild(card);
    })

}

function print(){
    console.log("Clicked");
}

function addToCart(productName){
    console.log("cart : " + productName);
    const productCards = document.getElementById('cartCards');
    cartCards.innerHTML = '';

    // productsToDisplay.forEach(product => {
    const cart = document.createElement('div')
    cart.classList.add('cartl');

    // for(int i = 0; )

    // for(int i = 0; i < productcartlist.length; i++){
    //     if(productcartlist.productName==productName){
    //         const productPrice = productcartlist.productPrice;
    //         const productQty = 

    //     }
    // }

    

    const cartContent = `
           
                <div class="inCart">
                    <p>Vivo v20</p>
                    <button class="delete">Delete</button>
                </div>
                <hr class="divider">
                <div class="inCart">
                    <p>Vivo v20</p>
                    <button class="delete">Delete</button>
                </div>
                <hr class="divider">
                <div class="inCart">
                    <p>Vivo v20</p>
                    <button class="delete">Delete</button>
                </div>
                <hr class="divider">
           
    `
    cart.innerHTML = cartContent;

    cartCards.appendChild(cart);
// })
}



function search(){
   const pname = document.getElementById('searchbar').value.toLowerCase();
   const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(pname));
    if(pname==""){
        displayProducts(products);
    } else {
        displayProducts(filteredProducts);
    }
     
}
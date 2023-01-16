//Cart
let cartIcon = document.querySelector('.basket');
let cart = document.querySelector('.cart-right');
let closeCart = document.querySelector('.cart-close');
//Open Cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
//Close Cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
};

//Making Function
function ready(){
    //Remove items from the cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add to Cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //Buy Button Work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
};
//Buy Button
function buyButtonClicked(){
    alert("Ваш заказ успешно оформлен");
    var cartContent = document.getElementsByClassName('cart-right-content')[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
};

//Remove items from the cart
function removeCartItem(event){
    var buttonClicked = event.target;
    var parentClass;
    //Цикл чтобы в svg кликнуть любой path и Корзина не исчезала
    do{
        buttonClicked = buttonClicked.parentElement;
        parentClass = buttonClicked.classList;
    }while(!(parentClass.contains("cart-right-box")));
    buttonClicked.remove();
    updateTotal();
};

//Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
};

//Add to Cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var aTitle = shopProducts.getElementsByClassName('link-img-product')[0];
    var title = aTitle.getElementsByClassName('name-product')[0].innerText;
    // console.log(title);

    var divPrice = shopProducts.getElementsByClassName('price-product')[0];
    var price = divPrice.getElementsByClassName('final-price-product')[0].innerText;
    // console.log(price);

    var divProductImg = aTitle.getElementsByClassName('img-product')[0];
    var productImg = divProductImg.getElementsByClassName('img')[0].src;
    console.log(productImg);
    addProductToCart(title, price, productImg);
    // РОМАН: Открывает правую панель корзины при добавлении товара в корзину
    cart.classList.add("active");
    updateTotal();
};
//
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-right-box");
    var cartItems = document.getElementsByClassName("cart-right-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    
    for (var i = 0; i < cartItemsNames.length; i++){
        console.log(cartItemsNames[i].innerText);
        console.log(title);
        if (cartItemsNames[i].innerText == title){
            alert("Этот товар уже был добавлен в корзину");
            return;
        }    
    }
    var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!--Remove cart-->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve" class="cart-remove">
                            <defs>
                            </defs>
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 64.71 90 H 25.291 c -4.693 0 -8.584 -3.67 -8.859 -8.355 l -3.928 -67.088 c -0.048 -0.825 0.246 -1.633 0.812 -2.234 c 0.567 -0.601 1.356 -0.941 2.183 -0.941 h 59.002 c 0.826 0 1.615 0.341 2.183 0.941 c 0.566 0.601 0.86 1.409 0.813 2.234 l -3.928 67.089 C 73.294 86.33 69.403 90 64.71 90 z M 18.679 17.381 l 3.743 63.913 C 22.51 82.812 23.771 84 25.291 84 H 64.71 c 1.52 0 2.779 -1.188 2.868 -2.705 l 3.742 -63.914 H 18.679 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 80.696 17.381 H 9.304 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 71.393 c 1.657 0 3 1.343 3 3 S 82.354 17.381 80.696 17.381 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 58.729 17.381 H 31.271 c -1.657 0 -3 -1.343 -3 -3 V 8.789 C 28.271 3.943 32.214 0 37.061 0 h 15.879 c 4.847 0 8.789 3.943 8.789 8.789 v 5.592 C 61.729 16.038 60.386 17.381 58.729 17.381 z M 34.271 11.381 h 21.457 V 8.789 C 55.729 7.251 54.478 6 52.939 6 H 37.061 c -1.538 0 -2.789 1.251 -2.789 2.789 V 11.381 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 58.33 74.991 c -0.06 0 -0.118 -0.002 -0.179 -0.005 c -1.653 -0.097 -2.916 -1.517 -2.819 -3.171 l 2.474 -42.244 c 0.097 -1.655 1.508 -2.933 3.171 -2.819 c 1.653 0.097 2.916 1.516 2.819 3.17 l -2.474 42.245 C 61.229 73.761 59.906 74.991 58.33 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 31.669 74.991 c -1.577 0 -2.898 -1.23 -2.992 -2.824 l -2.473 -42.245 c -0.097 -1.654 1.165 -3.073 2.819 -3.17 c 1.646 -0.111 3.073 1.165 3.17 2.819 l 2.473 42.244 c 0.097 1.654 -1.165 3.074 -2.819 3.171 C 31.788 74.989 31.729 74.991 31.669 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 45 74.991 c -1.657 0 -3 -1.343 -3 -3 V 29.747 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 42.244 C 48 73.648 46.657 74.991 45 74.991 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,0,73); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                        </svg>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
};

//Update Total
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-right-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-right-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace(" р.", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        //If Price contains some Cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = total + " р.";
    
};